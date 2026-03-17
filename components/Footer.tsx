"use client";

import Link from "next/link";
import Image from "next/image";
import { FOOTER_INFO } from "@/lib/constants";
import { Linkedin, Instagram } from "lucide-react";
import { usePathname } from "next/navigation";

export function Footer({ isMedisureHost = false }: { isMedisureHost?: boolean }) {
    const pathname = usePathname();

    const isMedisurePath = pathname.startsWith('/medisure');
    const isMedisureDomain = isMedisureHost;
    const isMedisure = isMedisurePath || isMedisureDomain;
    
    const contactUrl = isMedisureDomain ? "/contact" : (isMedisurePath ? "/medisure/contact" : "/contact");

    const getLocations = () => {
        let locations = [...FOOTER_INFO.locations];

        if (isMedisure) {
            // Remove Pakistan address (first one based on inspection) or filter by content
            locations = locations.filter(loc => !loc.toLowerCase().includes("pakistan"));
        }

        return locations;
    };

    const displayLocations = getLocations();

    const footerTitle = isMedisure ? "MediSure" : "ABCG Research";
    const footerSubtitle = isMedisure ? <span className="text-sm font-sans font-normal ml-2 text-muted-foreground block sm:inline">a division of ABCG Research</span> : null;
    const footerDesc = isMedisure
        ? "Empowering healthcare providers with efficient and transparent medical billing solutions."
        : "Institutional Intelligence. Macro Research, AI-driven analysis, and Global Capital Markets.";

    return (
        <footer className="w-full border-t bg-muted/40 pt-12 md:pt-16 lg:pt-24 pb-8 md:pb-10 lg:pb-12">
            <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-3">
                <div className="space-y-4 lg:col-span-1">
                    <h2 className="text-2xl font-serif font-bold tracking-tight">
                        {footerTitle}
                        {footerSubtitle}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        {footerDesc}
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
                                viewBox="0 0 14 14"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path d="m 10.2805,7.579 c -0.551,0 -1.0675,-0.2335 -1.537,-0.6135 l 0.114,-0.538 0.004,-0.021 c 0.1035,-0.5715 0.4245,-1.53 1.4195,-1.53 0.746,0 1.3515,0.606 1.3515,1.3515 -5e-4,0.7445 -0.606,1.351 -1.352,1.351 z m 0,-4.07 C 9.011,3.509 8.0255,4.3335 7.6255,5.692 7.0155,4.775 6.5515,3.674 6.282,2.746 l -1.368,0 0,3.556 C 4.913,7.005 4.3435,7.575 3.6405,7.576 2.938,7.575 2.369,7.0045 2.368,6.302 l 0,-3.556 -1.368,0 0,3.556 C 1,7.759 2.185,8.9535 3.6405,8.9535 5.097,8.9535 6.282,7.759 6.282,6.302 l 0,-0.595 c 0.2645,0.5535 0.591,1.1145 0.987,1.6105 l -0.8365,3.9365 1.3985,0 0.6065,-2.855 C 8.969,8.7385 9.58,8.9535 10.2805,8.9535 11.7805,8.9535 13,7.7275 13,6.2285 13,4.7285 11.7805,3.509 10.2805,3.509 Z" />
                            </svg>
                            <span className="sr-only">Upwork</span>
                        </Link>
                    </div>
                </div>

                <div className="space-y-4 lg:col-span-1">
                    <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                        {displayLocations.map((loc, idx) => (
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
                        {!isMedisure && (
                            <>
                                <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                                <Link href="/research" className="hover:text-primary transition-colors">Research</Link>
                            </>
                        )}
                        <Link href={contactUrl} className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
