"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Loader2, Upload, FileText, Trash2, Mail, Users, GripVertical } from "lucide-react";
import { uploadReport } from "@/actions/upload-report";
import { getSubmissions, type Submission } from "@/actions/submit-form";
import { deleteSubmission } from "@/actions/delete-submission";
import { getReports, deleteReport, reorderReports, type Report } from "@/actions/manage-reports";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableReportItem } from "@/components/SortableReportItem";

export default function AdminPage() {
    const [isUploading, setIsUploading] = useState(false);
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Submissions State
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loadingSubmissions, setLoadingSubmissions] = useState(false);

    // Reports State
    const [reports, setReports] = useState<Report[]>([]);
    const [loadingReports, setLoadingReports] = useState(false);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    useEffect(() => {
        if (isAuthenticated) {
            loadSubmissions();
            loadReports();
        }
    }, [isAuthenticated]);

    // --- Submissions Logic ---
    const loadSubmissions = async () => {
        setLoadingSubmissions(true);
        const data = await getSubmissions();
        setSubmissions(data);
        setLoadingSubmissions(false);
    };

    const handleDeleteSubmission = async (id: string) => {
        if (confirm("Are you sure you want to delete this submission?")) {
            await deleteSubmission(id);
            loadSubmissions();
        }
    };

    // --- Reports Logic ---
    const loadReports = async () => {
        setLoadingReports(true);
        const data = await getReports();
        setReports(data);
        setLoadingReports(false);
    };

    const handleDeleteReport = async (id: string, pdfUrl: string) => {
        if (confirm("Are you sure you want to delete this report? This action cannot be undone.")) {
            try {
                // Optimistic UI update
                setReports(items => items.filter(item => item.id !== id));
                await deleteReport(id, pdfUrl);
            } catch (error) {
                console.error("Failed to delete report:", error);
                alert("Failed to delete report. Please try again.");
                loadReports(); // Revert on failure
            }
        }
    };

    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setReports((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                const newOrder = arrayMove(items, oldIndex, newIndex);

                // Save new order to server
                reorderReports(newOrder); // Fire and forget (or handle error)

                return newOrder;
            });
        }
    };

    // --- Auth & Upload Logic ---
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "67-E3iep") {
            setIsAuthenticated(true);
        } else {
            alert("Invalid password");
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsUploading(true);

        try {
            const formData = new FormData(event.currentTarget);
            await uploadReport(formData);
            alert("Report uploaded successfully!");
            (event.target as HTMLFormElement).reset();
            loadReports(); // Reload list after upload
        } catch (error) {
            console.error(error);
            alert("Upload failed");
        } finally {
            setIsUploading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <form onSubmit={handleLogin} className="flex flex-col gap-4 p-8 border rounded-xl shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password (admin123)"
                        className="p-2 border rounded"
                    />
                    <Button type="submit">Login</Button>
                </form>
            </div>
        );
    }

    return (
        <div className="container py-12 px-4 max-w-4xl mx-auto">
            <div className="grid gap-12">
                {/* Upload Section */}
                <section>
                    <h1 className="text-3xl font-bold mb-8">Upload Research Report</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 border border-border/50 rounded-xl bg-card shadow-sm">

                        <div className="flex flex-col gap-2">
                            <label htmlFor="title" className="font-medium">Report Title</label>
                            <input name="title" required placeholder="e.g. Trade Turbulence & Economic Recalibration" className="p-2 border rounded-md bg-transparent" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="category" className="font-medium">Category</label>
                                <select name="category" className="p-2 border rounded-md bg-transparent" required>
                                    <option value="Macro Strategy">Macro Strategy</option>
                                    <option value="Global Markets">Global Markets</option>
                                    <option value="FX Analysis">FX Analysis</option>
                                    <option value="Crypto">Crypto</option>
                                    <option value="Investment Ideas">Investment Ideas</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="date" className="font-medium">Report Date</label>
                                <input name="date" type="date" required className="p-2 border rounded-md bg-transparent" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="description" className="font-medium">Description (Excerpt)</label>
                            <textarea name="description" required rows={3} placeholder="Brief summary of the report..." className="p-2 border rounded-md bg-transparent" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="file" className="font-medium">PDF File</label>
                            <input
                                name="file"
                                type="file"
                                accept=".pdf"
                                required
                                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                            />
                        </div>

                        <Button type="submit" disabled={isUploading} className="w-full">
                            {isUploading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Upload className="mr-2 h-4 w-4" />
                                    Upload Report
                                </>
                            )}
                        </Button>
                    </form>
                </section>

                {/* Manage Reports Section */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold">Manage Reports</h2>
                        <Button variant="outline" size="sm" onClick={loadReports} disabled={loadingReports}>
                            {loadingReports ? <Loader2 className="h-4 w-4 animate-spin" /> : "Refresh"}
                        </Button>
                    </div>

                    <div className="border rounded-xl bg-card p-6">
                        {loadingReports && reports.length === 0 ? (
                            <div className="text-center py-8"><Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" /></div>
                        ) : reports.length === 0 ? (
                            <div className="text-center text-muted-foreground py-8">No reports uploaded yet.</div>
                        ) : (
                            <DndContext
                                sensors={sensors}
                                collisionDetection={closestCenter}
                                onDragEnd={handleDragEnd}
                            >
                                <SortableContext
                                    items={reports.map(r => r.id)}
                                    strategy={verticalListSortingStrategy}
                                >
                                    <div className="space-y-3">
                                        {reports.map((report) => (
                                            <SortableReportItem
                                                key={report.id}
                                                report={report}
                                                onDelete={handleDeleteReport}
                                            />
                                        ))}
                                    </div>
                                </SortableContext>
                            </DndContext>
                        )}
                        <p className="text-xs text-muted-foreground mt-4 text-center">
                            Drag and drop items to reorder how they appear on the Research page.
                        </p>
                    </div>
                </section>

                {/* Submissions Section */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold">Form Submissions</h2>
                        <Button variant="outline" size="sm" onClick={loadSubmissions} disabled={loadingSubmissions}>
                            {loadingSubmissions ? <Loader2 className="h-4 w-4 animate-spin" /> : "Refresh"}
                        </Button>
                    </div>

                    <div className="border rounded-xl overflow-hidden bg-card">
                        {submissions.length === 0 ? (
                            <div className="p-8 text-center text-muted-foreground">No submissions found.</div>
                        ) : (
                            <div className="divide-y relative">
                                {loadingSubmissions && <div className="absolute inset-0 bg-background/50 flex items-center justify-center z-10"><Loader2 className="animate-spin" /></div>}
                                {submissions.map((sub) => (
                                    <div key={sub.id} className="p-6 flex flex-col md:flex-row gap-4 items-start justify-between hover:bg-muted/30 transition-colors">
                                        <div className="space-y-2 flex-1 w-full">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${sub.type === 'Contact Us' || sub.type === 'Contact'
                                                    ? 'bg-blue-500/10 text-blue-600'
                                                    : 'bg-orange-500/10 text-orange-600'
                                                    }`}>
                                                    {sub.type}
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    {new Date(sub.date).toLocaleString()}
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm w-full">
                                                {Object.entries(sub.data).map(([key, value]) => (
                                                    <div key={key} className="flex flex-col min-w-0">
                                                        <span className="text-xs font-semibold text-muted-foreground uppercase truncate">{key}</span>
                                                        <span className="break-words whitespace-pre-wrap">{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-red-500 hover:text-red-600 hover:bg-red-500/10 shrink-0"
                                                onClick={() => handleDeleteSubmission(sub.id)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
