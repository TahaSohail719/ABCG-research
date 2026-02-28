"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Loader2, Download, Eye, Trash2, Mail, Users, FileCheck, MonitorPlay, LogOut, GraduationCap } from "lucide-react";
import { getSubmissions, type Submission } from "@/actions/submit-form";
import { deleteSubmission } from "@/actions/delete-submission";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EduAdminPage() {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            loadSubmissions();
        }
    }, [isAuthenticated]);

    const loadSubmissions = async () => {
        setLoading(true);
        const data = await getSubmissions();
        setSubmissions(data);
        setLoading(false);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "Pakistan@123") {
            setIsAuthenticated(true);
        } else {
            alert("Invalid password");
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this entry?")) {
            await deleteSubmission(id);
            loadSubmissions();
        }
    };

    const downloadFile = async (url: string, filename: string) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error("Download failed:", error);
            window.open(url, '_blank'); // Fallback to opening in new tab
        }
    };

    const liveSessions = submissions.filter(s => s.data.subject === "Live Session Registration");
    const accountOpenings = submissions.filter(s => s.data.subject === "Sohail Yousaf Edu Account Opening");
    const trainingEnrollments = submissions.filter(s => s.data.subject === "Training Program Enrollment");

    if (!isAuthenticated) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
                <form onSubmit={handleLogin} className="w-full max-w-sm flex flex-col gap-6 p-8 border border-white/10 rounded-2xl bg-slate-900 shadow-2xl">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Edu Admin Login</h1>
                        <p className="text-sm text-slate-400 mt-2">Enter credentials to access inquiries</p>
                    </div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Authentication Password"
                        className="p-3 border border-white/10 rounded-xl bg-slate-800 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        autoFocus
                    />
                    <Button type="submit" className="bg-[#f26726] hover:bg-[#d9561d] py-6 text-lg font-bold">Access Dashboard</Button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
                    <div>
                        <h1 className="text-3xl font-black font-serif tracking-tight flex items-center gap-3">
                            <span className="p-2 bg-orange-500/20 rounded-lg"><Users className="text-orange-500" /></span>
                            Edu Inquiries Dashboard
                        </h1>
                        <p className="text-slate-400 mt-2">Manage registrations and account applications</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" onClick={loadSubmissions} disabled={loading} className="border-white/10 hover:bg-white/5">
                            {loading ? <Loader2 className="animate-spin h-4 w-4" /> : "Refresh Data"}
                        </Button>
                        <Button variant="ghost" onClick={() => setIsAuthenticated(false)} className="text-slate-400 hover:text-white">
                            <LogOut className="h-4 w-4 mr-2" /> Logout
                        </Button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-1 gap-12">
                    {/* Live Session Registrations */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <MonitorPlay className="text-orange-500" />
                            Live Session Inquiries
                            <Badge variant="secondary" className="ml-2 bg-slate-800 text-slate-300">{liveSessions.length}</Badge>
                        </h2>
                        <div className="grid gap-4">
                            {liveSessions.length === 0 ? (
                                <Card className="bg-slate-900 border-white/5 p-8 text-center text-slate-500">No registrations yet.</Card>
                            ) : (
                                liveSessions.map(sub => (
                                    <Card key={sub.id} className="bg-slate-900 border-white/10 hover:border-orange-500/30 transition-all overflow-hidden">
                                        <CardContent className="p-6">
                                            <div className="flex flex-wrap items-center justify-between gap-4">
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
                                                    <div>
                                                        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Name</p>
                                                        <p className="font-semibold">{sub.data.name}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Email</p>
                                                        <p className="text-slate-300">{sub.data.email}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Phone</p>
                                                        <p className="text-slate-300">{sub.data.phone}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-xs text-slate-500 mr-4">{new Date(sub.date).toLocaleDateString()}</p>
                                                    <Button size="icon" variant="ghost" className="text-red-500 hover:bg-red-500/10" onClick={() => handleDelete(sub.id)}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))
                            )}
                        </div>
                    </section>

                    {/* Account Opening Applications */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <FileCheck className="text-green-500" />
                            Account Opening Inquiries
                            <Badge variant="secondary" className="ml-2 bg-slate-800 text-slate-300">{accountOpenings.length}</Badge>
                        </h2>
                        <div className="grid gap-6">
                            {accountOpenings.length === 0 ? (
                                <Card className="bg-slate-900 border-white/5 p-8 text-center text-slate-500">No applications yet.</Card>
                            ) : (
                                accountOpenings.map(sub => (
                                    <Card key={sub.id} className="bg-slate-900 border-white/10 hover:border-green-500/30 transition-all">
                                        <CardHeader className="border-b border-white/5 flex flex-row items-center justify-between space-y-0 p-6">
                                            <div className="flex items-center gap-4">
                                                <CardTitle className="text-lg font-bold">{sub.data.name}</CardTitle>
                                                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">{sub.data.accountType}</Badge>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs text-slate-500">{new Date(sub.date).toLocaleString()}</span>
                                                <Button size="icon" variant="ghost" className="text-red-500 hover:bg-red-500/10" onClick={() => handleDelete(sub.id)}>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-6 space-y-8">
                                            {/* Details Grid */}
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                                <div>
                                                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Email</p>
                                                    <p className="text-sm">{sub.data.email}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Phone</p>
                                                    <p className="text-sm">{sub.data.phone}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Mother's Name</p>
                                                    <p className="text-sm">{sub.data.motherName}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">ID</p>
                                                    <p className="text-xs text-slate-500 truncate" title={sub.id}>{sub.id.split('-')[0]}</p>
                                                </div>
                                            </div>

                                            {/* Documents Section */}
                                            <div className="space-y-4">
                                                <p className="text-xs font-bold uppercase text-slate-400 tracking-widest border-b border-white/5 pb-2">Uploaded Documents</p>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                                                    {[
                                                        { key: 'cnic_front', label: 'CNIC Front' },
                                                        { key: 'cnic_back', label: 'CNIC Back' },
                                                        { key: 'signature_document', label: 'Signature' },
                                                        { key: 'cheque_document', label: 'Chequebook' },
                                                        { key: 'bank_statement', label: 'Statement' }
                                                    ].map(doc => sub.data[doc.key] && (
                                                        <div key={doc.key} className="flex flex-col gap-2 p-3 bg-slate-800/50 rounded-xl border border-white/5">
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-xs font-medium text-slate-300">{doc.label}</span>
                                                            </div>
                                                            <div className="flex gap-2">
                                                                <Button
                                                                    variant="secondary"
                                                                    size="sm"
                                                                    className="flex-1 bg-slate-700 hover:bg-slate-600 text-xs text-white"
                                                                    onClick={() => window.open(sub.data[doc.key], '_blank')}
                                                                >
                                                                    <Eye className="h-3 w-3 mr-1" /> View
                                                                </Button>
                                                                <Button
                                                                    variant="outline"
                                                                    size="sm"
                                                                    className="flex-1 border-white/10 hover:bg-white/5 text-xs text-white"
                                                                    onClick={() => downloadFile(sub.data[doc.key], `${sub.data.name.replace(/\s+/g, '_')}_${doc.label.replace(/\s+/g, '_')}`)}
                                                                >
                                                                    <Download className="h-3 w-3 mr-1" /> Save
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Message */}
                                            {sub.data.message && sub.data.message !== "No message provided" && (
                                                <div className="bg-slate-800/30 p-4 rounded-xl border border-white/5">
                                                    <p className="text-[10px] uppercase font-bold text-slate-500 mb-2">Message</p>
                                                    <p className="text-sm text-slate-300 italic">"{sub.data.message}"</p>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                ))
                            )}
                        </div>
                    </section>

                    {/* Training Program Enrollments */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <GraduationCap className="text-orange-500" />
                            Training Program Enrollments
                            <Badge variant="secondary" className="ml-2 bg-slate-800 text-slate-300">{trainingEnrollments.length}</Badge>
                        </h2>
                        <div className="grid gap-6">
                            {trainingEnrollments.length === 0 ? (
                                <Card className="bg-slate-900 border-white/5 p-8 text-center text-slate-500">No enrollments yet.</Card>
                            ) : (
                                trainingEnrollments.map(sub => (
                                    <Card key={sub.id} className="bg-slate-900 border-white/10 hover:border-orange-500/30 transition-all">
                                        <CardHeader className="border-b border-white/5 flex flex-row items-center justify-between space-y-0 p-6">
                                            <div className="flex items-center gap-4">
                                                <CardTitle className="text-lg font-bold">{sub.data.name}</CardTitle>
                                                <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20 capitalize">{sub.data.clientType} Client</Badge>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs text-slate-500">{new Date(sub.date).toLocaleString()}</span>
                                                <Button size="icon" variant="ghost" className="text-red-500 hover:bg-red-500/10" onClick={() => handleDelete(sub.id)}>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-6 space-y-8">
                                            {/* Details Grid */}
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                                <div>
                                                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Email</p>
                                                    <p className="text-sm">{sub.data.email}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Phone</p>
                                                    <p className="text-sm">{sub.data.phone}</p>
                                                </div>
                                                {sub.data.tradingAccountNumber && (
                                                    <div>
                                                        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Trading A/C</p>
                                                        <p className="text-sm">{sub.data.tradingAccountNumber}</p>
                                                    </div>
                                                )}
                                                <div>
                                                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">ID</p>
                                                    <p className="text-xs text-slate-500 truncate" title={sub.id}>{sub.id.split('-')[0]}</p>
                                                </div>
                                            </div>

                                            {/* Documents Section */}
                                            <div className="space-y-4">
                                                <p className="text-xs font-bold uppercase text-slate-400 tracking-widest border-b border-white/5 pb-2">Uploaded Documents</p>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                                                    {[
                                                        { key: 'studentCard', label: 'Student ID' },
                                                        { key: 'paymentReceipt', label: 'Payment Receipt' }
                                                    ].map(doc => sub.data[doc.key] && (
                                                        <div key={doc.key} className="flex flex-col gap-2 p-3 bg-slate-800/50 rounded-xl border border-white/5">
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-xs font-medium text-slate-300">{doc.label}</span>
                                                            </div>
                                                            <div className="flex gap-2">
                                                                <Button
                                                                    variant="secondary"
                                                                    size="sm"
                                                                    className="flex-1 bg-slate-700 hover:bg-slate-600 text-xs text-white"
                                                                    onClick={() => window.open(sub.data[doc.key], '_blank')}
                                                                >
                                                                    <Eye className="h-3 w-3 mr-1" /> View
                                                                </Button>
                                                                <Button
                                                                    variant="outline"
                                                                    size="sm"
                                                                    className="flex-1 border-white/10 hover:bg-white/5 text-xs text-white"
                                                                    onClick={() => downloadFile(sub.data[doc.key], `${sub.data.name.replace(/\s+/g, '_')}_${doc.label.replace(/\s+/g, '_')}`)}
                                                                >
                                                                    <Download className="h-3 w-3 mr-1" /> Save
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
