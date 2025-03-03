
import { useState, useEffect } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.documentElement.classList.toggle('dark', theme === 'dark');
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-astro-purple to-astro-blue">
            Celestial
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavItem href="#horoscope">Horoscope</NavItem>
          <NavItem href="#zodiac">Zodiac</NavItem>
          <NavItem href="#birthchart">Birth Chart</NavItem>
          <NavItem href="#insights">Insights</NavItem>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
    >
      {children}
    </a>
  );
};

export default Navbar;
