import React from "react";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import axios from 'axios'
function AnnouncementItem({ onClick, type, date, title, id }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 
  }, []);

  const typeColors = {
    Webdev: "yellow-500",
    AppDev: "green-500",
    AIML: "purple-500",
    Design: "pink-500",
    Coding: "teal-500",
    Research: "orange-500",
  };
  const bgColors = {
    Webdev: "yellow-50",
    AppDev: "green-50",
    AIML: "purple-50",
    Design: "pink-50",
    Coding: "teal-50",
    Research: "orange-50",
  }

  return (
    <div
      className={`bg-${bgColors[type]} relative text-gray-800 p-6 rounded-2xl w-full cursor-pointer 
                  hover:shadow-lg hover:bg-gray-300 transition-all border 
                  border-${typeColors[type] || "gray-500"}`}
      onClick={onClick}
    >
      <span className={`bg-${typeColors[type]} text-white px-3 py-1 rounded-full text-sm font-bold`}>
        {type}
      </span>
      {isLoggedIn ? (
        <button
          className="rounded-full z-50 absolute px-2 py-2 top-3 right-3 text-gray-500 hover:text-red-600 hover:bg-red-200"
          onClick={async (e) => {
            e.stopPropagation();
            const token = localStorage.getItem("token");
            try {
              if (confirm("Your Announcement Will be deleted. Proceed?")) {
                const del = await axios.delete("https://acm-website-server.onrender.com/announcements/delete", {
                  data: { id },
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                console.log("id is lol " + id)
                console.log(del.data)
                window.location.reload();
              }
              else void 0;
            } catch (err) {
              console.log(err)
              alert("There was an error.frontend")
            }
          }}
          aria-label="Close"
        >
          <Trash2 size={20} strokeWidth={2} />
        </button>

      ) : void 0}
      <span className="ml-2 text-gray-500">• {date}</span>
      <h3 className="text-lg font-bold mt-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">Click to view details</p>
    </div>
  );
}

export default AnnouncementItem;
