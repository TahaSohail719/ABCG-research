"use client";

import { Document, Page, pdfjs } from 'react-pdf';
import { useState, useRef, useEffect } from "react";
import { FileText } from "lucide-react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfThumbnailProps {
    url: string;
}

export default function PdfThumbnail({ url }: PdfThumbnailProps) {
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.contentBoxSize) {
                    setContainerWidth(entry.contentBoxSize[0].inlineSize);
                } else {
                    setContainerWidth(entry.contentRect.width);
                }
            }
        });

        resizeObserver.observe(containerRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full relative">
            <Document
                file={url}
                className="w-full h-full flex items-start justify-center overflow-hidden"
                loading={
                    <div className="flex items-center justify-center h-full w-full text-muted-foreground">
                        <FileText className="h-8 w-8 animate-pulse" />
                    </div>
                }
                error={
                    <div className="flex items-center justify-center h-full w-full bg-slate-100 text-muted-foreground">
                        <FileText className="h-8 w-8" />
                    </div>
                }
            >
                {containerWidth > 0 && (
                    <Page
                        pageNumber={1}
                        width={containerWidth}
                        className="shadow-sm"
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    />
                )}
            </Document>
            {/* Overlay to ensure clickability if wrapped in Link */}
            <div className="absolute inset-0 z-10" />
        </div>
    );
}
