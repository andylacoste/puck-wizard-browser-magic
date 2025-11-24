import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Alternative: Before/After Comparison Component
// This shows the extension in action with a slider comparison

const beforeAfterScreenshots = [
  {
    id: 1,
    before: "/placeholder.svg", // Replace with "before" screenshot
    after: "/placeholder.svg", // Replace with "after" screenshot (with extension)
    title: "Fantrax Player List",
    description: "See how Puck Wizard enhances your view with instant line data",
  },
];

export const AppShowcase = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Before & After
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the difference Puck Wizard makes on your fantasy hockey pages.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {beforeAfterScreenshots.map((item) => (
            <Card key={item.id} className="overflow-hidden border-border">
              <div className="relative aspect-video bg-muted overflow-hidden group">
                {/* Before Image */}
                <div className="absolute inset-0">
                  <img
                    src={item.before}
                    alt="Before Puck Wizard"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* After Image with Slider */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src={item.after}
                    alt="After Puck Wizard"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Slider Control */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize z-10"
                  style={{ left: `${sliderPosition}%` }}
                  onMouseDown={(e) => {
                    const startX = e.clientX;
                    const startPos = sliderPosition;
                    const rect = e.currentTarget.parentElement?.getBoundingClientRect();
                    if (!rect) return;

                    const handleMouseMove = (moveEvent: MouseEvent) => {
                      const deltaX = moveEvent.clientX - startX;
                      const percentage = (deltaX / rect.width) * 100;
                      const newPos = Math.max(0, Math.min(100, startPos + percentage));
                      setSliderPosition(newPos);
                    };

                    const handleMouseUp = () => {
                      document.removeEventListener("mousemove", handleMouseMove);
                      document.removeEventListener("mouseup", handleMouseUp);
                    };

                    document.addEventListener("mousemove", handleMouseMove);
                    document.addEventListener("mouseup", handleMouseUp);
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary border-2 border-background flex items-center justify-center shadow-lg">
                    <ChevronLeft className="w-4 h-4 text-primary-foreground" />
                    <ChevronRight className="w-4 h-4 text-primary-foreground -ml-1" />
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-background/90 backdrop-blur-sm text-sm font-semibold">
                  Before
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded bg-primary/90 backdrop-blur-sm text-sm font-semibold text-primary-foreground">
                  After
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

