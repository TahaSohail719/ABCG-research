
"use server";

import { put, list } from "@vercel/blob";
import { revalidatePath } from "next/cache";

const SUBMISSIONS_JSON_PATH = "submissions.json";

export interface Submission {
    id: string;
    type: 'Contact Us' | 'Medisure' | 'Contact' | 'Engagement' | 'Sohail Yousaf Edu'; // Keeping old types for backward compatibility locally
    data: Record<string, string>;
    date: string;
}

export async function submitForm(type: 'Contact Us' | 'Medisure' | 'Contact' | 'Engagement' | 'Sohail Yousaf Edu', formData: FormData) {
    const data: Record<string, string> = {};
    const fileUploadPromises: Promise<void>[] = [];

    // Process all entries in formData
    for (const [key, value] of Array.from(formData.entries())) {
        if (typeof value === 'string') {
            data[key] = value;
        } else if (value instanceof File && value.size > 0) {
            fileUploadPromises.push((async () => {
                try {
                    const blob = await put(`uploads/${Date.now()}-${value.name}`, value, {
                        access: 'public',
                        addRandomSuffix: true,
                    });
                    data[key] = blob.url;
                } catch (err: any) {
                    throw new Error(`Failed to upload ${key}. Please try again.`);
                }
            })());
        }
    }

    // Wait for all uploads to complete
    if (fileUploadPromises.length > 0) {
        await Promise.all(fileUploadPromises);
    }

    // 1. Fetch existing submissions
    let submissions: Submission[] = [];
    try {
        const { blobs } = await list();
        const jsonBlob = blobs.find((b) => b.pathname === SUBMISSIONS_JSON_PATH);

        if (jsonBlob) {
            const res = await fetch(jsonBlob.url, { cache: 'no-store' });
            if (res.ok) {
                submissions = await res.json();
            }
        }
    } catch (err) {
        console.log("No existing submissions.json, starting new.", err);
    }

    // 2. Add new submission
    const newSubmission: Submission = {
        id: crypto.randomUUID(),
        type,
        data,
        date: new Date().toISOString(),
    };

    submissions.unshift(newSubmission);

    // 3. Save to Blob
    try {
        await put(SUBMISSIONS_JSON_PATH, JSON.stringify(submissions, null, 2), {
            access: "public",
            addRandomSuffix: false,
            // @ts-ignore - Vercel Blob types might not be updated yet
            allowOverwrite: true,
        });
    } catch (error: any) {
        if (error.message?.includes("No token found")) {
            console.error("Missing Vercel Blob Token: Set BLOB_READ_WRITE_TOKEN in .env.local");
            throw new Error("Missing Vercel Blob configuration. Please contact administrator.");
        }
        throw error;
    }

    // Revalidate admin pages to show new submission immediately
    revalidatePath("/admin");
    revalidatePath("/sohailyousafedu/admin");
    return { success: true };
}

// 4. Helper to find and fetch the latest submissions file
async function fetchLatestSubmissions(): Promise<Submission[]> {
    try {
        const { blobs } = await list();
        const jsonBlob = blobs.find((b) => b.pathname === SUBMISSIONS_JSON_PATH);

        if (jsonBlob) {
            const res = await fetch(jsonBlob.url, { cache: 'no-store' });
            if (res.ok) {
                return await res.json();
            }
        }
    } catch (err) {
        console.error("Failed to fetch submissions file from blob:", err);
    }
    return [];
}

export async function getSubmissions() {
    return await fetchLatestSubmissions();
}
