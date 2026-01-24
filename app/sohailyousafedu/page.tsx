"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, TrendingUp, MonitorPlay, UserCheck, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
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

            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
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
            </div>
        </div>
    );
}
