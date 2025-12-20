import Link from "next/link";
import Image from "next/image";
import { FOOTER_INFO } from "@/lib/constants";
import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t bg-muted/40 pt-12 md:pt-16 lg:pt-24 pb-8 md:pb-10 lg:pb-12">
            <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-3">
                <div className="space-y-4 lg:col-span-1">
                    <h2 className="text-2xl font-serif font-bold tracking-tight">ABCG Research</h2>
                    <p className="text-sm text-muted-foreground">
                        Institutional Intelligence. Macro Research, AI-driven analysis, and Global Capital Markets.
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            href="https://www.linkedin.com/company/abcg-research/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-[#0077b5] transition-colors"
                        >
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                            href="https://www.instagram.com/abcg_research/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-[#E4405F] transition-colors"
                        >
                            <Instagram className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link
                            href="https://www.upwork.com/agencies/1989201157847683546/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-[#14a800] transition-colors"
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M18.56 1c-2.41 0-4.32 1.34-5.22 3.42-.4 1.1-.64 2.27-.72 3.48a12.63 12.63 0 0 1-2.28 4.75 4.6 4.6 0 0 1-3.66 1.7C4.6 14.35 3 12.75 3 10.65V1h-2v9.65C1 13.6 3.4 16 6.4 16c2.4 0 4.45-1.45 5.35-3.53.5-1.15.75-2.35.85-3.6.35-2.15 1.15-4.87 3.4-4.87a2.3 2.3 0 0 1 2.3 2.3c0 1.45-1 2.8-2.3 2.8-.35 0-.7-.1-.95-.25a.3.3 0 0 0-.25-.05c-.15.05-.2.15-.25.3l-.2.65c-.05.1-.05.2 0 .3.05.1.1.15.25.15h.05c.45 0 1.05.15 1.45.15.15 0 .3 0 .45-.05 2.65 0 4.5-1.9 4.5-4.5C23.05 3.1 21 1.25 18.56 1z" />
                            </svg>
                            <span className="sr-only">Upwork</span>
                        </Link>
                    </div>
                </div>

                <div className="space-y-4 lg:col-span-1">
                    <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                        {FOOTER_INFO.locations.map((loc, idx) => (
                            <p key={idx} className="leading-relaxed">{loc}</p>
                        ))}
                    </div>
                    <div className="flex flex-col space-y-1 text-sm pt-2">
                        <a href={`mailto:${FOOTER_INFO.contact.email}`} className="hover:text-primary transition-colors">
                            {FOOTER_INFO.contact.email}
                        </a>
                        <a href={`tel:${FOOTER_INFO.contact.phone.replace(/ /g, '')}`} className="hover:text-primary transition-colors">
                            {FOOTER_INFO.contact.phone}
                        </a>
                    </div>
                </div>

                <div className="space-y-4 lg:col-span-1">
                    <h3 className="text-sm font-semibold uppercase tracking-wider">Partners</h3>
                    <div className="flex flex-wrap gap-6 items-center">
                        <div className="relative h-8 w-24 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            <Image
                                src="/odoo-logo.png"
                                alt="Odoo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <div className="relative h-10 w-10 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                            <Image
                                src="/independent-research-forum-logo.png"
                                alt="Independent Research Forum"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="font-bold text-lg text-slate-500/70 hover:text-slate-500 transition-colors cursor-default">
                            Optiquant
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-8 border-t pt-8 px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {FOOTER_INFO.copyright} All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                        <Link href="/research" className="hover:text-primary transition-colors">Research</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
