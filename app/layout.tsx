import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ABCG Research - Institutional Intelligence & Global Markets",
    template: "%s | ABCG Research"
  },
  description: "Institutional Intelligence. Macro Research, AI-driven analysis, and Global Capital Markets insights. Navigate markets with real-time AI analysis through AlphaLens AI.",
  keywords: ["macro research", "FX analysis", "cryptocurrency research", "investment ideas", "capital markets", "AI trading", "financial research"],
  authors: [{ name: "ABCG Research" }],
  creator: "ABCG Research",
  publisher: "ABCG Research",
  metadataBase: new URL('https://abcgresearch.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abcgresearch.com',
    title: 'ABCG Research - Institutional Intelligence & Global Markets',
    description: 'Navigate markets with real-time AI analysis and institutional-grade research.',
    siteName: 'ABCG Research',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABCG Research',
    description: 'Institutional Intelligence & Global Markets',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased bg-background text-foreground flex flex-col min-h-screen items-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full max-w-7xl mx-auto flex flex-col min-h-screen shadow-2xl bg-background border-x border-border/50">
            <Navbar />
            <main className="flex-1 w-full">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
