"use client";
import {
  Code,
  Cpu,
  Globe,
  Smartphone,
  Paintbrush,
  BookMarkedIcon,
  ChevronDown,
  ChevronUp,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

function MobileResourceDropdown() {
  const [resname, setResName] = useState(
    location.pathname.startsWith("/domains") ? "Home" : "Coding"
  );
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const domainsNames = [
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

  const resourcesNames = [
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

  const resources = location.pathname.startsWith("/resources")
    ? resourcesNames
    : domainsNames;

  return (
    <div className="" ref={dropdownRef}>
      <div className="relative flex gap-2 justify-center  items-center">
        <span>Viewing :</span>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="bg-gray-200 border-2 border-blue-500 text-black p-1 rounded-lg shadow-lg flex items-center justify-center"
        >
          <span className="whitespace-nowrap font-medium">{resname}</span>
          {dropdownOpen ? (
            <ChevronUp strokeWidth={2} />
          ) : (
            <ChevronDown strokeWidth={2} />
          )}
        </button>
        {dropdownOpen && (
          <motion.div
            className=" overflow-y-auto absolute top-10 scale-0 left-0 right-0 z-50 bg-white shadow-lg w-40 rounded-lg border border-gray-200"
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <nav className="flex flex-col p-4 space-y-2">
              {resources.map((resource) => (
                <Link
                  key={resource.name}
                  to={resource.path}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-green-50 transition"
                  onClick={() => {
                    setDropdownOpen(false);
                    setResName(resource.name);
                  }} 
                >
                  <span>{resource.icon}</span>
                  <span>{resource.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default MobileResourceDropdown;
