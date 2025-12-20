"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { FOOTER_INFO } from "@/lib/constants";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="flex flex-col min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden min-h-[40vh]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background/60 dark:bg-slate-950/60 z-10" />
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 opacity-70"
                        style={{ backgroundImage: "url('/finance-hero-contact-abstract.png')" }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background/80 to-background dark:from-brand-navy/60 z-20" />
                    {/* Abstract Shapes */}
                    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
                    <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] animate-pulse delay-700" />
                </div>

                <div className="container relative z-30 px-4 md:px-6">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-tight text-foreground">
                        Get In Touch
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                        Have a question or want to learn more about our research services? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="container px-4 md:px-6 mt-8 relative z-40">
                <div className="grid gap-6 md:grid-cols-3 mb-12">
                    <Card className="text-center group hover:border-primary/50 transition-colors bg-background/50 backdrop-blur-sm">
                        <CardHeader>
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Mail className="h-8 w-8" />
                            </div>
                            <CardTitle className="font-serif">Email Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">info@abcgresearch.com</p>
                        </CardContent>
                    </Card>

                    <Card className="text-center group hover:border-primary/50 transition-colors bg-background/50 backdrop-blur-sm">
                        <CardHeader>
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Phone className="h-8 w-8" />
                            </div>
                            <CardTitle className="font-serif">Call Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">+92 3154 521 099</p>
                        </CardContent>
                    </Card>

                    <Card className="text-center group hover:border-primary/50 transition-colors bg-background/50 backdrop-blur-sm">
                        <CardHeader>
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <MapPin className="h-8 w-8" />
                            </div>
                            <CardTitle className="font-serif">Visit Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Pakistan, United Kingdom & France Offices</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Contact Form & Office Locations */}
            <section className="container px-4 md:px-6 py-12">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Form */}
                    <div className="flex flex-col h-full space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold font-serif mb-2">Send Us a Message</h2>
                            <p className="text-muted-foreground">We typically respond within 24 business hours.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl backdrop-blur-sm">
                            <div className="space-y-6">
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
                                            className="bg-background/50 border-white/10"
                                        />
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
                                            className="bg-background/50 border-white/10"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Consultation Inquiry"
                                        required
                                        className="bg-background/50 border-white/10"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        required
                                        className="min-h-[150px] bg-background/50 border-white/10"
                                    />
                                </div>
                            </div>

                            <div className="pt-6">
                                {submitStatus === "success" && (
                                    <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-3 rounded-xl text-sm mb-4">
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full h-12 bg-[#f26726] hover:bg-[#d9561d] text-white font-bold rounded-xl shadow-lg shadow-[#f26726]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Office Locations */}
                    <div className="flex flex-col h-full space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold font-serif mb-2">Our Offices</h2>
                            <p className="text-muted-foreground">Strategic locations to serve our global clients.</p>
                        </div>
                        <div className="space-y-6 flex-grow flex flex-col justify-between">
                            <Card className="border-white/10 bg-white/5 hover:border-primary/30 transition-all group overflow-hidden flex-grow">
                                <CardHeader className="p-6 h-full flex flex-col justify-center">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <CardTitle className="font-serif">Lahore, Pakistan</CardTitle>
                                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                                {FOOTER_INFO.locations[0]}
                                            </p>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>

                            <Card className="border-white/10 bg-white/5 hover:border-primary/30 transition-all group overflow-hidden flex-grow">
                                <CardHeader className="p-6 h-full flex flex-col justify-center">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <CardTitle className="font-serif">London, United Kingdom</CardTitle>
                                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                                {FOOTER_INFO.locations[1]}
                                            </p>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>

                            <Card className="border-white/10 bg-white/5 hover:border-primary/30 transition-all group overflow-hidden flex-grow">
                                <CardHeader className="p-6 h-full flex flex-col justify-center">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <CardTitle className="font-serif">Trois-Rivières, France</CardTitle>
                                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                                {FOOTER_INFO.locations[2]}
                                            </p>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
