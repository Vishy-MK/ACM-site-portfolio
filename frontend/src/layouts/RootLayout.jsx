"use client";

import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Home,
  Code,
  Cpu,
  Smartphone,
  BookMarkedIcon,
  Globe,
  Paintbrush,
  ChevronDown,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function RootLayout() {
  const [exp, setExp] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const domains = [
    { name: "Home", path: "/the-hub", icon: <Home />, color: "gray-50" },
    {
      name: "Coding",
      path: "/domains/coding",
      icon: <Code />,
      color: "bg-teal-50",
    },
    {
      name: "AI & ML",
      path: "/domains/ai-ml",
      icon: <Cpu />,
      color: "purple-50",
    },
    {
      name: "WebDev",
      path: "/domains/webdev",
      icon: <Globe />,
      color: "yellow-50",
    },
    {
      name: "AppDev",
      path: "/domains/appdev",
      icon: <Smartphone />,
      color: "green-50",
    },
    {
      name: "Design",
      path: "/domains/design",
      icon: <Paintbrush />,
      color: "pink-50",
    },
    {
      name: "Research",
      path: "/domains/research",
      icon: <BookMarkedIcon />,
      color: "orange-50",
    },
  ];

  return (
    <div className="flex mt-10">
      
      <motion.div
        layout
        onMouseEnter={() => setExp(true)}
        onMouseLeave={() => setExp(false)}
        transition={{ duration: 0.3, type: "spring" }}
        className={`hidden fixed z-30 md:flex bg-blue-50 border-2 border-blue-100 ml-5 h-96 mt-16 flex-col overflow-hidden px-4 py-4
        ${exp ? "rounded-2xl" : "rounded-full"}
        `}
      >
        <nav className="flex-1 space-y-3">
          {domains.map((domain) => (
            <Link
              key={domain.name}
              to={domain.path}
              className={`flex items-center space-x-3 p-2 rounded-full transition hover:bg-gray-300 hover:scale-105 active:scale-95 duration-200`}
            >
              <span className="flex gap-2 font-righteous">
                {domain.icon}
                {exp === true && domain.name}
              </span>
            </Link>
          ))}
        </nav>
      </motion.div>

      
      <div className="flex-1 bg-white">
        <main className="relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
