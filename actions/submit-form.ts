
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
                    console.log(`Starting parallel upload for: ${key}, name: ${value.name}, size: ${value.size}`);
                    const blob = await put(`uploads/${Date.now()}-${value.name}`, value, {
                        access: 'public',
                        addRandomSuffix: true,
                    });
                    data[key] = blob.url;
                    console.log(`Finished upload for: ${key}`);
                } catch (err: any) {
                    console.error(`Failed to upload file ${key}. Full Error:`, err);
                    // Check if it's a token issue specifically
                    const errorMessage = err.message || "Unknown error";
                    throw new Error(`Failed to upload ${key} (${errorMessage}). Please try again.`);
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

// Hardcoded URL for debugging/fix
const DIRECT_SUBMISSIONS_URL = "https://zgwftklqzehf5aam.public.blob.vercel-storage.com/submissions.json";

export async function getSubmissions() {
    try {
        console.log("Debug: Fetching manually from", DIRECT_SUBMISSIONS_URL);
        const res = await fetch(DIRECT_SUBMISSIONS_URL, { cache: 'no-store' });

        if (res.ok) {
            const data = await res.json();
            console.log("Debug: Successfully fetched via direct URL. Count:", data.length);
            return data as Submission[];
        } else {
            console.error("Debug: Direct fetch failed with status:", res.status);
        }

        // Fallback to list() if direct fetch fails (though unlikely if ENOTFOUND is the issue)
        /*
        const { blobs } = await list();
        console.log("Debug: All blobs found:", blobs.map(b => b.pathname));
        
        const jsonBlob = blobs.find((b) => b.pathname === SUBMISSIONS_JSON_PATH);
        console.log("Debug: Found submissions blob:", jsonBlob?.url);

        if (jsonBlob) {
            const res = await fetch(jsonBlob.url, { cache: 'no-store' });
            if (res.ok) {
                const data = await res.json();
                console.log("Debug: Fetched submissions count:", data.length);
                return data as Submission[];
            }
        }
        */
        return [];
    } catch (err) {
        console.error("Failed to fetch submissions", err);
        return [];
    }
}
