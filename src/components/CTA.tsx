import { Button } from "@/components/ui/button";
import { Chrome, ArrowRight } from "lucide-react";

const detectBrowser = () => {
  // Check for Firefox
  if (typeof navigator !== 'undefined') {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('firefox')) {
      return 'firefox';
    }
    // Check for Chrome/Chromium (but not Edge)
    if (userAgent.includes('chrome') && !userAgent.includes('edg')) {
      return 'chrome';
    }
    // Check for Safari
    if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
      return 'safari';
    }
    // Check for Edge
    if (userAgent.includes('edg')) {
      return 'edge';
    }
  }
  return 'chrome'; // Default to Chrome
};

const getDownloadUrl = (browser: string) => {
  const urls = {
    chrome: 'https://chrome.google.com/webstore/category/extensions', // Replace with your Chrome Web Store URL
    firefox: 'https://addons.mozilla.org/en-CA/firefox/addon/puck-wizard/',
    safari: '#', // Coming soon
    edge: 'https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home', // Replace with your Edge Add-on URL
  };
  return urls[browser as keyof typeof urls] || urls.chrome;
};

export const CTA = () => {
  const browser = detectBrowser();
  
  const handleDownloadClick = () => {
    window.open(getDownloadUrl(browser), '_blank');
  };

  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Card */}
          <div className="relative p-12 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-primary/20 shadow-[var(--shadow-elevated)] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-ice opacity-50" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Chrome className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Available Now</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Elevate Your Game?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of fantasy managers using Puck Wizard to stay ahead of the competition.
              </p>
              
              <div className="flex flex-col gap-4">
                <Button variant="hero" size="xl" className="group" onClick={handleDownloadClick}>
                  Get Puck Wizard Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button variant="outline" size="lg">
                    Chrome
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('https://addons.mozilla.org/en-CA/firefox/addon/puck-wizard/', '_blank')}
                  >
                    Firefox
                  </Button>
                  <Button variant="outline" size="lg" disabled>
                    Safari (Coming Soon)
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                No credit card required • Works with all major hockey sites • 5-star rated
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
