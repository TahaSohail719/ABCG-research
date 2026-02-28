"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { submitForm } from "@/actions/submit-form";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AccountOpeningPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        motherName: "",
        accountType: "PSX Account",
        message: "",
    });
    const [files, setFiles] = useState<{ [key: string]: File | null }>({
        cnic_front: null,
        cnic_back: null,
        signature: null,
        cheque: null,
        statement: null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('motherName', formData.motherName);
            formDataToSend.append('accountType', formData.accountType);
            formDataToSend.append('subject', "Sohail Yousaf Edu Account Opening");
            formDataToSend.append('message', formData.message || "No message provided");

            // Append files
            if (files.cnic_front) formDataToSend.append('cnic_front', files.cnic_front);
            if (files.cnic_back) formDataToSend.append('cnic_back', files.cnic_back);
            if (files.signature) formDataToSend.append('signature_document', files.signature);
            if (files.cheque) formDataToSend.append('cheque_document', files.cheque);
            if (files.statement) formDataToSend.append('bank_statement', files.statement);

            const result = await submitForm('Sohail Yousaf Edu', formDataToSend);

            if (result && result.success) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", phone: "", motherName: "", accountType: "PSX Account", message: "" });
                setFiles({ cnic_front: null, cnic_back: null, signature: null, cheque: null, statement: null });
                setTimeout(() => setSubmitStatus("idle"), 5000);
            } else {
                throw new Error("Server returned an unsuccessful response.");
            }
        } catch (error: any) {
            console.error(error);
            setErrorMessage(error.message || "Failed to submit. Please check file sizes and try again.");
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;

        if (file && file.size > 5 * 1024 * 1024) { // 5MB limit
            alert("File size exceeds 5MB. Please upload a smaller image.");
            e.target.value = ""; // Clear input
            return;
        }

        const fileName = e.target.name;
        setFiles(prev => ({
            ...prev,
            [fileName]: file
        }));
    };

    return (
        <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <Link href="/sohailyousafedu" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Sohail Yousaf Edu
                </Link>

                <Card className="border-border/50 shadow-2xl bg-muted/10">
                    <CardHeader className="text-center border-b pb-8">
                        <CardTitle className="text-3xl font-serif font-bold tracking-tight text-foreground">Open Your Trading Account</CardTitle>
                        <CardDescription className="text-base text-muted-foreground mt-2">
                            Submit your information and we will guide you through the fast activation and compliance steps.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-8 px-4 sm:px-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name <span className="text-destructive">*</span></label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        required
                                        className="bg-background"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number (Registered on CNIC) <span className="text-destructive">*</span></label>
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

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address <span className="text-destructive">*</span></label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="email@example.com"
                                        required
                                        className="bg-background"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="motherName" className="text-sm font-medium text-foreground">Mother&apos;s Name <span className="text-destructive">*</span></label>
                                    <Input
                                        id="motherName"
                                        name="motherName"
                                        value={formData.motherName}
                                        onChange={handleChange}
                                        placeholder="Mother's Name"
                                        required
                                        className="bg-background"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="accountType" className="text-sm font-medium text-foreground">Account Type <span className="text-destructive">*</span></label>
                                <select
                                    id="accountType"
                                    name="accountType"
                                    value={formData.accountType}
                                    onChange={handleChange}
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                                >
                                    <option value="PSX Account">PSX Account</option>
                                    <option value="PMEX Account">PMEX Account</option>
                                    <option value="Both">Both (PSX & PMEX)</option>
                                </select>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2 pt-6 border-t border-border/50">
                                <div className="space-y-2">
                                    <label htmlFor="cnic_front" className="text-sm font-medium text-foreground">CNIC Front Photo <span className="text-destructive">*</span></label>
                                    <Input
                                        id="cnic_front"
                                        type="file"
                                        name="cnic_front"
                                        onChange={handleFileChange}
                                        required
                                        accept="image/*"
                                        className="bg-background text-foreground"
                                    />
                                    <p className="text-[10px] text-muted-foreground">Upload picture of CNIC front</p>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="cnic_back" className="text-sm font-medium text-foreground">CNIC Back Photo <span className="text-destructive">*</span></label>
                                    <Input
                                        id="cnic_back"
                                        type="file"
                                        name="cnic_back"
                                        onChange={handleFileChange}
                                        required
                                        accept="image/*"
                                        className="bg-background text-foreground"
                                    />
                                    <p className="text-[10px] text-muted-foreground">Upload picture of CNIC back</p>
                                </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Signature on Plain Paper <span className="text-destructive">*</span></label>
                                    <Input
                                        type="file"
                                        name="signature"
                                        onChange={handleFileChange}
                                        required
                                        accept="image/*"
                                        className="bg-background text-foreground"
                                    />
                                    <p className="text-[10px] text-muted-foreground">Upload picture of your signature</p>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Chequebook Page Picture <span className="text-destructive">*</span></label>
                                    <Input
                                        type="file"
                                        name="cheque"
                                        onChange={handleFileChange}
                                        required
                                        accept="image/*"
                                        className="bg-background text-foreground"
                                    />
                                    <p className="text-[10px] text-muted-foreground">Upload picture of a cheque from your bank</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Bank Statement</label>
                                <Input
                                    type="file"
                                    name="statement"
                                    onChange={handleFileChange}
                                    accept=".pdf,image/*"
                                    className="bg-background text-foreground"
                                />
                                <p className="text-[10px] text-muted-foreground">Optional: Upload latest bank statement</p>
                            </div>

                            <div className="space-y-2 pt-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">Message (Optional)</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Any additional details or questions..."
                                    className="min-h-[100px] bg-background text-foreground"
                                />
                            </div>

                            {submitStatus === "success" && (
                                <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-3 rounded-md text-sm mt-4">
                                    Application submitted successfully! Our team will contact you shortly.
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-md text-sm mt-4">
                                    {errorMessage || "Something went wrong during upload. Please ensure files are not too large and try again."}
                                </div>
                            )}

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-[#f26726] hover:bg-[#d9561d] text-white font-bold mt-6"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Uploading Documents..." : "Submit Application"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
