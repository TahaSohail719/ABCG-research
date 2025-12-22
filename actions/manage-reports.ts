"use server";

import { put, list, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";

const REPORTS_JSON_PATH = "reports.json";
// Fallback direct URL if list() fails (same pattern as submissions)
const DIRECT_REPORTS_URL = "https://zgwftklqzehf5aam.public.blob.vercel-storage.com/reports.json";

export interface Report {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
    pdfUrl: string;
    pdfPathname: string;
}

export async function getReports() {
    try {
        // Try direct fetch first for speed and reliability in this env
        const res = await fetch(DIRECT_REPORTS_URL, { cache: 'no-store' });
        if (res.ok) {
            return await res.json() as Report[];
        }

        // Fallback to list() if direct fetch fails
        const { blobs } = await list();
        const jsonBlob = blobs.find((b) => b.pathname === REPORTS_JSON_PATH);

        if (jsonBlob) {
            const res = await fetch(jsonBlob.url, { cache: 'no-store' });
            if (res.ok) {
                return await res.json() as Report[];
            }
        }
        return [];
    } catch (err) {
        console.error("Failed to fetch reports", err);
        return [];
    }
}

export async function deleteReport(id: string, pdfUrl: string) {
    try {
        // 1. Fetch current reports
        const reports = await getReports();

        // 2. Filter out the report to be deleted
        const updatedReports = reports.filter(r => r.id !== id);

        // 3. Update reports.json
        await put(REPORTS_JSON_PATH, JSON.stringify(updatedReports, null, 2), {
            access: "public",
            addRandomSuffix: false,
            // @ts-ignore
            allowOverwrite: true,
        });

        // 4. Delete the actual PDF file from Blob
        // We need to find the blob pathname from the URL if not provided directly, 
        // but passing the URL to del() usually works if it's the full Blob URL.
        await del(pdfUrl);

        revalidatePath("/research");
        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        console.error("Failed to delete report:", error);
        throw error;
    }
}

export async function reorderReports(reports: Report[]) {
    try {
        // Just overwrite the JSON with the new order provided by client
        await put(REPORTS_JSON_PATH, JSON.stringify(reports, null, 2), {
            access: "public",
            addRandomSuffix: false,
            // @ts-ignore
            allowOverwrite: true,
        });

        revalidatePath("/research");
        return { success: true };
    } catch (error) {
        console.error("Failed to reorder reports:", error);
        throw error;
    }
}
