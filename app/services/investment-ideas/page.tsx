import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";

export default function InvestmentIdeasPage() {
    const features = [
        {
            icon: Target,
            title: "High-Conviction Ideas",
            description: "Carefully vetted investment opportunities backed by rigorous analysis and research.",
        },
        {
            icon: Lightbulb,
            title: "Actionable Insights",
            description: "Clear entry points, exit strategies, and risk-reward analysis for each recommendation.",
        },
        {
            icon: TrendingUp,
            title: "Portfolio Strategies",
            description: "Comprehensive asset allocation frameworks designed for optimal risk-adjusted returns.",
        },
    ];

    const categories = [
        {
            title: "Equity Ideas",
            description: "Long and short opportunities across global equity markets",
        },
        {
            title: "FX Trades",
            description: "Currency pair recommendations with technical and fundamental rationale",
        },
        {
            title: "Commodity Plays",
            description: "Strategic positioning in gold, oil, and other commodity markets",
        },
        {
            title: "Crypto Opportunities",
            description: "Digital asset investments with clear risk management guidelines",
        },
        {
            title: "Options Strategies",
            description: "Sophisticated options plays for income and hedging",
        },
        {
            title: "Macro Themes",
            description: "Thematic investment ideas based on global macro trends",
        },
    ];

    return (
        <div className="flex flex-col gap-12 md:gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.12),transparent_60%)]" />
                <div className="container px-4 md:px-6 py-20 md:py-32 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">
                            Investment Ideas
                        </h1>
                        <p className="text-xl text-slate-300 mb-8">
                            High-conviction trade setups and portfolio strategies designed to deliver alpha across all market conditions.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-semibold">
                                Get Started <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold font-serif mb-8">What We Offer</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {features.map((feature, idx) => (
                        <Card key={idx} className="border-2 hover:border-brand-cyan transition-colors">
                            <CardHeader>
                                <feature.icon className="h-12 w-12 text-brand-cyan mb-4" />
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Investment Categories */}
            <section className="container px-4 md:px-6">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold font-serif mb-4">Investment Categories</h2>
                    <p className="text-muted-foreground text-lg">
                        Our investment ideas span multiple asset classes and strategies to provide diversified opportunities.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, idx) => (
                        <Card key={idx} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-lg">{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">{category.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Performance Highlight */}
            <section className="container px-4 md:px-6">
                <div className="rounded-3xl bg-brand-navy p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-brand-gold/10 blur-[100px] rounded-full" />
                    <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold font-serif">Track Record</h2>
                            <p className="text-slate-300 md:text-lg">
                                Our investment ideas have consistently delivered superior risk-adjusted returns, with a proven track record of identifying opportunities before the broader market.
                            </p>
                        </div>
                        <div className="flex flex-col items-start lg:items-end">
                            <div className="text-6xl font-black text-brand-gold md:text-8xl tracking-tighter">
                                570+
                            </div>
                            <p className="text-xl font-medium mt-2 text-slate-300">
                                Investment Ideas Provided
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container px-4 md:px-6">
                <div className="rounded-3xl bg-gradient-to-r from-brand-navy to-slate-900 p-8 md:p-12 text-white text-center">
                    <h2 className="text-3xl font-bold font-serif mb-4">Ready to Access Alpha-Generating Ideas?</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                        Partner with us to receive high-conviction investment ideas backed by institutional-grade research and analysis.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-semibold">
                            Contact Our Team
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
