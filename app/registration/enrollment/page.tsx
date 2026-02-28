"use client";

import { useState } from "react";
import { Copy, CheckCircle2, UploadCloud, CreditCard, User, Mail, Phone, Tags } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitForm } from "@/actions/submit-form";

export default function EnrollmentPage() {
    const [clientType, setClientType] = useState<"new" | "student" | "existing">("new");
    const [copied, setCopied] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        tradingAccountNumber: "",
    });
    const [files, setFiles] = useState<{ [key: string]: File | null }>({
        studentCard: null,
        paymentReceipt: null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const BASE_PRICE = 12000;
    const DISCOUNT_RATE = 0.2;

    const finalPrice = clientType === "new" ? BASE_PRICE : BASE_PRICE * (1 - DISCOUNT_RATE);

    const handleCopyAccount = () => {
        navigator.clipboard.writeText("3376301000001313");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (clientType === "student" && !files.studentCard) {
            setErrorMessage("Please upload your Student ID Card / Enrollment Evidence.");
            setSubmitStatus("error");
            document.getElementById('studentCardContainer')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }
        if (!files.paymentReceipt) {
            setErrorMessage("Please upload your Payment Screenshot Receipt.");
            setSubmitStatus("error");
            document.getElementById('paymentReceiptContainer')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }
        if (clientType === "existing" && !formData.tradingAccountNumber) {
            setErrorMessage("Please provide your Trading Account Number.");
            setSubmitStatus("error");
            return;
        }

        setIsSubmitting(true);
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('clientType', clientType);
            formDataToSend.append('subject', "Training Program Enrollment");

            if (clientType === "existing") {
                formDataToSend.append('tradingAccountNumber', formData.tradingAccountNumber);
            }

            if (files.studentCard) {
                formDataToSend.append('studentCard', files.studentCard);
            }
            if (files.paymentReceipt) {
                formDataToSend.append('paymentReceipt', files.paymentReceipt);
            }

            const result = await submitForm('Sohail Yousaf Edu', formDataToSend);
            if (result && result.success) {
                setSubmitStatus("success");
                setFormData({ name: "", phone: "", email: "", tradingAccountNumber: "" });
                setFiles({ studentCard: null, paymentReceipt: null });
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div className="min-h-screen bg-slate-950 font-sans text-slate-200 py-12 px-4 md:py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-sm font-medium mb-4">
                        Forex Training Program
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Program Enrollment
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Fill out the details below to secure your spot in the next batch.
                    </p>
                </div>

                <div className="bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
                    {/* Top gradient bar */}
                    <div className="h-2 w-full bg-gradient-to-r from-orange-400 to-orange-600" />

                    <form className="p-6 md:p-10 space-y-8" onSubmit={handleSubmit}>

                        {/* Section 1: Client Type & Price */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                <Tags className="w-5 h-5 text-orange-500" />
                                Registration Type
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {(["new", "student", "existing"] as const).map((type) => (
                                    <label
                                        key={type}
                                        className={`relative flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${clientType === type
                                            ? "border-orange-500 bg-orange-500/10"
                                            : "border-slate-800 bg-slate-800/50 hover:border-slate-700"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="clientType"
                                            value={type}
                                            checked={clientType === type}
                                            onChange={() => setClientType(type)}
                                            className="sr-only"
                                        />
                                        <span className="font-semibold capitalize text-white mb-1">
                                            {type === "existing" ? "Existing Client" : type}
                                        </span>
                                        <span className="text-xs text-slate-400 font-medium">
                                            {type === "new" ? "Standard Price" : "20% Discount"}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Display */}
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="text-slate-400 font-medium">Total Payable Amount</h3>
                                <p className="text-sm text-slate-500">
                                    {clientType !== "new" && (
                                        <span className="line-through mr-2">Rs. {BASE_PRICE.toLocaleString()}</span>
                                    )}
                                    {clientType === "student" && "Student Scholarship Applied"}
                                    {clientType === "existing" && "Client Loyalty Discount Applied"}
                                </p>
                            </div>
                            <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                                <span className="text-xl text-orange-500 font-semibold">Rs.</span>
                                {finalPrice.toLocaleString()}/-
                            </div>
                        </div>

                        <hr className="border-slate-800" />

                        {/* Section 2: Personal Details */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                <User className="w-5 h-5 text-orange-500" />
                                Personal Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Full Name *</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Phone Number *</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+92 3XX XXXXXXX"
                                            className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-medium text-slate-300">Email Address *</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Conditional Fields */}
                                {clientType === "student" && (
                                    <div id="studentCardContainer" className="space-y-2 md:col-span-2 animate-in fade-in slide-in-from-top-2">
                                        <label className="text-sm font-medium text-slate-300">Student ID Card / Enrollment Evidence *</label>
                                        <div className="border-2 border-dashed border-slate-700 bg-slate-950 rounded-xl p-4 text-center hover:border-orange-500/50 transition-colors">
                                            <input type="file" name="studentCard" onChange={handleFileChange} id="studentCard" className="hidden" accept="image/*,.pdf" />
                                            <label htmlFor="studentCard" className="cursor-pointer flex flex-col items-center justify-center gap-2">
                                                <UploadCloud className="w-8 h-8 text-orange-500" />
                                                <span className="text-sm text-slate-300 font-medium bg-slate-800 px-4 py-1.5 rounded-lg hover:bg-slate-700 transition">
                                                    {files.studentCard ? files.studentCard.name : "Click to browse file"}
                                                </span>
                                                <span className="text-xs text-slate-500">JPG, PNG, or PDF. Max 5MB.</span>
                                            </label>
                                        </div>
                                    </div>
                                )}

                                {clientType === "existing" && (
                                    <div className="space-y-2 md:col-span-2 animate-in fade-in slide-in-from-top-2">
                                        <label className="text-sm font-medium text-slate-300">Trading Account Number *</label>
                                        <input
                                            type="text"
                                            name="tradingAccountNumber"
                                            value={formData.tradingAccountNumber}
                                            onChange={handleChange}
                                            required
                                            placeholder="e.g. 12345678"
                                            className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <hr className="border-slate-800" />

                        {/* Section 3: Payment Details */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-orange-500" />
                                Payment details
                            </h2>

                            <div className="bg-orange-950/20 border border-orange-500/20 rounded-xl p-6">
                                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                                    Please transfer <strong className="text-white">Rs. {finalPrice.toLocaleString()}/-</strong> to the following bank account and upload a clear screenshot of the receipt.
                                </p>

                                <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 space-y-3 font-mono text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-500">Bank:</span>
                                        <span className="text-white font-semibold">Faysal Bank</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-500">Account Title:</span>
                                        <span className="text-white font-semibold flex items-center gap-2">
                                            Sohail Yousaf
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center bg-slate-900 -mx-2 px-2 py-1.5 rounded">
                                        <span className="text-slate-500 flex-shrink-0">Account Number:</span>
                                        <div className="flex items-center gap-2 ml-4 overflow-hidden">
                                            <span className="text-white font-semibold truncate text-lg">3376301000001313</span>
                                            <button
                                                type="button"
                                                onClick={handleCopyAccount}
                                                className="p-1.5 bg-slate-800 rounded text-slate-300 hover:text-white hover:bg-slate-700 transition"
                                                title="Copy account number"
                                            >
                                                {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="paymentReceiptContainer" className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Payment Screenshot Receipt *</label>
                                <div className="border-2 border-dashed border-slate-700 bg-slate-950 rounded-xl p-6 text-center hover:border-orange-500/50 transition-colors">
                                    <input type="file" name="paymentReceipt" onChange={handleFileChange} id="paymentReceipt" className="hidden" accept="image/*,.pdf" />
                                    <label htmlFor="paymentReceipt" className="cursor-pointer flex flex-col items-center justify-center gap-2">
                                        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-2">
                                            <UploadCloud className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <span className="text-white font-medium">
                                            {files.paymentReceipt ? files.paymentReceipt.name : "Click to upload payment receipt"}
                                        </span>
                                        <span className="text-sm text-slate-500">Must show clear transaction details (Max 5MB)</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Submit Messages */}
                        {submitStatus === "success" && (
                            <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-3 rounded-md text-sm">
                                Enrollment request submitted successfully! We will contact you shortly.
                            </div>
                        )}

                        {submitStatus === "error" && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-md text-sm">
                                {errorMessage || "Something went wrong. Please check your inputs and try again."}
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Submitting..." : "Submit Enrollment"}
                            </button>
                            <p className="text-center text-xs text-slate-500 mt-4">
                                By submitting this form, you agree to our terms of service and registration policies.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
