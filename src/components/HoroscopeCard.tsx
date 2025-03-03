
import { useState } from "react";
import { cn } from "@/lib/utils";

type HoroscopeCardProps = {
  title: string;
  date: string;
  content: string;
  className?: string;
  aspectRating?: {
    love: number;
    career: number;
    wellness: number;
  };
};

const HoroscopeCard = ({
  title,
  date,
  content,
  className,
  aspectRating = { love: 3, career: 3, wellness: 3 },
}: HoroscopeCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
        "border border-border bg-card/60 backdrop-blur-sm",
        "hover:shadow-lg hover:shadow-primary/10",
        className
      )}
    >
      <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="relative z-10">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
        
        <p className="text-base leading-relaxed mb-6">{content}</p>
        
        <div className="space-y-2">
          <AspectRating label="Love" rating={aspectRating.love} />
          <AspectRating label="Career" rating={aspectRating.career} />
          <AspectRating label="Wellness" rating={aspectRating.wellness} />
        </div>
      </div>
    </div>
  );
};

const AspectRating = ({ label, rating }: { label: string; rating: number }) => {
  const MAX_RATING = 5;
  
  return (
    <div className="flex items-center">
      <span className="w-20 text-sm text-muted-foreground">{label}</span>
      <div className="flex-1 flex items-center gap-1">
        {Array.from({ length: MAX_RATING }).map((_, i) => (
          <div 
            key={i}
            className={cn(
              "h-1.5 rounded-full flex-1 transition-colors",
              i < rating ? "bg-primary" : "bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HoroscopeCard;
