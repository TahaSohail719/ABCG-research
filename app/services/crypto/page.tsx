import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bitcoin, LineChart, Shield, ArrowRight } from "lucide-react";

export default function CryptoPage() {
    const features = [
        {
            icon: Bitcoin,
            title: "Digital Asset Analysis",
            description: "Comprehensive research on Bitcoin, Ethereum, and emerging cryptocurrencies with fundamental and technical insights.",
        },
        {
            icon: LineChart,
            title: "On-Chain Metrics",
            description: "Advanced blockchain analytics and on-chain data interpretation for informed investment decisions.",
        },
        {
            icon: Shield,
            title: "Risk Assessment",
            description: "Institutional-grade risk management frameworks tailored for digital asset portfolios.",
        },
    ];

    const researchTopics = [
        "Bitcoin Market Cycles & Halving Analysis",
        "Ethereum & DeFi Ecosystem Trends",
        "Stablecoin Market Dynamics",
        "Layer 2 Scaling Solutions",
        "NFT Market Intelligence",
        "Crypto Regulatory Developments",
        "Altcoin Investment Opportunities",
        "Blockchain Protocol Analysis",
    ];

    return (
        <div className="flex flex-col gap-12 md:gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-navy to-slate-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
                <div className="container px-4 md:px-6 py-20 md:py-32 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">
                            Crypto Currency Research
                        </h1>
                        <p className="text-xl text-slate-300 mb-8">
                            Institutional-grade digital asset research powered by AI-driven analytics and deep blockchain expertise.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="bg-brand-cyan hover:bg-brand-cyan/90 text-white font-semibold">
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
                        <Card key={idx} className="border-2 hover:border-brand-gold transition-colors">
                            <CardHeader>
                                <feature.icon className="h-12 w-12 text-brand-gold mb-4" />
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Research Topics */}
            <section className="container px-4 md:px-6">
                <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold font-serif mb-6">Sample Research Topics</h2>
                    <p className="text-muted-foreground mb-8 text-lg">
                        Stay ahead of the digital asset revolution with our comprehensive cryptocurrency research coverage.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {researchTopics.map((topic, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <div className="h-2 w-2 bg-brand-gold rounded-full mt-2" />
                                <span className="text-foreground font-medium">{topic}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="container px-4 md:px-6">
                <div className="rounded-3xl bg-brand-navy p-8 md:p-12 text-white">
                    <div className="grid gap-8 md:grid-cols-3 text-center">
                        <div>
                            <div className="text-5xl font-black text-brand-cyan mb-2">24/7</div>
                            <p className="text-slate-300">Market Monitoring</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-brand-gold mb-2">100+</div>
                            <p className="text-slate-300">Tokens Tracked</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-brand-cyan mb-2">Real-Time</div>
                            <p className="text-slate-300">On-Chain Analytics</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container px-4 md:px-6">
                <div className="rounded-3xl bg-gradient-to-r from-brand-navy to-slate-900 p-8 md:p-12 text-white text-center">
                    <h2 className="text-3xl font-bold font-serif mb-4">Navigate the Crypto Markets with Confidence</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                        Leverage our institutional-grade crypto research to make informed investment decisions in the digital asset space.
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
