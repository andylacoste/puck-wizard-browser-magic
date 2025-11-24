import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";
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
    chrome: 'https://chromewebstore.google.com/detail/puck-wizard/lbjfhcfoaefpfbpohngjhgfkkhocjadn?pli=1',
    firefox: 'https://addons.mozilla.org/en-CA/firefox/addon/puck-wizard/',
    safari: '#',
    edge: 'https://chromewebstore.google.com/detail/puck-wizard/lbjfhcfoaefpfbpohngjhgfkkhocjadn?pli=1', // Edge can use Chrome Web Store
  };
  return urls[browser] || urls.chrome;
};

export const Header = () => {
  const browser = detectBrowser();
  
  const handleDownloadClick = () => {
    window.open(getDownloadUrl(browser), '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Puck Wizard" className="w-10 h-10" />
            <span className="text-xl font-bold text-foreground">Puck Wizard</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="/features"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a 
              href="/pricing"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a 
              href="/how-it-works"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </a>
          </nav>
          
          {/* CTA */}
          <Button variant="hero" size="default" onClick={handleDownloadClick}>
            <Chrome className="w-4 h-4" />
            Add to Your Browser
          </Button>
        </div>
      </div>
    </header>
  );
};
