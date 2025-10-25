import { Chrome, Sparkles, Trophy } from "lucide-react";

const steps = [
  {
    icon: Chrome,
    title: "Install the Extension",
    description: "Add Puck Wizard to Chrome in seconds. One click, zero setup required."
  },
  {
    icon: Sparkles,
    title: "Browse as Usual",
    description: "Visit your fantasy hockey sites, including Fantrax, Yahoo, and ESPN—just like always."
  },
  {
    icon: Trophy,
    title: "Get the Edge",
    description: "Live data overlays appear instantly. Make smarter decisions, dominate your league."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 relative bg-gradient-ice">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No separate sites, no configuration, no hassle. Just install and dominate.
          </p>
        </div>
        
        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/40 to-primary/10" />
                )}
                
                {/* Step Content */}
                <div className="relative">
                  {/* Step Number */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center group-hover:border-primary/60 transition-all group-hover:shadow-[var(--glow-ice)]">
                    <div className="relative">
                      <step.icon className="w-12 h-12 text-primary" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
