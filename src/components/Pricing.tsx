import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Crown } from "lucide-react";

const freeTier = {
  name: "Free",
  icon: Zap,
  price: "$0",
  period: "forever",
  description: "Perfect for casual fans",
  features: [
    "Live NHL line combinations",
    "Basic lineup updates",
    "Works on all hockey sites",
  ],
  cta: "Get Started Free",
  variant: "outline" as const,
  popular: false,
};

const premiumTier = {
  name: "Premium",
  icon: Crown,
  price: "$4.99",
  period: "per month",
  description: "For serious fantasy managers",
  features: [
    "Everything in Free, plus:",
    "Full line details & analytics",
    "Real-time player trends & hot streaks",
    "Recent line movement tracking",
    "Opposition trend analysis",
    "Advanced matchup insights",
    "Power-play & special teams data",
    "Historical performance metrics",
    "Priority data updates",
  ],
  cta: "Upgrade to Premium",
  variant: "hero" as const,
  popular: true,
};

export const Pricing = () => {
  return (
    <section className="py-24 relative bg-gradient-ice">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Edge
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free with essential line data, or unlock the full power of Puck Wizard with Premium.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Free Tier */}
          <Card className="p-8 bg-card border-border hover:border-primary/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <freeTier.icon className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{freeTier.name}</h3>
                <p className="text-sm text-muted-foreground">{freeTier.description}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">{freeTier.price}</span>
                <span className="text-muted-foreground">/ {freeTier.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {freeTier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant={freeTier.variant} size="lg" className="w-full">
              {freeTier.cta}
            </Button>
          </Card>

          {/* Premium Tier */}
          <Card className="p-8 bg-card border-primary/40 hover:border-primary/60 transition-all relative shadow-[var(--glow-ice)]">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="px-4 py-1 rounded-full bg-gradient-accent text-accent-foreground text-sm font-semibold">
                Most Popular
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <premiumTier.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{premiumTier.name}</h3>
                <p className="text-sm text-muted-foreground">{premiumTier.description}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">{premiumTier.price}</span>
                <span className="text-muted-foreground">/ {premiumTier.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {premiumTier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className={index === 0 ? "text-foreground font-semibold" : "text-foreground"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button variant={premiumTier.variant} size="lg" className="w-full">
              {premiumTier.cta}
            </Button>
          </Card>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          All plans include unlimited usage • Cancel anytime • 14-day money-back guarantee
        </p>
      </div>
    </section>
  );
};
