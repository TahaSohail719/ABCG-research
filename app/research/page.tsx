import { list } from '@vercel/blob';
import { ResearchCard } from "@/components/ResearchCard";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";


// Revalidate every 60 seconds
export const revalidate = 60;

const DEMO_POSTS = [
    {
        title: "Trade Turbulence & Economic Recalibration: Q2 Outlook Under Pressure",
        date: "Oct 12, 2025",
        category: "Macro Strategy",
        excerpt: "Analyzing the escalating trade tensions and their direct impact on global supply chains and central bank policy recalibrations.",
        href: "/research/trading-turbulence",
        image: "/research/trading-turbulence.jpg",
    },
    {
        title: "Global Markets on Edge: Inflation, Trade Wars & Policy Shifts",
        date: "Oct 10, 2025",
        category: "Global Markets",
        excerpt: "An in-depth analysis of renewed inflationary pressures and the escalating trade tensions reshaping the global economic landscape.",
        href: "/research/global-markets-edge",
        image: "/research/global-markets-edge.jpg",
    },
    {
        title: "Global Markets in Flux: Dollar Slides, Euro Eyes Key Levels",
        date: "Oct 05, 2025",
        category: "FX Analysis",
        excerpt: "Technical and fundamental breakdown of the US Dollar's recent weakness and the critical resistance levels for the Euro.",
        href: "/research/global-markets-flux",
        image: "/research/global-markets-flux.jpg",
    },
];



export default async function ResearchPage() {
    let reports: any[] = [];

    // Fetch reports.json from Vercel Blob
    // We first list blobs to find it, or if we knew the URL we could fetch directly.
    // Listing is safer to find the latest version.
    try {
        const { blobs } = await list();
        const jsonBlob = blobs.find((b) => b.pathname === "reports.json");
        if (jsonBlob) {
            const res = await fetch(jsonBlob.url, { next: { tags: ['reports'] }, cache: 'no-store' });
            if (res.ok) {
                reports = await res.json();
            }
        }
    } catch (error) {
        console.log("Failed to fetch reports.json", error);
    }

    return (
        <div className="container py-12 px-4 md:px-6">
            <h1 className="text-4xl font-serif font-bold mb-8">Latest Research</h1>

            {/* Reports Section */}
            {reports.length > 0 && (
                <div className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold mb-6">Weekly Reports (PDF)</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {reports.map((report) => (
                            <ResearchCard
                                key={report.id}
                                title={report.title}
                                date={new Date(report.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                                category={report.category}
                                excerpt={report.description}
                                href={report.pdfUrl}
                            // We don't have images for PDFs yet, so we pass undefined or a placeholder if desired
                            />
                        ))}
                    </div>
                </div>
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {DEMO_POSTS.map((post, i) => (
                    <ResearchCard
                        key={i}
                        {...post}
                    />
                ))}
            </div>

            <div className="mt-12 text-center">
                <Button variant="outline">Load More</Button>
            </div>
        </div>
    );
}
