import { Button } from "@/components/ui/button";
import Link from "next/link";

export function EngagementSection() {
    return (
        <section className="border-y bg-muted/30 py-8 md:py-16 text-center">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-2xl space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
                        Partner With Us
                    </h2>
                    <p className="text-muted-foreground md:text-xl">
                        Engage directly with ABCG Research. Our solutions are designed for institutional & Retail investors seeking edge.
                    </p>
                    <ul className="text-sm md:text-base text-muted-foreground grid gap-2 sm:grid-cols-3">
                        <li className="flex items-center justify-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" /> Macro Reports
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" /> Alpha Ideas
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" /> AI Automation
                        </li>
                    </ul>
                    <Button size="lg" className="mt-8" asChild>
                        <Link href="/services">
                            Explore Solutions
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
