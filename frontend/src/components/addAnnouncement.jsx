import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  ChevronUp,
  LucideCalendarCheck,
} from "lucide-react";
import { Trash2, CheckCircle2Icon } from "lucide-react";
import ReactQuill from "react-quill";
import axios from "axios";
import "react-quill/dist/quill.snow.css";

function AddAnnouncement({ onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const [optionType, setOptionType] = useState("");
  const dropdownRef = useRef(null); 

  const toggleDropdown = () => setOpen(!open);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  async function sendAnnouncement() {
    if (!title.trim()) {
      alert("Title cannot be empty!");
      return;
    }
    if (!content.trim()) {
      alert("Content cannot be empty!");
      return;
    }

    if (confirm(`Title: ${title}\n And Please check your content.`)) {
      const date = new Date(Date.now());
      const formattedDate = date.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
      });
      if (optionType === "Select Option") {
        alert("Please enter type ");
        return;
      } else void 0;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://acm-website-server.onrender.com/announcements/create",
          {
            title: title,
            date: formattedDate,
            type: optionType,
            body: content,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        alert("Announcement created successfully!");
      } catch (error) {
        console.log(error);
      }
      onClose();
    } else {
      alert("Cancelled");
    }
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-announcement-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-4/5 h-4/5 bg-white p-6 rounded-2xl shadow-lg relative border-4 border-blue-500"
      >
        <button
          className="bg-gray-100 rounded-full absolute px-2 py-2 top-4 right-4 text-gray-500 hover:text-red-600 hover:bg-red-200"
          onClick={() => {
            if (title.trim() === "" && content.trim() === "") onClose();
            else
              confirm("Your Announcement will not be saved. Proceed?")
                ? onClose()
                : void 0;
          }}
          aria-label="Close"
        >
          <Trash2 size={24} strokeWidth={2} />
        </button>

        <div
          ref={dropdownRef}
          className="rounded-full absolute px-2 py-2 top-2 right-16 text-gray-500"
        >
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0076CE] to-[#00AEEF] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            {optionType || "Select Option"}{" "}
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {open && (
            <div className="absolute mt-2 w-48 z-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden animate-fadeIn">
              <ul className="text-gray-700">
                <li
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-all"
                  onClick={() => setOptionType("Webdev")}
                >
                  Webdev
                </li>
                <li
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-all"
                  onClick={() => setOptionType("AppDev")}
                >
                  AppDev
                </li>
                <li
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-all"
                  onClick={() => setOptionType("Research")}
                >
                  Research
                </li>
                <li
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-all"
                  onClick={() => setOptionType("AIML")}
                >
                  AIML
                </li>
                <li
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-all"
                  onClick={() => setOptionType("Design")}
                >
                  Design
                </li>
                <li
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-all"
                  onClick={() => setOptionType("Coding")}
                >
                  Coding
                </li>
              </ul>
            </div>
          )}
        </div>

        <h2 id="add-announcement-title" className="text-3xl font-bold mb-4">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-3xl font-extrabold justify-center text-center focus:border-none max-w-full"
          />
        </h2>
        <div className="message-content">
          <ReactQuill
            placeholder="Write your announcement here"
            value={content}
            onChange={setContent}
          />
        </div>
        <button
          className="absolute bottom-4 right-4 text-white
            flex items-center gap-2 px-6 py-3 font-semibold
            bg-gradient-to-r from-[#0076CE] to-[#00AEEF] rounded-xl shadow-md transition-all 
            duration-200 hover:shadow-lg hover:scale-105 active:scale-95 
            before:absolute before:inset-0 mb-4"
          aria-label="Submit"
          onClick={async () => {
            if (confirm("You are going to make this announcement. Okay?")) {
              await sendAnnouncement();
              onClose();
              window.location.reload();
            } else void 0;
          }}
        >
          <LucideCalendarCheck />
          <span>MAKE ANNOUNCEMENT</span>
        </button>
      </motion.div>
    </div>
  );
}

export default AddAnnouncement;
