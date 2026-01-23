"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, TrendingUp, MonitorPlay, UserCheck } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { submitForm } from "@/actions/submit-form";

export default function SohailYousafEduPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('subject', "Sohail Yousaf Edu Inquiry");
            formDataToSend.append('message', formData.message);

            await submitForm('Sohail Yousaf Edu', formDataToSend);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden min-h-[70vh]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background/70 dark:bg-slate-950/70 z-10" />
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 opacity-70"
                        style={{ backgroundImage: "url('/network-background.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background/80 to-background dark:from-brand-navy/60 z-20" />
                </div>

                <div className="container relative z-30 px-4 md:px-6 flex flex-col items-center gap-6">
                    <h1 className="font-serif text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                        AlphaLens AI
                    </h1>
                    <p className="max-w-[50rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 font-light">
                        <strong>Real-time AI Based market analysis and signals of commodities and currencies.</strong>
                    </p>
                    <Link href="https://alphalensai.com/" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="h-12 px-8 text-base bg-[#f26726] hover:bg-[#d9561d] text-white">
                            Try AlphaLens AI <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Account Opening Section - Revamped */}
            <section className="py-20 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center text-center space-y-4 mb-16">
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
                            <CardContent className="text-center text-muted-foreground pb-8">
                                <p>Free & Fast Account Opening.</p>
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
                            <CardContent className="text-center text-muted-foreground pb-8">
                                <p>We handle all Compliance 100% Free.</p>
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
                            <CardContent className="text-center text-muted-foreground pb-8">
                                <p>Partnered with Pakistan's Best Houses.</p>
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
                            <CardContent className="text-center text-muted-foreground pb-8">
                                <p>Expert Analysis for PSX & PMX.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Live Session Section */}
            <section className="py-20 border-t border-border/50 relative overflow-hidden">
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
                            <Button size="lg" className="mt-4" disabled>
                                <MonitorPlay className="mr-2 h-4 w-4" /> Join Link (Coming Soon)
                            </Button>
                        </div>
                        <div className="lg:w-1/2 relative">
                            {/* Placeholder for a video thumbnail or image of Sohail Yousaf */}
                            <div className="aspect-video rounded-xl bg-muted border border-border/50 shadow-2xl flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60" />
                                <MonitorPlay className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <p className="font-bold text-lg">Market Outlook & Q&A</p>
                                    <p className="text-sm opacity-80">Friday's @ 9PM PKT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-background">
                <div className="container px-4 md:px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-serif mb-4">Start Your Journey</h2>
                        <p className="text-muted-foreground">
                            Ready to open an account or need more details? Submit your information and we will guide you through the process.
                        </p>
                    </div>

                    <Card className="border-border/50 shadow-xl bg-muted/10">
                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="bg-background"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+92 300 1234567"
                                            required
                                            className="bg-background"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        className="bg-background"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message / Inquiry</label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="I am interested in opening a PSX account..."
                                        required
                                        className="min-h-[120px] bg-background"
                                    />
                                </div>

                                {submitStatus === "success" && (
                                    <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-3 rounded-md text-sm">
                                        Success! Our team will contact you shortly.
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-md text-sm">
                                        Something went wrong. Please try again.
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-[#f26726] hover:bg-[#d9561d] text-white font-bold"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
