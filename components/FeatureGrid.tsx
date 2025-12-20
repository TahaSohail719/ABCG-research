import { Zap, TrendingUp, Brain } from "lucide-react";

const FEATURES = [
    {
        title: "Proven, Repeatable Process",
        description: "Our macro-framework delivers consistent results across market cycles.",
        icon: TrendingUp,
    },
    {
        title: "High-Conviction Ideas",
        description: "Alpha-generating strategies focused on asymmetric risk-reward opportunities.",
        icon: Zap,
    },
    {
        title: "Psychology-Driven Trading",
        description: "Understanding market sentiment and behavioral economics to time entries.",
        icon: Brain,
    },
];

export function FeatureGrid() {
    return (
        <div className="w-full py-4">
            <div className="grid gap-6">
                {FEATURES.map((feature, idx) => (
                    <div key={idx} className="group flex items-start text-left space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-[#f26726] hover:text-white hover:shadow-lg hover:scale-105">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">
                            <feature.icon className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold font-serif group-hover:text-white transition-colors">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm mt-1 group-hover:text-white/90 transition-colors">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
