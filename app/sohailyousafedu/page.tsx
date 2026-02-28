"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, TrendingUp, MonitorPlay, UserCheck, Instagram, Facebook, Youtube, MessageCircle, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { submitForm } from "@/actions/submit-form";
import Image from "next/image";
import { useTheme } from "next-themes";

const AFFILIATIONS = [
    { name: "Odoo", src: "/odoo-logo.png", type: "image" },
    { name: "IRF", src: "/independent-research-forum-logo.png", type: "image" },
    { name: "Optiquant", type: "text" },
    { name: "Value Stock & Commodities", src: "/affiliations/logo-value-stock.jpg", type: "image" },
    { name: "OS Capital", src: "/affiliations/logo-os-capital.jpg", type: "image" },
    { name: "PSX", src: "/affiliations/logo-psx.jpg", type: "image" },
    { name: "PMEX", src: "/affiliations/logo-pmex.png", type: "image" },
];

export default function SohailYousafEduPage() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const savedTheme = theme;
        setTheme("dark");
        return () => {
            if (savedTheme) setTheme(savedTheme);
        };
    }, []);

    const [sessionFormData, setSessionFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [isSessionSubmitting, setIsSessionSubmitting] = useState(false);
    const [sessionSubmitStatus, setSessionSubmitStatus] = useState<"idle" | "success" | "error">("idle");


    const handleSessionSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSessionSubmitting(true);
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', sessionFormData.name);
            formDataToSend.append('email', sessionFormData.email);
            formDataToSend.append('phone', sessionFormData.phone);
            formDataToSend.append('subject', "Live Session Registration");
            formDataToSend.append('message', "Registration for Weekly Live Analysis Session");

            await submitForm('Sohail Yousaf Edu', formDataToSend);
            setSessionSubmitStatus("success");
            setSessionFormData({ name: "", email: "", phone: "" });
            setTimeout(() => setSessionSubmitStatus("idle"), 5000);
        } catch (error) {
            console.error(error);
            setSessionSubmitStatus("error");
        } finally {
            setIsSessionSubmitting(false);
        }
    };

    const handleSessionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSessionFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">

            {/* Expert Profile Section - Moved to Top */}
            <section className="w-full bg-background border-b border-border/10">
                <div className="w-full group relative">
                    {/* Banner Image */}
                    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-black overflow-hidden">
                        <img
                            src="/sohail-profile-banner.png"
                            alt="Forex Expert Sohail Yousaf - 32 Years in Global Financial Markets"
                            className="w-full h-full object-contain md:object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50" />
                    </div>

                    {/* Social Links Overlay or Bar - Positioned at bottom container */}
                    <div className="absolute bottom-0 left-0 right-0 z-20">
                        <div className="container px-4 md:px-6 pb-4 md:pb-6 flex flex-col items-end justify-end gap-6">

                            <div className="flex items-center gap-4">
                                <Link href="https://whatsapp.com/channel/0029VbBnW78IN9iloMgbNF2p" target="_blank" rel="noopener noreferrer">
                                    <Button size="icon" variant="outline" className="rounded-full w-14 h-14 border-green-500/50 text-green-500 hover:bg-green-500 hover:text-white transition-all bg-black/50 backdrop-blur shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.048c0 2.123.554 4.197 1.604 6.04L0 24l6.096-1.6c1.78.96 3.792 1.488 5.86 1.49l.006.002c6.634 0 12.046-5.415 12.049-12.054a11.848 11.848 0 00-3.488-8.528z" />
                                        </svg>
                                        <span className="sr-only">WhatsApp</span>
                                    </Button>
                                </Link>
                            </div>

                            <div className="text-white backdrop-blur-sm bg-black/30 p-3 rounded-xl border border-white/5 text-right w-fit max-w-[300px]">
                                <h3 className="text-lg font-serif font-bold leading-tight">Join Sohail Yousaf Whatsapp Channel</h3>
                                <p className="text-xs text-slate-200 mt-1">For latest market updates and signals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Account Opening Section - Revamped */}
            <section className="py-10 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center text-center space-y-4 mb-8">
                        <h2 className="text-3xl font-bold font-serif tracking-tight">Trade with Confidence</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Unlock the potential of PSX and PMX with our expert guidance.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {/* 24h Account Opening */}
                        <Card className="group relative overflow-hidden border-none shadow-lg bg-background hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                            <CardHeader className="text-center pt-8 pb-4">
                                <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-lg font-bold">24h Activation</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-foreground pb-8 px-4">
                                <p className="text-lg font-bold">Free & Fast Account Opening.</p>
                            </CardContent>
                        </Card>

                        {/* Full Compliance */}
                        <Card className="group relative overflow-hidden border-none shadow-lg bg-background hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
                            <CardHeader className="text-center pt-8 pb-4">
                                <div className="mx-auto w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-lg font-bold">Zero Hassle</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-foreground pb-8 px-4">
                                <p className="text-lg font-bold">We handle all Compliance 100% Free.</p>
                            </CardContent>
                        </Card>

                        {/* Best Brokerage */}
                        <Card className="group relative overflow-hidden border-none shadow-lg bg-background hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500" />
                            <CardHeader className="text-center pt-8 pb-4">
                                <div className="mx-auto w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <TrendingUp className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-lg font-bold">Top Brokers</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-foreground pb-8 px-4">
                                <p className="text-lg font-bold">Partnered with Pakistan's Best Houses.</p>
                            </CardContent>
                        </Card>

                        {/* Expert Guidance */}
                        <Card className="group relative overflow-hidden border-none shadow-lg bg-background hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />
                            <CardHeader className="text-center pt-8 pb-4">
                                <div className="mx-auto w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <UserCheck className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-lg font-bold">Pro Guidance</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-foreground pb-8 px-4">
                                <p className="text-lg font-bold">Expert Analysis for PSX & PMX.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Live Session Section */}
            <section className="py-10 border-t border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 space-y-6">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
                                <div className="w-2 h-2 rounded-full bg-[#f26726] mr-2 animate-pulse" />
                                Weekly Live Session
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
                                Live Analysis with Sohail Yousaf
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Join Sohail Yousaf, a senior market analyst, every week for a deep dive into the markets.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                    <span><strong>Every Friday at 9:00 PM</strong> - Mark your calendar.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                    <span><strong>Free to Join</strong> - Accessible to everyone, no hidden fees.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                                    <span><strong>Direct Interaction</strong> - Ask questions and get real-time guidance on where to start.</span>
                                </li>
                            </ul>
                            <form onSubmit={handleSessionSubmit} className="mt-6 space-y-4 max-w-md">
                                <div className="space-y-2">
                                    <Input
                                        name="name"
                                        value={sessionFormData.name}
                                        onChange={handleSessionChange}
                                        placeholder="Full Name"
                                        required
                                        className="bg-background/50"
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input
                                        name="email"
                                        type="email"
                                        value={sessionFormData.email}
                                        onChange={handleSessionChange}
                                        placeholder="Email Address"
                                        required
                                        className="bg-background/50"
                                    />
                                    <Input
                                        name="phone"
                                        value={sessionFormData.phone}
                                        onChange={handleSessionChange}
                                        placeholder="Phone Number"
                                        required
                                        className="bg-background/50"
                                    />
                                </div>

                                {sessionSubmitStatus === "success" && (
                                    <p className="text-sm text-green-500 font-medium">Successfully registered for the session!</p>
                                )}
                                {sessionSubmitStatus === "error" && (
                                    <p className="text-sm text-destructive font-medium">Failed to register. Please try again.</p>
                                )}

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-[#f26726] hover:bg-[#d9561d] text-white font-bold"
                                    disabled={isSessionSubmitting}
                                >
                                    {isSessionSubmitting ? "Submitting..." : "Register for Session"}
                                </Button>
                            </form>
                        </div>
                        <div className="lg:w-1/2 relative">
                            {/* Promo image for Live Session */}
                            <div className="aspect-video rounded-xl bg-muted border border-border/50 shadow-2xl overflow-hidden group">
                                <img
                                    src="/live-session-promo.png"
                                    alt="Live Session with Sohail Yousaf - Every Friday at 9:00 PM"
                                    className="w-full h-full object-contain md:object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Start Your Trading Journey Banner Section */}
            <section className="relative py-12 md:py-16 bg-slate-950 border-t border-border/10 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/40 via-slate-950 to-slate-950 z-10" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
                </div>
                <div className="container relative z-10 px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm font-medium mb-4 backdrop-blur-sm">
                            Start Trading Today
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 leading-tight">
                            Take Control of Your Financial Future
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                            Join Sohail Yousaf's network of traders. Experience fast activation, zero-hassle compliance, and top-tier broker partnerships.
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <Link href="/sohailyousafedu/accountopening">
                            <Button size="lg" className="bg-gradient-to-r from-[#f26726] to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold text-lg px-8 py-7 rounded-xl shadow-[0_0_30px_rgba(242,103,38,0.3)] hover:shadow-[0_0_40px_rgba(242,103,38,0.5)] transform transition-all hover:scale-105 border border-orange-500/20 flex items-center gap-3">
                                Open Trading Account
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Training Program Enrollment Section */}
            <section className="relative py-16 md:py-24 bg-background border-t border-border/10 overflow-hidden">
                <div className="absolute inset-0 bg-orange-500/5 -z-10" />
                <div className="container relative z-10 px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">

                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm font-medium backdrop-blur-sm">
                            <GraduationCap className="w-4 h-4 mr-2" />
                            Premium Certification
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight">
                            Master the Markets with Professional Training
                        </h2>
                        <ul className="text-lg text-muted-foreground space-y-3 mx-auto lg:mx-0 max-w-lg text-left inline-block">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>Get a <strong>recognized certificate</strong> upon completion</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>Comprehensive 1.5-month curriculum</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span><strong>Special 20% discounts</strong> for students & existing clients</span>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:w-1/3 w-full max-w-sm rounded-2xl bg-gradient-to-b from-slate-900 to-black p-8 shadow-2xl border border-orange-500/20 text-center relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative">
                            <h3 className="text-2xl font-bold text-white mb-2">Join the Academy</h3>
                            <p className="text-slate-400 mb-8 text-sm">Limited seats available for personalized mentoring.</p>
                            <Link href="/registration" className="block w-full">
                                <Button size="lg" className="w-full bg-[#f26726] hover:bg-[#d9561d] text-white font-bold text-lg py-6 rounded-xl shadow-lg shadow-orange-500/20 border border-orange-500/50 group-hover:scale-105 transition-transform">
                                    View Program Details
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Affiliations Ticker Section */}
            < section className="py-12 bg-muted/20 border-t border-border/10 overflow-hidden" >
                <style jsx global>{`
                    @keyframes scroll-ticker {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-ticker {
                        display: flex;
                        width: max-content;
                        animation: scroll-ticker 30s linear infinite;
                    }
                    .animate-ticker:hover {
                        animation-play-state: paused;
                    }
                `}</style>
                <div className="container px-4 md:px-6 mb-8 text-center">
                    <h2 className="text-xl font-black font-serif text-foreground uppercase tracking-widest">Our Affiliations & Partners</h2>
                </div>

                <div className="relative flex overflow-hidden group">
                    <div className="animate-ticker flex items-center gap-12 md:gap-24 px-12">
                        {/* Duplicate the array to create seamless loop */}
                        {[...AFFILIATIONS, ...AFFILIATIONS].map((item, index) => (
                            <div key={index} className="flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110">
                                {item.type === "image" ? (
                                    <div className="relative h-12 w-32 md:h-16 md:w-40">
                                        <Image
                                            src={item.src!}
                                            alt={item.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ) : (
                                    <span className="text-2xl md:text-3xl font-serif font-bold tracking-tighter text-foreground uppercase">
                                        {item.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Floating WhatsApp Button */}
            < div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2" >
                <style jsx global>{`
                    @keyframes blink-shadow {
                        0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
                        70% { box-shadow: 0 0 0 15px rgba(34, 197, 94, 0); }
                        100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
                    }
                    .animate-whatsapp-blink {
                        animation: blink-shadow 2s infinite;
                    }
                `}</style>
                <Link
                    href="https://wa.me/923390004920"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <div className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-green-500/30 p-2 pr-4 rounded-full shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white animate-whatsapp-blink">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.048c0 2.123.554 4.197 1.604 6.04L0 24l6.096-1.6c1.78.96 3.792 1.488 5.86 1.49l.006.002c6.634 0 12.046-5.415 12.049-12.054a11.848 11.848 0 00-3.488-8.528z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-foreground group-hover:text-green-600 transition-colors">Contact us now</span>
                        </div>
                    </div>
                </Link>
            </div >
        </div >
    );
}
