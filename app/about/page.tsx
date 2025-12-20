import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Brain, Globe, LineChart, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden min-h-[50vh]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background/60 dark:bg-slate-950/60 z-10" />
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 opacity-70 dark:opacity-70"
                        style={{ backgroundImage: "url('/about-hero-bg.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background/80 to-background dark:from-brand-navy/60 z-20" />
                    {/* Abstract Shapes */}
                    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
                    <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-[80px] animate-pulse delay-700" />
                </div>

                <div className="container relative z-30 px-4 md:px-6">

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-tight">
                        Our Story
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed font-light italic">
                        "The business we operate in is like an intricate game of chess."
                    </p>
                </div>
            </section>

            {/* Mission, Vision & Advantage Grid */}
            <section className="container px-4 md:px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Left Column: Mission */}
                    <div className="group relative flex flex-col h-full rounded-3xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-md p-8 md:p-10 shadow-xl transition-all hover:shadow-primary/10 hover:border-primary/20">
                        <div className="absolute top-0 right-0 p-6 opacity-20 transform translate-x-2 -translate-y-2">
                            <ShieldCheck className="w-24 h-24 text-primary" />
                        </div>
                        <Badge variant="secondary" className="w-fit mb-6 bg-primary/20 text-primary hover:bg-primary/30">Our Mission</Badge>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Where We Started</h2>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Founded in <strong className="text-foreground text-primary">2019</strong>, ABCG Research began as a macro-focused investment research firm, specializing in North American and European markets.
                            </p>
                            <div className="pl-4 border-l-2 border-primary/30">
                                <p>
                                    In <strong className="text-foreground text-primary">2022</strong>, we evolved into a next-generation <strong className="text-foreground">ResTech firm</strong>. This transformation expanded our capabilities beyond research into <strong className="text-foreground">AI automation, real-time market intelligence, and scalable technology solutions</strong>.
                                </p>
                            </div>
                            <p>
                                Today, we partner with <strong className="text-foreground">investment banks, hedge funds, and brokerage houses</strong>, unlocking smarter insights at the intersection of <strong className="text-foreground">macroeconomics and AI</strong>.
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground/80 bg-background/20 px-3 py-1.5 rounded-full">
                                <ShieldCheck className="w-4 h-4 text-primary" /> Institutional Grade Integrity
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground/80 bg-background/20 px-3 py-1.5 rounded-full">
                                <Brain className="w-4 h-4 text-primary" /> Data-Driven Objectivity
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Vision & Advantage */}
                    <div className="flex flex-col gap-8">
                        {/* Vision Card */}
                        <div className="group relative rounded-3xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-md p-8 md:p-10 shadow-lg transition-all hover:shadow-primary/10 hover:border-primary/20 flex-1">
                            <div className="absolute top-0 right-0 p-6 opacity-20 transform translate-x-2 -translate-y-2">
                                <Globe className="w-20 h-20 text-blue-400" />
                            </div>
                            <Badge variant="secondary" className="w-fit mb-6 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">Our Vision</Badge>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Our Vision</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                At ABCG Research, our vision is to transform the way the world’s leading investors and researchers access, analyze, and apply insights. We aim to bridge the gap between traditional macroeconomic research and cutting-edge artificial intelligence, enabling financial institutions to make faster, smarter, and more resilient investment decisions. By reimagining research delivery and integrating real-time, AI-driven intelligence, we strive to shape a future where markets are navigated with precision, innovation, and confidence.
                            </p>
                        </div>

                        {/* Advantage Card */}
                        <div className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-md p-8 md:p-10 shadow-lg transition-all hover:shadow-primary/10 hover:border-primary/20 flex-1">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 blur-xl" />
                            <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-primary" /> The ABCG Advantage
                            </h3>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Traditional macro research is often slow. Pure AI models lack context. We combine the best of both.
                                </p>
                                <p>
                                    Our proprietary <strong className="text-foreground">AlphaLens AI</strong> platform processes data in real-time, scrutinized by expert analysts to form actionable strategic frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Affiliations Section */}
            <section className="py-20 border-y border-border/40 bg-muted/10 backdrop-blur-sm">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center gap-12 text-center">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                            Professional Affiliations
                        </h3>
                        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
                            {/* Odoo */}
                            <div className="group relative h-12 w-32 transition-all duration-500 hover:scale-110">
                                <Image
                                    src="/odoo-logo.png"
                                    alt="Odoo"
                                    fill
                                    className="object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-primary/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>

                            {/* IRF */}
                            <div className="group relative h-16 w-16 transition-all duration-500 hover:scale-110">
                                <Image
                                    src="/independent-research-forum-logo.png"
                                    alt="Independent Research Forum"
                                    fill
                                    className="object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>

                            {/* Optiquant */}
                            <div className="group relative transition-all duration-500 hover:scale-110">
                                <div className="font-bold text-3xl tracking-tighter text-slate-500/40 group-hover:text-slate-500 transition-all duration-500 cursor-default select-none uppercase font-serif">
                                    Optiquant
                                </div>
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/20 group-hover:w-full transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Core Pillars */}
            <section className="container px-4 md:px-6 py-12 md:py-16">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif">Core Pillars of Research</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our methodology is built on three unshakeable foundations, designed to withstand market volatility.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {[
                        {
                            icon: Globe,
                            title: "Global Macro",
                            desc: "Top-down analysis of geopolitical shifts, central bank policies, and cross-asset correlations."
                        },
                        {
                            icon: LineChart,
                            title: "Technical Precision",
                            desc: "Rigorous price action analysis to identify optimal entry and exit points with defined risk ratios."
                        },
                        {
                            icon: Brain,
                            title: "AI & Quant",
                            desc: "Proprietary models that detect market anomalies and sentiment shifts before they become consensus."
                        }
                    ].map((item, idx) => (
                        <Card key={idx} className="group relative border-white/10 bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                            <CardHeader>
                                <div className="p-3 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <CardTitle className="text-xl font-serif">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="relative py-16 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 z-0" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="container relative z-10 px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif mb-8 max-w-3xl mx-auto">Ready to see the market differently?</h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/services">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105">
                                Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-primary/20 hover:bg-primary/5 transition-all">
                                Contact Our Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
