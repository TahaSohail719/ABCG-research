import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SERVICES = [
    {
        id: "research",
        title: "Expert Research & Investment Ideas",
        subtitle: "FX | Commodities | Crypto Currency",
        description: "Leveraging 36 years of expertise, we provide research reports and alpha-focused investment ideas across FX, Commodities, and Crypto. Our blend of qualitative insights and quantitative models is designed to deliver Sharpe ratios above 2.",
        image: "/service-research.png",
        link: "/research"
    },
    {
        id: "alphalens",
        title: "AlphaLens",
        subtitle: "AI-Powered Real-Time Market Navigation",
        description: "AlphaLens is our proprietary AI-based platform that delivers real-time analysis across FX, Commodities, and Crypto, backed by ABCG's research models. By combining macroeconomic indicators, technical signals, and qualitative developments, AlphaLens empowers investors to nowcast markets, identify alpha opportunities, and optimize strategies with confidence.",
        image: "/service-alphalens.png",
        link: "https://alphalensai.com/"
    },
    {
        id: "custom-solutions",
        title: "Custom Solutions",
        subtitle: "Tailored AI & Quant Systems for Financial Institutions",
        description: "Our Custom Solutions help research firms and investment teams transform their proprietary methodologies into private AI-driven assistants and quantitative systems. By understanding your data points, frameworks, and workflows, we design secure in-house solutions—spanning AI chatbots, machine learning models, algorithmic trading, backtesting engines, and dashboards—enabling analysts to access insights instantly and scale decision-making.",
        image: "/service-custom-ai.png",
        link: "/contact",
        buttonText: "Explore"
    },
    {
        id: "web-dev",
        title: "Website Development",
        subtitle: "Digital Platforms Built for Financial Institutions",
        description: "We design and develop professional websites tailored for financial institutions and investment firms. With a deep understanding of the financial research landscape, we build platforms that showcase your insights, enhance client engagement, and integrate seamlessly with your research delivery workflows.",
        image: "/service-web-dev.png",
        link: "/contact",
        buttonText: "Explore"
    }
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-32 flex flex-col items-center justify-center text-center overflow-hidden min-h-[60vh]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background/60 dark:bg-slate-950/60 z-10" />
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 opacity-70 dark:opacity-70 scale-105"
                        style={{ backgroundImage: "url('/services-hero-bg.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background/80 to-background dark:from-brand-navy/60 z-20" />
                    {/* Abstract Shapes */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
                </div>

                <div className="container relative z-30 px-4 md:px-6">

                    <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8 tracking-tight max-w-4xl mx-auto">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/70">
                            Our Expertise
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Delivering research, investment ideas, AI automation, and digital solutions for modern capital markets.
                    </p>
                </div>
            </section>

            {/* Services Zig-Zag Layout */}
            <section className="py-20 md:py-32">
                <div className="container px-4 md:px-6 space-y-32">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.id}
                            className={cn(
                                "flex flex-col gap-12 lg:gap-24 items-center",
                                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            )}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-6 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
                                        {service.title}
                                    </h2>
                                    <h3 className="text-xl md:text-2xl text-primary font-medium">
                                        {service.subtitle}
                                    </h3>
                                </div>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                                    {service.description}
                                </p>
                                <div className="pt-4">
                                    <Button size="lg" className="rounded-full px-8 h-12" asChild>
                                        <Link
                                            href={service.link}
                                            {...(service.link.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        >
                                            {(service as any).buttonText || `Explore ${service.title.split(' ')[0]}`}
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className="flex-1 w-full relative">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border/50 shadow-2xl group">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                {/* Decorative elements */}
                                <div className={cn(
                                    "absolute -z-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px]",
                                    index % 2 === 0 ? "-top-12 -right-12" : "-bottom-12 -left-12"
                                )} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 container px-4 md:px-6 my-20">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
                        Ready to elevate your <span className="text-[#f26726] drop-shadow-sm">investment strategy?</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Discover how ABCG Research can support your firm with macro research, AI automation, and bespoke investment solutions.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                            Request a Consultation
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
