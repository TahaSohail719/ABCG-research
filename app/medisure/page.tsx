"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    ArrowRight,
    ShieldCheck,
    Users,
    Rocket,
    CheckCircle2,
    ReceiptText,
    BarChart3,
    ClipboardCheck,
    Clock
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MedisurePage() {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
        alert("Thank you! Your inquiry has been received.");
        setFormData({ firstName: "", middleName: "", lastName: "", email: "", message: "" });
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden min-h-[60vh]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background/60 dark:bg-slate-950/60 z-10" />
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 opacity-70"
                        style={{ backgroundImage: "url('/medisure-hero-bg.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-background/80 to-background dark:from-brand-navy/60 z-20" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
                </div>

                <div className="container relative z-30 px-4 md:px-6">
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                        A Division of ABCG Research
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 tracking-tight max-w-4xl mx-auto">
                        MediSure
                    </h1>
                    <p className="text-2xl md:text-3xl text-primary font-medium mb-8">
                        Where HealthCare Meets Eminent Billing
                    </p>
                    <div className="flex justify-center">
                        <Button asChild size="lg" className="bg-[#f26726] hover:bg-[#d9561d] text-white px-10 h-14 rounded-2xl text-lg font-bold shadow-xl shadow-orange-500/20 transition-all hover:scale-105 active:scale-95">
                            <Link href="#audit">Get Your Free Billing Audit <ArrowRight className="ml-2 w-5 h-5" /></Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* About MediSure Section */}
            <section className="container px-4 md:px-6 pt-20 pb-12 border-b border-border/50">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">About MediSure</h2>
                        <h3 className="text-xl text-primary font-semibold mb-4 italic">Precision Billing for Modern Healthcare</h3>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            MediSure is a dedicated division of ABCG Research, created to empower healthcare providers with efficient and transparent medical billing solutions. Backed by our financial and operational expertise, MediSure ensures accuracy, compliance, and consistency across your revenue cycle.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <ShieldCheck className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">i-Unmatched Compliance</h4>
                                    <p className="text-muted-foreground">U.S. and international standards (HIPAA, ICD-10, CPT) – audited annually for zero-risk operations.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <Users className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">ii-Expert Team</h4>
                                    <p className="text-muted-foreground">Certified billing and AR specialists with 6+ years in healthcare finance.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <Rocket className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">iii-Scalable Solutions</h4>
                                    <p className="text-muted-foreground">From solo clinics to multi-site hospitals – flexible support that grows with you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-12">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/medical-coding-workspace.png" alt="Billing Efficiency" fill className="object-cover" />
                            </div>
                            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                                <p className="text-4xl font-bold text-primary mb-2">99%</p>
                                <p className="text-sm font-medium text-muted-foreground">Claim Accuracy Rate</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-blue-600/10 p-8 rounded-3xl border border-blue-600/20">
                                <p className="text-4xl font-bold text-blue-600 mb-2">6+</p>
                                <p className="text-sm font-medium text-muted-foreground">Years of Experience</p>
                            </div>
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/medical-billing-dashboard.png" alt="Data Analytics" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Core Services Section */}
            <section className="container px-4 md:px-6 pt-12 pb-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold font-serif mb-4">Our Core Services</h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6" />
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="bg-background border border-border/50 shadow-lg hover:border-primary/50 transition-all group">
                        <CardHeader className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform mx-auto">
                                <ReceiptText className="w-8 h-8" />
                            </div>
                            <CardTitle className="font-serif text-xl">End-to-End Medical Billing</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Clean and accurate claim submission.
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Timely payment posting.
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Effective denial resolution.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-background border border-border/50 shadow-lg hover:border-primary/50 transition-all group">
                        <CardHeader className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-4 group-hover:scale-110 transition-transform mx-auto">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <CardTitle className="font-serif text-xl">Reporting & Analytics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Collection trend reports.
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Denial pattern insights.
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Performance dashboards.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-background border border-border/50 shadow-lg hover:border-primary/50 transition-all group">
                        <CardHeader className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-4 group-hover:scale-110 transition-transform mx-auto">
                                <Clock className="w-8 h-8" />
                            </div>
                            <CardTitle className="font-serif text-xl">AR Follow-up</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Insurance claim follow-up.
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Patient balance reminders.
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Reduced aging accounts.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-background border border-border/50 shadow-lg hover:border-primary/50 transition-all group">
                        <CardHeader className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-500 mb-4 group-hover:scale-110 transition-transform mx-auto">
                                <ClipboardCheck className="w-8 h-8" />
                            </div>
                            <CardTitle className="font-serif text-xl">Provider Credentialing</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    New provider enrollments.
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Seamless re-credentialing.
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    Compliance monitoring.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Why Choose MediSure Section */}
            <section className="bg-muted/30 pt-12 pb-24">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image src="/medical-research-lab.png" alt="Strategic Research" fill className="object-cover" />
                            <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                                <div className="text-center p-8 bg-background/80 rounded-2xl border border-white/20">
                                    <p className="text-3xl font-bold font-serif mb-2 text-primary">Precision Strategy</p>
                                    <p className="text-sm font-medium">Tailored for your specific practice needs.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Why Choose MediSure</h2>
                            <div className="grid gap-6">
                                {[
                                    {
                                        title: "99% claim accuracy rate",
                                        desc: "Minimizing denials and maximizing reimbursements."
                                    },
                                    {
                                        title: "Transparent reporting and communication",
                                        desc: "Real-time dashboards and dedicated account managers."
                                    },
                                    {
                                        title: "U.S. compliance & certified billers",
                                        desc: "HIPAA, ICD-10, CPT experts with annual audits."
                                    },
                                    {
                                        title: "Personalized service backed by ABCG Research’s analytical expertise",
                                        desc: "Tailored strategies for your practice."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="audit" className="container px-4 md:px-6 pt-12 pb-24">
                <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-bold font-serif mb-6 leading-tight">Ready to Optimize Your Billing Process?</h2>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            Let’s make your revenue cycle smarter, faster, and more transparent.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span>Free comprehensive billing audit</span>
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span>Detailed performance analysis</span>
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span>No-obligation expert consultation</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-background border border-border/50 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid gap-4 sm:grid-cols-3">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name *</label>
                                    <Input
                                        required
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className="bg-muted/30 border-border/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Middle Name</label>
                                    <Input
                                        placeholder="Q."
                                        value={formData.middleName}
                                        onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                                        className="bg-muted/30 border-border/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name *</label>
                                    <Input
                                        required
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        className="bg-muted/30 border-border/50"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email *</label>
                                <Input
                                    type="email"
                                    required
                                    placeholder="john.doe@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="bg-muted/30 border-border/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Comment or Message *</label>
                                <Textarea
                                    required
                                    placeholder="Tell us about your practice..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="min-h-[120px] bg-muted/30 border-border/50"
                                />
                            </div>
                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-xl font-bold shadow-lg transition-all hover:scale-[1.02]">
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
