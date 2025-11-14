"use client";

import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, Navigate } from "react-router-dom";
import {
  Home,
  Code,
  Cpu,
  Layout,
  Smartphone,
  PenTool,
  BookMarkedIcon,
  Globe,
  Paintbrush,
  ChevronDown,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function RootLayoutResources() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const [exp, setExp] = useState(false);
  const [resname, setResName] = useState("Select Resource");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const resources = [
    { name: "Home", path: "/the-hub", icon: <Home />, color: "gray-50" },
    {
      name: "Coding",
      path: "/resources/coding",
      icon: <Code />,
      color: "teal-50",
    },
    {
      name: "AI & ML",
      path: "/resources/ai-ml",
      icon: <Cpu />,
      color: "purple-50",
    },
    {
      name: "WebDev",
      path: "/resources/webdev",
      icon: <Globe />,
      color: "yellow-50",
    },
    {
      name: "AppDev",
      path: "/resources/appdev",
      icon: <Smartphone />,
      color: "green-50",
    },
    {
      name: "Design",
      path: "/resources/design",
      icon: <Paintbrush />,
      color: "pink-50",
    },
    {
      name: "Research",
      path: "/resources/research",
      icon: <BookMarkedIcon />,
      color: "orange-50",
    },
  ];

  
  if (location.pathname === "/resources") {
    return <Navigate to="/resources/coding" />;
  }

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
          {resources.map((resource) => (
            <Link
              key={resource.name}
              to={resource.path}
              className={`flex items-center space-x-3 p-2 rounded-full transition hover:bg-gray-300 hover:scale-105 active:scale-95 duration-200`}
            >
              <span className="flex gap-2 font-righteous">
                {resource.icon}
                {exp === true && resource.name}
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
