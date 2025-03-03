
import { useState } from "react";
import { cn } from "@/lib/utils";

type PlanetPosition = {
  name: string;
  sign: string;
  degree: number;
  isRetrograde?: boolean;
};

type BirthChartProps = {
  planets: PlanetPosition[];
  houses?: { house: number; sign: string }[];
  ascendant?: string;
  className?: string;
};

const BirthChart = ({
  planets,
  houses = [],
  ascendant,
  className,
}: BirthChartProps) => {
  const [activeTab, setActiveTab] = useState<'planets' | 'houses'>('planets');

  return (
    <div
      className={cn(
        "rounded-2xl p-6 border border-border bg-card/60 backdrop-blur-sm",
        "transition-all duration-300 hover:shadow-lg hover:shadow-primary/10",
        className
      )}
    >
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Birth Chart</h3>
        
        {ascendant && (
          <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
            Ascendant: {ascendant}
          </div>
        )}
      </div>

      <div className="mb-6 border-b border-border">
        <div className="flex space-x-4">
          <TabButton 
            active={activeTab === 'planets'} 
            onClick={() => setActiveTab('planets')}
          >
            Planets
          </TabButton>
          <TabButton 
            active={activeTab === 'houses'} 
            onClick={() => setActiveTab('houses')}
          >
            Houses
          </TabButton>
        </div>
      </div>

      <div className="space-y-4">
        {activeTab === 'planets' ? (
          planets.map((planet) => (
            <PlanetRow key={planet.name} planet={planet} />
          ))
        ) : (
          houses.map((house) => (
            <HouseRow key={house.house} house={house} />
          ))
        )}
      </div>
    </div>
  );
};

const TabButton = ({ 
  active, 
  onClick, 
  children 
}: { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode 
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 text-sm font-medium transition-colors",
        "border-b-2 -mb-px",
        active 
          ? "border-primary text-foreground" 
          : "border-transparent text-muted-foreground hover:text-foreground"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const PlanetRow = ({ planet }: { planet: PlanetPosition }) => {
  return (
    <div className="flex items-center p-2 rounded-lg hover:bg-muted/30 transition-colors">
      <div className="w-24 font-medium">{planet.name}</div>
      <div className="flex-1">
        <div className="flex items-center">
          <span>{planet.sign}</span>
          {planet.isRetrograde && (
            <span className="ml-2 text-xs text-destructive">Retrograde</span>
          )}
        </div>
        <div className="text-xs text-muted-foreground">
          {planet.degree.toFixed(1)}°
        </div>
      </div>
    </div>
  );
};

const HouseRow = ({ house }: { house: { house: number; sign: string } }) => {
  return (
    <div className="flex items-center p-2 rounded-lg hover:bg-muted/30 transition-colors">
      <div className="w-24 font-medium">House {house.house}</div>
      <div className="flex-1">
        <div>{house.sign}</div>
      </div>
    </div>
  );
};

export default BirthChart;
