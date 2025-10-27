import { Button } from "@/components/ui/button";
import { Chrome, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-hockey.jpg";
import logo from "@/assets/puck-wizard-logo.png";

const detectBrowser = () => {
  if (typeof navigator !== 'undefined') {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('firefox')) return 'firefox';
    if (userAgent.includes('chrome') && !userAgent.includes('edg')) return 'chrome';
    if (userAgent.includes('safari') && !userAgent.includes('chrome')) return 'safari';
    if (userAgent.includes('edg')) return 'edge';
  }
  return 'chrome';
};

const getDownloadUrl = (browser: string) => {
  const urls: { [key: string]: string } = {
    chrome: 'https://chrome.google.com/webstore/category/extensions',
    firefox: 'https://addons.mozilla.org/en-US/firefox/',
    safari: '#',
    edge: 'https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home',
  };
  return urls[browser] || urls.chrome;
};

export const Hero = () => {
  const browser = detectBrowser();
  
  const handleDownloadClick = () => {
    window.open(getDownloadUrl(browser), '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Ice Glow Effect */}
      <div className="absolute inset-0 bg-gradient-ice" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo & Badge */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <img src={logo} alt="Puck Wizard" className="w-24 h-24 md:w-32 md:h-32 animate-fade-in" />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Chrome className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Browser Extension for Fantasy Hockey Pros - Works on Chrome, Firefox & More</span>
            </div>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight">
            Your Edge in Fantasy Hockey
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Instantly view live line combinations, player trends, and opposition data—all without leaving your favorite fantasy hockey sites.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group" onClick={handleDownloadClick}>
              Add to Your Browser - It's Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Trust Badge */}
          <p className="text-sm text-muted-foreground mt-8">
            Trusted by 1,000+ fantasy managers • Free forever
          </p>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
