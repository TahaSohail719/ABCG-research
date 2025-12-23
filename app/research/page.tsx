import { list } from '@vercel/blob';
import { ResearchCard } from "@/components/ResearchCard";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";


// Revalidate every 60 seconds
export const revalidate = 60;

const DIRECT_REPORTS_URL = "https://zgwftklqzehf5aam.public.blob.vercel-storage.com/reports.json";

export default async function ResearchPage() {
    let reports: any[] = [];

    // Fetch reports.json from Vercel Blob using direct URL for reliability
    try {
        const res = await fetch(DIRECT_REPORTS_URL, { next: { tags: ['reports'] }, cache: 'no-store' });
        if (res.ok) {
            reports = await res.json();
        }
    } catch (error) {
        console.log("Failed to fetch reports.json", error);
    }

    // Sort reports by date (newest first)
    reports.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="container py-12 px-4 md:px-6">
            <h1 className="text-4xl font-serif font-bold mb-8">Latest Research</h1>

            {/* Reports Grid */}
            {reports.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {reports.map((report) => (
                        <ResearchCard
                            key={report.id}
                            title={report.title}
                            date={new Date(report.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                            category={report.category}
                            excerpt={report.description}
                            href={report.pdfUrl}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 text-muted-foreground">
                    <p>No research reports available at the moment.</p>
                </div>
            )}

            <div className="mt-12 text-center">
                <Button variant="outline">Load More</Button>
            </div>
        </div>
    );
}
