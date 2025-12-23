import { Hero } from "@/components/Hero";
import { StatsGrid } from "@/components/StatsGrid";
import { FeatureGrid } from "@/components/FeatureGrid";
import { EngagementSection } from "@/components/EngagementSection";
import { ResearchCard } from "@/components/ResearchCard";
import { ForexExpoGallery } from "@/components/ForexExpoGallery";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Hardcoded URL for debugging/fix similar to Research Page
const DIRECT_REPORTS_URL = "https://zgwftklqzehf5aam.public.blob.vercel-storage.com/reports.json";

export default async function Home() {
  let recentResearch: any[] = [];

  try {
    const res = await fetch(DIRECT_REPORTS_URL, { next: { tags: ['reports'] }, cache: 'no-store' });
    if (res.ok) {
      const allReports = await res.json();
      // Sort newest first
      // @ts-ignore
      allReports.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      // Take top 3
      recentResearch = allReports.slice(0, 3);
    }
  } catch (error) {
    console.log("Failed to fetch reports.json for homepage", error);
  }

  // Fallback to empty if fetch fails
  // const recentResearch = [ ... ]; // removed hardcoded


  return (
    <div className="flex flex-col gap-4 md:gap-8 pb-20">
      <Hero />


      {/* Stats and Features Combined Section */}
      <section className="container px-4 md:px-6 py-6 md:py-8">
        <h2 className="text-3xl font-bold font-serif tracking-tight text-center mb-8 md:mb-10 mt-4 md:mt-0">
          Our Impact
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-2">
          <StatsGrid />
          <FeatureGrid />
        </div>
      </section>

      {/* Latest Research */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8 md:mb-12">
          <h2 className="text-3xl font-bold font-serif tracking-tight">Latest Research</h2>
          <p className="text-muted-foreground max-w-[42rem]">
            Insights from our desk to your screen.
          </p>
          <Link href="/research" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
            View All Research <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentResearch.length > 0 ? (
            recentResearch.map((item, idx) => (
              <ResearchCard
                key={item.id || idx}
                title={item.title}
                date={new Date(item.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                category={item.category}
                excerpt={item.description}
                href={item.pdfUrl}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-muted-foreground py-8">
              <p>Stay tuned for our latest research reports.</p>
            </div>
          )}
        </div>
      </section>

      {/* Latest Insights */}
      <section className="container px-4 md:px-6 py-4 md:py-8">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl font-bold font-serif tracking-tight">Latest Insights</h2>
          <p className="text-lg text-muted-foreground max-w-4xl font-light">
            ABCG Research was invited by IRF to provide insights on the topic “Global Asset Allocation in a Rapidly Evolving Digital Asset Landscape?”
          </p>
          <div className="relative w-full flex justify-center">
            <img
              src="/latest-insights-new.jpg"
              alt="Latest Insights - ABCG Research invited by IRF"
              className="w-full h-auto object-contain rounded-xl shadow-xl border border-border/50"
            />
          </div>
          <Link
            href="https://lnkd.in/eQNmXYxU"
            target="_blank"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Listen Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Forex Expo Section */}
      <section className="container px-4 md:px-6 py-4 md:py-8 border-t border-border/40">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl font-bold font-serif tracking-tight">AlphaLens AI Debut at Forex Expo 2025</h2>
          <p className="text-lg text-muted-foreground max-w-4xl font-light">
            Showcasing our latest innovations in AI-driven market analysis to global leaders.
          </p>
          <ForexExpoGallery />
        </div>
      </section>

      <EngagementSection />
    </div >
  );
}
