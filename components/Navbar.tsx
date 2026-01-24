"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NAV_LINKS, NAVBAR_CTA } from "@/lib/constants";
import { ModeToggle } from "@/components/mode-toggle";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isMedisure = pathname === "/medisure";
    const isEduPage = pathname === "/sohailyousafedu";
    const logoSrc = isMedisure ? "/medisure-logo.png" : "/logo-header.png";
    const logoAlt = isMedisure ? "MediSure" : "ABCG Research Logo";

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Image
                        src={logoSrc}
                        alt={logoAlt}
                        width={200}
                        height={64}
                        className="h-16 w-auto object-contain"
                        priority
                    />
                </Link>
                <div className="hidden md:flex md:flex-1">
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList>
                            {NAV_LINKS.map((link) => (
                                <NavigationMenuItem key={link.title}>
                                    {link.items ? (
                                        <>
                                            <NavigationMenuTrigger className="bg-transparent">
                                                {link.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="flex items-center justify-center p-4 min-w-[300px] gap-6 bg-background/95 backdrop-blur-md border border-border/50 shadow-2xl rounded-2xl">
                                                    {link.items.map((item) => (
                                                        <li key={item.title}>
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href={item.href}
                                                                    className="group relative flex flex-col items-center px-6 py-3 rounded-xl transition-all hover:bg-primary/5"
                                                                >
                                                                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                                                        {item.title}
                                                                    </div>
                                                                    <div className="absolute bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2" />
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavigationMenuLink asChild>
                                            <Link href={link.href} className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                                                {link.title}
                                            </Link>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                {!isEduPage && (
                    <div className="hidden md:flex items-center gap-4">
                        <ModeToggle />
                        <Link href="/contact">
                            <Button>Contact Us</Button>
                        </Link>
                    </div>
                )}

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="text-foreground">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 border-l border-border/50 bg-background/95 backdrop-blur-xl">
                        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                        <div className="flex flex-col h-full">
                            {/* Mobile Header with Logo */}
                            <div className="p-6 border-b border-border/10">
                                <Link href="/" onClick={() => setIsOpen(false)}>
                                    <Image
                                        src={logoSrc}
                                        alt={logoAlt}
                                        width={160}
                                        height={50}
                                        className="h-12 w-auto object-contain"
                                    />
                                </Link>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
                                {NAV_LINKS.map((link) => (
                                    <div key={link.title} className="flex flex-col gap-3">
                                        {link.items ? (
                                            <>
                                                <h4 className="font-bold text-lg text-foreground/90 tracking-wide">{link.title}</h4>
                                                <div className="flex flex-col gap-3 pl-4 border-l-2 border-primary/20">
                                                    {link.items.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href}
                                                            className="text-muted-foreground hover:text-primary transition-colors text-base font-medium py-1"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="font-bold text-lg text-foreground/90 hover:text-primary transition-colors tracking-wide"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.title}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* Mobile Footer Area */}
                            {!isEduPage && (
                                <div className="p-6 border-t border-border/10 bg-muted/5 space-y-6">
                                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                                        <Button className="w-full text-base font-semibold py-6 shadow-lg shadow-primary/20" size="lg">
                                            Contact Us
                                        </Button>
                                    </Link>
                                    <div className="flex items-center justify-between px-2">
                                        <span className="text-sm font-medium text-muted-foreground">Theme</span>
                                        <ModeToggle />
                                    </div>
                                </div>
                            )}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
