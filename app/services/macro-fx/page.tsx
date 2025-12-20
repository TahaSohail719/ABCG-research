import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp, Globe, BarChart3, ArrowRight } from "lucide-react";

export default function MacroFXPage() {
  const features = [
    {
      icon: TrendingUp,
      title: "Global Macro Trends",
      description: "Deep analysis of economic indicators, central bank policies, and geopolitical developments.",
    },
    {
      icon: Globe,
      title: "FX Market Intelligence",
      description: "Real-time currency market insights with technical and fundamental analysis.",
    },
    {
      icon: BarChart3,
      title: "Strategic Positioning",
      description: "Data-driven recommendations for optimal FX exposure and risk management.",
    },
  ];

  const researchTopics = [
    "Federal Reserve Policy Impact on USD",
    "Emerging Markets Currency Analysis",
    "Cross-Currency Correlations",
    "Central Bank Digital Currencies (CBDCs)",
    "Geopolitical Risk Assessment",
    "Interest Rate Differentials",
  ];

  return (
    <div className="flex flex-col gap-12 md:gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(234,179,8,0.1),transparent_50%)]" />
        <div className="container px-4 md:px-6 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">
              Macro & FX Research
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Navigate global currency markets with institutional-grade macroeconomic research and foreign exchange analysis.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-semibold">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold font-serif mb-8">What We Offer</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, idx) => (
            <Card key={idx} className="border-2 hover:border-brand-cyan transition-colors">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-brand-cyan mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Research Topics */}
      <section className="container px-4 md:px-6">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold font-serif mb-6">Sample Research Topics</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Our macro and FX research covers a comprehensive range of topics to keep you ahead of market movements.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {researchTopics.map((topic, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="h-2 w-2 bg-brand-cyan rounded-full mt-2" />
                <span className="text-foreground font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-brand-navy to-slate-900 p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold font-serif mb-4">Ready to Transform Your FX Strategy?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Partner with us to access institutional-grade macro and FX research that drives informed decision-making.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-semibold">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
