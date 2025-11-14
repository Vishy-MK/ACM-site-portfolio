import React, { useState, useEffect, useCallback } from "react";
import AnnouncementItem from "../components/AnnouncementItem";
import AnnouncementModal from "../components/AnnouncementModal";
import AddAnnouncement from "../components/addAnnouncement"; 
import { Plus, Loader2 } from "lucide-react";
import axios from "axios";

function Announcements() {
  const [resp, setResp] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [isAddAnnouncementOpen, setIsAddAnnouncementOpen] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 
  }, []);
  useEffect(() => {
    async function getData() {
      try {
        const data = await axios.get(
          "https://acm-website-server.onrender.com/announcements"
        );
        setResp(data.data);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedAnnouncement(null);
  }, []);

  const handleItemClick = useCallback((ann) => {
    setSelectedAnnouncement(ann);
  }, []);

  const handleOpenAddAnnouncement = () => {
    setIsAddAnnouncementOpen(true);
  };

  const handleCloseAddAnnouncement = () => {
    setIsAddAnnouncementOpen(false);
  };

  useEffect(() => {
    document.title = "Announcements | ACM Manipal";
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-3/4 px-8 mt-10 mb-20">
        <div className="flex items-center mt-4 justify-center w-full">
          <hr className="border-t-2 border-gray-500 my-4 w-full" />
          <div className="md:text-5xl font-righteous text-4xl font-extrabold text-center mb-4 px-5">
            Announcements
          </div>
          <hr className="border-t-2 border-gray-500 my-4 w-full" />
        </div>

        {isLoggedIn ? (
          <button
            className="relative flex items-center gap-2 px-6 py-3 font-semibold text-white 
          bg-gradient-to-r from-[#0076CE] to-[#00AEEF] rounded-xl shadow-md transition-all 
          duration-200 hover:shadow-lg hover:scale-105 active:scale-95 
          before:absolute before:inset-0 mb-4"
            onClick={handleOpenAddAnnouncement}
          >
            <Plus size={30} strokeWidth={4} />
            <span>ANNOUNCEMENT</span>
          </button>
        ) : (
          void 0
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resp.length > 0 ? (
            resp
              .slice()
              .reverse()
              .map((ann) => (
                <AnnouncementItem
                  key={ann._id}
                  id={ann._id}
                  onClick={() => handleItemClick(ann)}
                  type={ann.type}
                  date={ann.date}
                  title={ann.title}
                />
              ))
          ) : (
            <div className="flex items-center gap-2 justify-center">
              <Loader2 className="animate-spin text-blue-500" size={40} />
              <span className="text-2xl">Loading...</span>
            </div>
          )}
        </div>
      </div>

      
      {selectedAnnouncement && (
        <AnnouncementModal
          announcement={selectedAnnouncement}
          onClose={handleCloseModal}
        />
      )}

      
      {isAddAnnouncementOpen && (
        <AddAnnouncement onClose={handleCloseAddAnnouncement} />
      )}
    </div>
  );
}

export default Announcements;
