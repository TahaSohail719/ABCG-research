import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

interface ResearchCardProps {
    title: string;
    excerpt?: string;
    date: string;
    category: string;
    href: string;
    image?: string;
}

export function ResearchCard({ title, excerpt, date, category, href, image }: ResearchCardProps) {
    return (
        <Card className="flex flex-col overflow-hidden border-border/50 bg-card transition-all hover:shadow-lg h-full">
            <CardHeader className="p-0">
                <div className="aspect-[16/9] w-full bg-muted/50 relative overflow-hidden">
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-slate-800" />
                    )}
                </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs font-normal bg-brand-navy/10 text-brand-navy dark:bg-brand-navy/50 dark:text-white">
                        {category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        {date}
                    </div>
                </div>
                <h3 className="line-clamp-2 text-xl font-bold tracking-tight mb-2 font-serif">
                    <Link href={href} className="hover:text-primary transition-colors">
                        {title}
                    </Link>
                </h3>
                {excerpt && (
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                        {excerpt}
                    </p>
                )}
            </CardContent>
            <CardFooter className="p-6 pt-0 mt-auto">
                <div className="flex items-center text-sm text-muted-foreground">
                    <User className="mr-2 h-4 w-4" />
                    <span>ABCG Research</span>
                </div>
                <Link
                    href={href}
                    className="ml-auto text-sm font-medium text-primary hover:underline"
                >
                    Read More
                </Link>
            </CardFooter>
        </Card>
    );
}
