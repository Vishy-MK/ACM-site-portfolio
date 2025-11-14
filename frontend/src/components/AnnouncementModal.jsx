import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import DOMPurify from "dompurify"
function AnnouncementModal({ announcement, onClose }) {
  const typeColors = React.useMemo(() => ({
    Webdev: "yellow-500",
    AppDev: "green-500",
    AIML: "purple-500",
    Design: "pink-500",
    Coding: "teal-500",
    Research: "orange-500",
  }), []);

  const bgColors = React.useMemo(() => ({
    Webdev: "yellow-50",
    AppDev: "green-50",
    AIML: "purple-50",
    Design: "pink-50",
    Coding: "teal-50",
    Research: "orange-50",
  }), []);

  const handleClose = React.useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <motion.div
        style={{ willChange: "opacity, transform" }}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`w-[90vw] max-w-7xl h-auto max-h-[98vh] bg-${bgColors[announcement.type]} p-6 rounded-2xl shadow-lg relative border-4 border-${typeColors[announcement.type]}`}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
          onClick={handleClose}
        >
          <X size={24} strokeWidth={4} />
        </button>
        <div className="title">
          <h2 className="text-3xl font-bold mb-4">{announcement.title}</h2>
        </div>
        <div className="message-content text-left overflow-y-auto p-4 
        max-h-[500px] scrollbar-thin scrollbar-thumb-gray-400 
        scrollbar-track-gray-200
        hover:scrollbar-thumb-gray-500"
        dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(announcement.body)}}
        >
        </div>
      </motion.div>
    </div>
  );
}

export default React.memo(AnnouncementModal);
