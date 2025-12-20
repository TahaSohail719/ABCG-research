import { STATS } from "@/lib/constants";

export function StatsGrid() {
    return (
        <div className="w-full">
            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-y-8">
                    {STATS.map((stat, idx) => (
                        <div key={idx} className="group flex flex-col items-start p-6 rounded-xl transition-all duration-300 hover:bg-[#f26726]/5 hover:shadow-lg border border-transparent hover:border-[#f26726]/10">
                            <span className="text-4xl font-bold tracking-tighter text-foreground group-hover:text-[#f26726] transition-colors">
                                {stat.value}
                            </span>
                            <span className="mt-2 text-sm font-medium text-muted-foreground text-left group-hover:text-foreground/80 transition-colors">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
