"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card_p";
import { FadeIn, ScaleIn, HoverScale } from "@/components/motion";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Palette as PaletteIcon, 
  Microscope,
  Smartphone,
  GlobeIcon,
  Code,
  Laptop,
  Brain,
  FileText,
  Paintbrush,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home | ACM Manipal";
  }, []);

  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentMode, setCurrentMode] = useState("domains");
  const [direction, setDirection] = useState(0);

  const domains = [
    {
      title: "Coding",
      description: "Competitive programming, algorithms, and data structures.",
      path: "/domains/coding",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
      gradient: "from-blue-400 to-cyan-300",
      icon: <Laptop className="h-6 w-6 text-blue-600" />, 
    },
    {
      title: "AI and ML",
      description:
        "Dive into Artificial Intelligence and Machine Learning projects.",
      path: "/domains/ai-ml",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
      gradient: "from-purple-400 to-pink-300",
      icon: <Brain className="h-6 w-6 text-purple-600" />, 
    },
    {
      title: "Research and Content",
      description:
        "Explore academic research, technical writing, and content creation.",
      path: "/domains/research",
      color: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-600",
      gradient: "from-green-400 to-emerald-300",
      icon: <FileText className="h-6 w-6 text-green-600" />, 
    },
    {
      title: "WebDev",
      description:
        "Master modern web development, front-end, and back-end design.",
      path: "/domains/webdev",
      color: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-600",
      gradient: "from-yellow-400 to-amber-300",
      icon: <GlobeIcon className="h-6 w-6 text-yellow-600" />, 
    },
    {
      title: "AppDev",
      description:
        "Build innovative mobile applications for various platforms.",
      path: "/domains/appdev",
      color: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-600",
      gradient: "from-red-400 to-orange-300",
      icon: <Smartphone className="h-6 w-6 text-red-600" />, 
    },
    {
      title: "Design",
      description:
        "Craft intuitive UI/UX experiences and striking graphic designs.",
      path: "/domains/design",
      color: "bg-pink-50",
      borderColor: "border-pink-200",
      textColor: "text-pink-600",
      gradient: "from-pink-400 to-rose-300",
      icon: <Paintbrush className="h-6 w-6 text-pink-600" />, 
    },
  ];

  const resources = [
    {
      title: "AI/ML Resources",
      description:
        "Find comprehensive tutorials, public datasets, and essential tools for AI & Machine Learning.",
      path: "/resources/ai-ml",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
      gradient: "from-purple-400 to-pink-300",
      icon: <Sparkles className="h-6 text-purple-600 w-6" />,
    },
    {
      title: "Coding Resources",
      description:
        "Access guides, competitive programming problem sets, and links to top coding platforms.",
      path: "/resources/coding",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
      gradient: "from-blue-400 to-cyan-300",
      icon: <Code className="h-6 text-blue-600 w-6" />,
    },
    {
      title: "WebDev Resources",
      description:
        "Discover modern frameworks, essential libraries, and best design principles for web development.",
      path: "/resources/webdev",
      color: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-600",
      gradient: "from-yellow-400 to-amber-300",
      icon: <GlobeIcon className="h-6 text-yellow-600 w-6" />,
    },
    {
      title: "AppDev Resources",
      description:
        "Explore SDKs, UI kits, and detailed development guides for building innovative mobile applications.",
      path: "/resources/appdev",
      color: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-600",
      gradient: "from-red-400 to-orange-300",
      icon: <Smartphone className="h-6 text-red-600 w-6" />,
    },
    {
      title: "Design Resources",
      description:
        "Find tools, creative inspiration, and core principles for outstanding UI/UX and graphic design.",
      path: "/resources/design",
      color: "bg-pink-50",
      borderColor: "border-pink-200",
      textColor: "text-pink-600",
      gradient: "from-pink-400 to-rose-300",
      icon: <PaletteIcon className="h-6 text-pink-600 w-6" />,
    },
    {
      title: "Research Resources",
      description:
        "Access academic papers, guides for technical writing, and tools for data analysis and visualization.",
      path: "/resources/research",
      color: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-600",
      gradient: "from-green-400 to-emerald-300",
      icon: <Microscope className="h-6 text-green-600 w-6" />,
    },
  ].sort((a, b) => a.title.localeCompare(b.title));

  const contentVariants = {
    initial: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    }),
  };

  const toggleMode = () => {
    setDirection(currentMode === "domains" ? 1 : -1);
    setCurrentMode((prevMode) =>
      prevMode === "domains" ? "resources" : "domains"
    );
  };

  const displayedItems = currentMode === "domains" ? domains : resources;
  const currentTitle =
    currentMode === "domains" ? "Our Domains" : "Valuable Resources";
  const nextModeText =
    currentMode === "domains" ? "View Resources" : "View Domains";

  return (
    <div className="container mx-auto py-12 px-4 bg-white/40 min-h-screen">
      <ScaleIn>
        <div className="text-center mb-12 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 font-righteous">
            ACM Manipal
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
            <p className="text-xl text-gray-600">
              Explore our club's offerings and valuable knowledge!
            </p>
            <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </ScaleIn>

      
      <div className="text-center mb-8">
        <Button
          onClick={toggleMode}
          className="bg-gradient-to-r text-center from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl group flex items-center justify-between mx-auto" 
        >
          {currentMode === "domains" ? ( 
            <>
              <span>{nextModeText}</span>
              <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </>
          ) : (
            <>
              <ArrowLeft className="h-5 w-5 transform transition-transform group-hover:-translate-x-1" />
              <span>{nextModeText}</span>
            </>
          )}
        </Button>
      </div>

      
      <section className="relative overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 font-righteous">
          {currentTitle}
        </h2>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentMode}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={item.path} className="block h-full">
                  <Card
                    className={`${item.color} border-2 relative overflow-hidden backdrop-blur-sm transition-all hover:shadow-lg cursor-pointer flex flex-col h-full`}
                    onMouseEnter={() => setHoveredItem(item.title)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        item.gradient
                      } opacity-0 transition-opacity duration-300 ${
                        hoveredItem === item.title ? "opacity-10" : ""
                      }`}
                    ></div>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        
                        <div className="text-2xl">{item.icon}</div>
                        <CardTitle
                          className={`${item.textColor} font-righteous`}
                        >
                          {item.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="flex-grow min-h-[4rem]">
                        <div className="text-left"> {item.description}</div>
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      <Button className="w-full group bg-transparent text-black">
                        <span className="mr-2">Explore {item.title}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
