
"use server";

import { put, list } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { Submission } from "./submit-form";

const SUBMISSIONS_JSON_PATH = "submissions.json";

export async function deleteSubmission(id: string) {
    try {
        const { blobs } = await list();
        const jsonBlob = blobs.find((b) => b.pathname === SUBMISSIONS_JSON_PATH);

        if (jsonBlob) {
            const res = await fetch(jsonBlob.url, { cache: 'no-store' });
            if (res.ok) {
                let submissions: Submission[] = await res.json();

                const initialLength = submissions.length;
                submissions = submissions.filter(s => s.id !== id);

                if (submissions.length !== initialLength) {
                    await put(SUBMISSIONS_JSON_PATH, JSON.stringify(submissions, null, 2), {
                        access: "public",
                        addRandomSuffix: false,
                        // @ts-ignore
                        allowOverwrite: true,
                    });
                    revalidatePath("/admin");
                    return { success: true };
                }
            }
        }
        return { success: false, error: "Submission not found" };
    } catch (err) {
        console.error("Failed to delete submission", err);
        return { success: false, error: "Failed to delete" };
    }
}
