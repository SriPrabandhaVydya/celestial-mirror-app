
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ZodiacSign from "@/components/ZodiacSign";
import HoroscopeCard from "@/components/HoroscopeCard";
import BirthChart from "@/components/BirthChart";
import { Star, Sun, Moon, Calendar, Search } from "lucide-react";

const zodiacSigns = [
  {
    sign: "Aries",
    symbol: "♈",
    element: "fire" as const,
    dates: "Mar 21 - Apr 19",
    traits: ["Courageous", "Determined", "Confident", "Enthusiastic"],
    ruling: "Mars",
  },
  {
    sign: "Taurus",
    symbol: "♉",
    element: "earth" as const,
    dates: "Apr 20 - May 20",
    traits: ["Reliable", "Patient", "Practical", "Devoted"],
    ruling: "Venus",
  },
  {
    sign: "Gemini",
    symbol: "♊",
    element: "air" as const,
    dates: "May 21 - Jun 20",
    traits: ["Curious", "Adaptable", "Quick-witted", "Versatile"],
    ruling: "Mercury",
  },
  {
    sign: "Cancer",
    symbol: "♋",
    element: "water" as const,
    dates: "Jun 21 - Jul 22",
    traits: ["Tenacious", "Imaginative", "Loyal", "Emotional"],
    ruling: "Moon",
  },
];

const sampleBirthChart = {
  planets: [
    { name: "Sun", sign: "Taurus", degree: 15.2 },
    { name: "Moon", sign: "Libra", degree: 3.8 },
    { name: "Mercury", sign: "Aries", degree: 28.5, isRetrograde: true },
    { name: "Venus", sign: "Gemini", degree: 7.2 },
    { name: "Mars", sign: "Pisces", degree: 19.4 },
    { name: "Jupiter", sign: "Aquarius", degree: 5.1 },
    { name: "Saturn", sign: "Capricorn", degree: 22.9, isRetrograde: true },
  ],
  houses: [
    { house: 1, sign: "Virgo" },
    { house: 2, sign: "Libra" },
    { house: 3, sign: "Scorpio" },
    { house: 4, sign: "Sagittarius" },
    { house: 5, sign: "Capricorn" },
    { house: 6, sign: "Aquarius" },
    { house: 7, sign: "Pisces" },
    { house: 8, sign: "Aries" },
    { house: 9, sign: "Taurus" },
    { house: 10, sign: "Gemini" },
    { house: 11, sign: "Cancer" },
    { house: 12, sign: "Leo" },
  ],
  ascendant: "Virgo",
};

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="space-y-4 text-center">
          <div className="relative">
            <Star className="w-8 h-8 text-primary animate-spin-slow" />
            <div className="absolute inset-0 animate-pulse-subtle">
              <Star className="w-8 h-8 text-primary/50" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Loading your cosmic journey...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="stars" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 md:pr-12 animate-fade-in">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                Discover Your Cosmic Self
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Personalized <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-astro-purple to-astro-blue">
                  Astrology Guide
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore your birth chart, daily horoscopes, and cosmic insights tailored 
                specifically to your astrological profile.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-md hover:shadow-primary/20 hover:translate-y-[-2px]">
                  Get Started
                </button>
                <button className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/80">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative select-none animate-fade-in">
              <div className="aspect-square relative max-w-md mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-astro-purple/30 to-astro-blue/30 blur-3xl opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full p-8">
                    <div className="w-full h-full rounded-full border-2 border-dashed border-astro-purple/30 animate-spin-slow flex items-center justify-center">
                      <div className="w-[90%] h-[90%] rounded-full border border-astro-blue/30 animate-spin-slow relative" style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
                        <div className="absolute -top-2 -right-2 bg-astro-blue/90 p-1 rounded-full animate-pulse-subtle">
                          <Sun className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute -bottom-2 -left-2 bg-astro-purple/90 p-1 rounded-full animate-pulse-subtle" style={{ animationDelay: '1s' }}>
                          <Moon className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-[80%] h-[80%] mx-auto my-auto mt-[10%] rounded-full border border-white/20 flex items-center justify-center">
                          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-astro-purple/50 to-astro-blue/50 backdrop-blur-sm flex items-center justify-center">
                            <span className="text-6xl">♈</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Horoscope Section */}
      <section id="horoscope" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
              <Calendar className="w-4 h-4" />
              <span>Daily Guidance</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Your Daily Horoscope</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cosmic insights to guide your day, tailored to your sun sign
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animate">
            <HoroscopeCard 
              title="Aries" 
              date="Today, May 15"
              content="Your natural leadership qualities shine today, Aries. You'll find yourself taking charge in group situations, and others will happily follow your lead. A creative burst of energy arrives this afternoon."
              aspectRating={{ love: 4, career: 5, wellness: 3 }}
            />
            <HoroscopeCard 
              title="Taurus" 
              date="Today, May 15"
              content="Financial insights come your way today, Taurus. Your practical approach to a complex problem will impress someone influential. Tonight, focus on self-care and grounding exercises for optimal well-being."
              aspectRating={{ love: 3, career: 4, wellness: 5 }}
            />
            <HoroscopeCard 
              title="Gemini" 
              date="Today, May 15"
              content="Communication flows effortlessly today, Gemini. Your ideas will be well-received, making this an excellent time for important conversations. Someone from your past may reach out unexpectedly."
              aspectRating={{ love: 5, career: 4, wellness: 3 }}
            />
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/80 inline-flex items-center gap-2">
              <Search className="w-4 h-4" />
              View Your Sign
            </button>
          </div>
        </div>
      </section>

      {/* Zodiac Section */}
      <section id="zodiac" className="py-20 px-6 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
              <Star className="w-4 h-4" />
              <span>The Celestial Wheel</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Zodiac Signs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the unique traits and energies of each zodiac sign
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animate">
            {zodiacSigns.map((sign) => (
              <ZodiacSign
                key={sign.sign}
                sign={sign.sign}
                symbol={sign.symbol}
                element={sign.element}
                dates={sign.dates}
                traits={sign.traits}
                ruling={sign.ruling}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/80">
              Explore All Signs
            </button>
          </div>
        </div>
      </section>

      {/* Birth Chart Section */}
      <section id="birthchart" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 md:order-2">
              <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                <Moon className="w-4 h-4" />
                <span>Celestial Blueprint</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Birth Chart Analysis</h2>
              <p className="text-muted-foreground">
                Your birth chart is a snapshot of the sky at the moment you were born, 
                revealing your cosmic DNA and life's potential. Our detailed analysis 
                provides insights into your personality, strengths, challenges, and destiny paths.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Sun className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Planetary Positions</h3>
                    <p className="text-sm text-muted-foreground">Discover where each planet was located in the zodiac when you were born.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Moon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Houses Analysis</h3>
                    <p className="text-sm text-muted-foreground">Understand how the zodiac influences different areas of your life.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Aspects & Patterns</h3>
                    <p className="text-sm text-muted-foreground">Explore the relationships between planets that shape your personality.</p>
                  </div>
                </div>
              </div>
              
              <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-md hover:shadow-primary/20 hover:translate-y-[-2px]">
                Get Your Birth Chart
              </button>
            </div>
            
            <div className="md:order-1">
              <BirthChart 
                planets={sampleBirthChart.planets}
                houses={sampleBirthChart.houses}
                ascendant={sampleBirthChart.ascendant}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-astro-purple to-astro-blue">
                Celestial
              </span>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                Discover your cosmic self through personalized 
                astrology readings and daily horoscopes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium mb-3">Zodiac</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Fire Signs</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Earth Signs</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Air Signs</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Water Signs</a></li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium mb-3">Readings</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Daily Horoscope</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Weekly Forecast</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Monthly Outlook</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">2023 Prediction</a></li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Astrology Basics</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Planets & Elements</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Houses Explained</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Compatibility</a></li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium mb-3">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Astrologers</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2023 Celestial. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
