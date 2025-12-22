
"use server";

import { put, list } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export interface Report {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
    pdfUrl: string;
    pdfPathname: string;
}

const REPORTS_JSON_PATH = "reports.json";

export async function uploadReport(formData: FormData) {
    const file = formData.get("file") as File;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const date = formData.get("date") as string;

    if (!file || !title || !date) {
        throw new Error("Missing required fields");
    }

    // 1. Upload PDF
    const pdfBlob = await put(file.name, file, {
        access: "public",
    });

    // 2. Fetch existing reports.json
    // We list blobs to find the JSON file URL, then fetch it.
    // Ideally, we'd just fetch the known URL if we had it, but list is safer to find the latest.
    let reports: Report[] = [];
    try {
        const { blobs } = await list();
        const jsonBlob = blobs.find((b) => b.pathname === REPORTS_JSON_PATH);

        if (jsonBlob) {
            const res = await fetch(jsonBlob.url, { cache: 'no-store' }); // Ensure fresh fetch
            if (res.ok) {
                reports = await res.json();
            }
        }
    } catch (err) {
        console.log("No existing reports.json or fetch failed, starting new.", err);
    }

    // 3. Add new report
    const newReport: Report = {
        id: crypto.randomUUID(),
        title,
        description,
        category,
        date,
        pdfUrl: pdfBlob.url,
        pdfPathname: pdfBlob.pathname,
    };

    reports.unshift(newReport); // Add to top

    // 4. Overwrite reports.json
    // We use `put` with the same pathname to overwrite it.
    await put(REPORTS_JSON_PATH, JSON.stringify(reports, null, 2), {
        access: "public",
        addRandomSuffix: false, // Important: keep the filename static
        // @ts-ignore
        allowOverwrite: true,
    });

    revalidatePath("/research");
    return { success: true };
}
