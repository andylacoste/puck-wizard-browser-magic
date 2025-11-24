import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Maximize2, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import linesPpFree from "@/assets/lines_pp_free.png";
import linesPpTooltipFree from "@/assets/lines_pp_tooltip_free.png";
import hotColdPremium from "@/assets/hot_cold_premium.png";
import gaGfPremium from "@/assets/ga_gf_premium.png";

// Screenshots array with imported images
const screenshots = [
  {
    id: 1,
    title: "Line Combinations",
    description: "See forward lines, defensive pairings, and power-play units at a glance",
    image: linesPpFree,
    alt: "Puck Wizard showing line combinations on Fantrax",
  },
  {
    id: 2,
    title: "Line Tooltips",
    description: "One click to see who they are currently playing on a line with for 5 on 5 and the PP",
    image: linesPpTooltipFree,
    alt: "Player status badges showing OUT indicators",
  },
  {
    id: 3,
    title: "Hot and Cold Players",
    description: "Premium feature showing which players are hot and cold, and who is on the bubble",
    image: hotColdPremium,
    alt: "Power play unit badges displayed next to player names",
  },
  {
    id: 4,
    title: "GA/G and GF/G Rankings",
    description: "Premium feature showing their upcoming opponents GA/G and GF/G rankings",
    image: gaGfPremium,
    alt: "Back-to-back game indicators for teams",
  },
];

export const Screenshots = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 relative bg-gradient-ice">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See Puck Wizard in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real screenshots from fantasy managers using Puck Wizard to dominate their leagues.
          </p>
        </div>

        {/* Carousel Gallery */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {screenshots.map((screenshot) => (
                <CarouselItem key={screenshot.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="overflow-hidden border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--glow-ice)] group cursor-pointer"
                    onClick={() => setSelectedImage(screenshot.image)}
                  >
                    <div className="relative aspect-video bg-muted overflow-hidden">
                      <img
                        src={screenshot.image}
                        alt={screenshot.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-1">
                        {screenshot.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {screenshot.description}
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        {/* Grid Layout Alternative (commented out - uncomment to use instead of carousel) */}
        {/* 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {screenshots.map((screenshot) => (
            <Card
              key={screenshot.id}
              className="overflow-hidden border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--glow-ice)] group cursor-pointer"
              onClick={() => setSelectedImage(screenshot.image)}
            >
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img
                  src={screenshot.image}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {screenshot.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        */}

        {/* Lightbox Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl p-0 bg-transparent border-none">
            {selectedImage && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={selectedImage}
                  alt="Screenshot"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

