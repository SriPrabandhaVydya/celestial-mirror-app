
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ZodiacSignProps = {
  sign: string;
  symbol: string;
  element: "fire" | "earth" | "air" | "water";
  dates: string;
  traits: string[];
  ruling: string;
  className?: string;
};

const elementColors = {
  fire: "from-amber-500 to-red-500",
  earth: "from-emerald-500 to-lime-600",
  air: "from-sky-400 to-indigo-500",
  water: "from-blue-400 to-violet-600",
};

const ZodiacSign = ({
  sign,
  symbol,
  element,
  dates,
  traits,
  ruling,
  className,
}: ZodiacSignProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 h-full transition-all duration-500",
        "border border-border bg-card/60 backdrop-blur-sm",
        "hover:shadow-lg hover:shadow-primary/10",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold">{sign}</h3>
            <p className="text-sm text-muted-foreground">{dates}</p>
          </div>
          <span className="text-3xl">{symbol}</span>
        </div>

        <div className="space-y-4 flex-grow">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Element</p>
            <p className="font-medium capitalize">{element}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Ruling</p>
            <p className="font-medium">{ruling}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Traits</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div 
          className={`absolute inset-0 opacity-10 transition-opacity duration-700 ease-in-out bg-gradient-to-br ${elementColors[element]}`}
          style={{ 
            opacity: isHovered ? 0.2 : 0.05,
          }}
        />
      </div>
    </div>
  );
};

export default ZodiacSign;
