"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { Trash2, GripVertical, FileText } from "lucide-react";
import type { Report } from "@/actions/manage-reports";

interface SortableReportItemProps {
    report: Report;
    onDelete: (id: string, pdfUrl: string) => void;
}

export function SortableReportItem({ report, onDelete }: SortableReportItemProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: report.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 1 : 0,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="flex items-center gap-4 p-4 border rounded-lg bg-card hover:border-primary/50 transition-colors group"
        >
            <div {...attributes} {...listeners} className="cursor-grab hover:text-primary text-muted-foreground">
                <GripVertical className="h-5 w-5" />
            </div>

            <div className="h-10 w-10 bg-primary/10 rounded flex items-center justify-center text-primary shrink-0">
                <FileText className="h-5 w-5" />
            </div>

            <div className="flex-grow min-w-0">
                <h4 className="font-medium truncate">{report.title}</h4>
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <span>{report.category}</span>
                    <span>•</span>
                    <span>{report.date}</span>
                </p>
            </div>

            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500 hover:text-red-600 hover:bg-red-500/10 h-8 w-8"
                    onClick={() => onDelete(report.id, report.pdfUrl)}
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
