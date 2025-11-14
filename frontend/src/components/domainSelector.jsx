import { useState, useEffect } from "react";
import {
  Bot,
  Code,
  FileCode,
  Microscope,
  Smartphone,
  Palette as PaletteIcon,
} from "lucide-react";
import { Card } from "./ui/card";

export default function DomainSelector({ onSelect = () => {} }) {
  const domains = [
    { name: "AIML", color: "purple", Icon: Bot },
    { name: "Coding", color: "teal", Icon: Code },
    { name: "WebDev", color: "yellow", Icon: FileCode },
    { name: "Research", color: "orange", Icon: Microscope },
    { name: "AppDev", color: "green", Icon: Smartphone },
    { name: "Design", color: "pink", Icon: PaletteIcon },
  ];

  const colorCodes = {
    purple: "#6B21A8",
    teal: "#0D9488",
    yellow: "#CA8A04",
    orange: "#EA580C",
    green: "#16A34A",
    pink: "#DB2777",
  };

  const [selectedDomain, setSelectedDomain] = useState(domains[0].name); 

  
  useEffect(() => {
    onSelect(selectedDomain);
  }, []);

  return (
    <>
      
      <div className="block md:hidden w-full mb-2">
        <select
          className="w-full p-2 rounded-md border border-gray-300 bg-white font-righteous text-lg"
          value={selectedDomain}
          onChange={(e) => {
            setSelectedDomain(e.target.value);
            onSelect(e.target.value);
          }}
        >
          {domains.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="hidden md:block ">
        <Card className="py-2 bg-opacity-85 bg-white/80 backdrop-blur-lg">
          {domains.map(({ name, color, Icon }, i) => (
            <div
              key={i}
              className={`flex pl-4 pr-11 py-3 font-righteous items-center gap-3 rounded-md cursor-pointer transition
                ${
                  selectedDomain === name
                    ? "bg-white/90 bg-opacity-90"
                    : "hover:bg-gray-100/80"
                } active:opacity-70`}
              onClick={() => {
                setSelectedDomain(name);
                onSelect(name);
              }}
            >
              <Icon size={28} color={colorCodes[color]} />
              <span className="text-gray-800 font-medium">{name}</span>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
}
