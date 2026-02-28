"use client";

import { useState } from "react";
import { Plus, Minus, Clock, Calendar, User, BookOpen, Layers } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Session = {
    title: string;
    topics: string[];
};

const COURSE_SESSIONS: Session[] = [
    {
        title: "Session 1: Forex Basics & Market Introduction",
        topics: [
            "Self Introduction",
            "What is Forex?",
            "What is Pip & Point?",
            "Lot Size and Margin Explained",
            "Understanding Gold to PKR Conversion",
            "Importance of Choosing the Right Broker",
            "Q&A / Interactive Questionnaire",
        ]
    },
    {
        title: "Session 2: Trading Platforms & Market Types",
        topics: [
            "Forex Brokers and Trading Platforms",
            "MT5 Introduction and Hands-on Training",
            "Forex Trading Sessions",
            "Bid/Ask Price",
            "Order Types: Market, Limit, Stop",
            "Market Analysis Types: Fundamental vs Technical",
            "Introduction to Candlestick Charts and Timeframes",
            "Basic Candlestick Formations",
        ]
    },
    {
        title: "Session 3: Patterns, Indicators & Market Movement",
        topics: [
            "Introduction to Chart Patterns",
            "Indicators: RSI & Moving Averages",
            "Support & Resistance Levels",
            "Calculating Daily Moves for Short-Term Trades",
            "Identifying Market Trends",
        ]
    },
    {
        title: "Session 4: Personal Trading Strategies & Asset Types",
        topics: [
            "Sohail Yousaf’s Fibonacci Strategy",
            "Trend Reversal vs Retracement",
            "RSI & Bollinger Bands Strategy",
            "Safe Haven vs Risky Assets",
            "Understanding Asset Allocation",
        ]
    },
    {
        title: "Session 5: Trading Psychology & Personal Growth",
        topics: [
            "Psychological Barriers in Trading",
            "Making Unbiased Decisions",
            "Avoiding Revenge Trading",
            "Maximizing Profits & Minimizing Losses",
            "Personal Experiences & Insights (Sohail Yousaf)",
        ]
    },
    {
        title: "Session 6: Risk Management & Trade Protection",
        topics: [
            "Risk Management Principles",
            "Risk-Reward Ratio",
            "Stop Loss & Take Profit",
            "Averaging Strategy",
            "Hedging Strategy",
        ]
    },
    {
        title: "Session 7: Deep Dive into Fundamental Analysis",
        topics: [
            "What is Fundamental Analysis?",
            "Monetary & Fiscal Policy",
            "Key Economic Reports & Market Impact",
            "How Central Banks Influence Currency Markets",
        ]
    },
    {
        title: "Session 8: Global Influences on Forex Markets",
        topics: [
            "Role of Geography in Forex",
            "Geopolitics & Market Behavior",
            "Investor Confidence",
            "Interest Rate Policy Divergence",
        ]
    },
    {
        title: "Session 9: Strategy Execution & Asset Reallocation",
        topics: [
            "Combining Technical & Fundamental Analysis",
            "Finding High-Probability Trade Setups",
            "Real-World Examples of Asset Allocation",
            "Group Analysis & Discussion",
        ]
    },
    {
        title: "Session 10: Final Recap & Closing",
        topics: [
            "Complete Training Program Revision",
            "Final Q&A Session",
            "Trading Psychology Going Forward",
            "Certification & Wrap-Up",
        ]
    }
];

export default function RegistrationPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleSession = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            {/* Header Section */}
            <header className="relative overflow-hidden bg-slate-950 text-white py-24 md:py-32">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/40 via-slate-950 to-slate-950 z-10" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
                </div>

                <div className="container relative z-20 px-4 mx-auto max-w-6xl">
                    <div className="flex flex-wrap gap-3 mb-6">
                        <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-500 backdrop-blur-sm">
                            <Layers className="mr-2 h-4 w-4" />
                            Exclusive Training Program
                        </div>
                        <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-500 backdrop-blur-sm">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Certified Program (Certificates Awarded)
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 max-w-4xl text-white leading-tight">
                        Master the Forex Market with <span className="text-orange-500">Sohail Yousaf</span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-2xl mb-8 font-light leading-relaxed">
                        A comprehensive 1.5-month intensive program designed to transform you from a beginner into a disciplined, profitable trader.
                    </p>

                    <div className="mb-12">
                        <Button
                            size="lg"
                            onClick={() => document.getElementById('enroll-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(242,103,38,0.3)] hover:shadow-[0_0_40px_rgba(242,103,38,0.5)] transform transition-all hover:scale-105 border border-orange-500/20"
                        >
                            Enroll Now
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
                        <div className="flex flex-col items-center justify-center text-center space-y-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <Calendar className="h-6 w-6 text-orange-500 mb-1" />
                            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Duration</span>
                            <span className="text-lg font-bold">1.5 Month</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center space-y-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <Clock className="h-6 w-6 text-orange-500 mb-1" />
                            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Schedule</span>
                            <span className="text-lg font-bold">2 / Week</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center space-y-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <Clock className="h-6 w-6 text-orange-500 mb-1" />
                            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Length</span>
                            <span className="text-lg font-bold">1 Hr / Session</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center space-y-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <BookOpen className="h-6 w-6 text-orange-500 mb-1" />
                            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Sessions</span>
                            <span className="text-lg font-bold">10 Total</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center space-y-2 p-4 col-span-2 md:col-span-1 border md:border-none border-orange-500/20 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 transition-colors">
                            <User className="h-6 w-6 text-orange-500 mb-1" />
                            <span className="text-xs text-orange-500/80 uppercase tracking-wider font-semibold">Trainer</span>
                            <span className="text-lg font-bold text-white">Sohail Yousaf</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Training Program Outline Section (Timeline) */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Training Program Outline</h2>
                        <p className="mt-4 text-muted-foreground text-lg">Step-by-step curriculum for your trading journey</p>
                    </div>

                    <div className="relative">
                        {/* Vertical Center Line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/10 via-orange-500/40 to-orange-500/10 transform -translate-x-1/2"></div>

                        <div className="space-y-6 lg:space-y-0 relative">
                            {COURSE_SESSIONS.map((session, index) => {
                                const isLeft = index % 2 === 0;
                                const isOpen = openIndex === index;

                                return (
                                    <div
                                        key={index}
                                        className={`relative flex flex-col lg:flex-row items-center justify-between group ${isLeft ? 'lg:flex-row-reverse' : ''
                                            } lg:mb-6`}
                                    >
                                        {/* Center Node (visible only on lg screens) */}
                                        <div className="hidden lg:flex absolute left-1/2 top-8 w-10 h-10 transform -translate-x-1/2 items-center justify-center">
                                            <div className={`w-4 h-4 rounded-full border-2 bg-background z-10 transition-all duration-300 ${isOpen ? 'border-orange-500 ring-4 ring-orange-500/20 scale-125' : 'border-slate-300 dark:border-slate-700'
                                                }`}></div>
                                        </div>

                                        {/* Empty space for alternating layout on Desktop */}
                                        <div className="hidden lg:block lg:w-5/12"></div>

                                        {/* Card Content */}
                                        <div className="w-full lg:w-5/12 px-4 shadow-sm lg:shadow-none hover:shadow-lg transition-shadow duration-300 rounded-2xl relative z-10">
                                            <div
                                                className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-background ${isOpen ? 'border-orange-500/50 shadow-md ring-1 ring-orange-500/20' : 'border-border hover:border-border/80'
                                                    }`}
                                            >
                                                {/* Card Header (Clickable) */}
                                                <button
                                                    onClick={() => toggleSession(index)}
                                                    className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
                                                >
                                                    <div>
                                                        <div className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">
                                                            Session {index + 1}
                                                        </div>
                                                        <h3 className="text-lg md:text-xl font-bold leading-tight font-serif group-hover:text-orange-500 transition-colors">
                                                            {session.title.split(': ')[1] || session.title}
                                                        </h3>
                                                    </div>
                                                    <div className={`flex-shrink-0 mt-2 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${isOpen ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' : 'bg-secondary text-secondary-foreground group-hover:bg-orange-500/10 group-hover:text-orange-500'
                                                        }`}>
                                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                                    </div>
                                                </button>

                                                {/* Dropdown Content */}
                                                <div
                                                    className={`overflow-hidden transition-all duration-500 ease-in-out bg-slate-50/50 dark:bg-slate-900/50 ${isOpen ? 'max-h-[500px] opacity-100 border-t border-border' : 'max-h-0 opacity-0'
                                                        }`}
                                                >
                                                    <ul className="p-6 space-y-3">
                                                        {session.topics.map((topic, i) => (
                                                            <li key={i} className="flex items-start gap-3">
                                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500/60 flex-shrink-0"></div>
                                                                <span className="text-muted-foreground text-sm md:text-base leading-relaxed">{topic}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="enroll-section" className="py-20 bg-background text-center relative overflow-hidden border-t">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="container relative z-10 px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
                        Secure your spot in the upcoming batch. Limited seats available for personalized attention.
                    </p>
                    <Link href="/registration/enrollment">
                        <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-xl shadow-orange-500/20 transition-all hover:scale-105 active:scale-95 border border-orange-500/20">
                            Enroll Now
                        </button>
                    </Link>
                    <p className="mt-6 text-sm text-muted-foreground italic">Contact <strong className="font-semibold text-foreground">0339 000 4920</strong> for registration queries</p>
                </div>
            </section>
        </div>
    );
}
