import { LineChart, Zap, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: LineChart,
    title: "Live Line Combinations",
    description: "See up-to-date NHL line combinations the moment they're announced. Never miss a lineup change again."
  },
  {
    icon: TrendingUp,
    title: "Player Trends & Stats",
    description: "Track player performance, hot streaks, and advanced analytics in real-time across all your hockey sites."
  },
  {
    icon: Users,
    title: "Opposition Analysis",
    description: "Instant insights into opponent matchups, defensive tendencies, and team statistics."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Data appears instantly as you browse. No page loads, no waiting—just seamless integration."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your browsing stays private. We don't track, sell, or store your personal data."
  },
  {
    icon: BarChart3,
    title: "Power-Play Units",
    description: "Track special teams combinations and player usage in critical situations."
  }
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need, Right Where You Browse
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Puck Wizard seamlessly integrates with your workflow, bringing pro-level hockey analytics to your fingertips.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--glow-ice)] group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
