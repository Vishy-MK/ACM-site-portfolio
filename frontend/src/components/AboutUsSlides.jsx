import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const members = [
  {
    image: "/acmpic-1.jpg",
  },
  {
    image: "/acmpic-2.JPG",
  },
  {
    image: "/acmpic-3.JPG",
  },
  {
    image: "/acmpic-4.JPG",
  },
  {
    image: "/acmpic-5.JPG",
  },
];

const CARD_WIDTH = 260;
const CARD_GAP = 24;

function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

const AboutUsSlides = () => {
  const [main, setMain] = useState(0);
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH);

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth < 500) setCardWidth(180);
      else if (window.innerWidth < 800) setCardWidth(220);
      else setCardWidth(CARD_WIDTH);
    }, 100);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setMain((prev) => (prev - 1 + members.length) % members.length);
  };
  const handleNext = () => {
    setMain((prev) => (prev + 1) % members.length);
  };

  const getOffset = (idx) => {
    let offset = idx - main;
    if (offset > members.length / 2) offset -= members.length;
    if (offset < -members.length / 2) offset += members.length;
    return offset;
  };

  return (
    <div className="flex flex-col scale-110 items-center mt-10 w-full">
      <div className="w-full flex justify-center h-[5rem] mb-32">
        <div className="overflow-visible relative max-w-[95vw]">
          <div style={{ position: "relative" }}>
            {members.map((mem, idx) => {
              const offset = getOffset(idx);
              const scale = offset === 0 ? 1 : 0.95;
              const zIndex = 10 - Math.abs(offset);
              const opacity = Math.abs(offset) > 2 ? 0 : 1;
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{
                    x: offset * (cardWidth + CARD_GAP) * 0.6,
                    scale,
                    opacity,
                    zIndex,
                  }}
                  transition={{ type: "tween", duration: 0.25 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    width: cardWidth,
                    marginLeft: -cardWidth / 2,
                    pointerEvents: offset === 0 ? "auto" : "none",
                  }}
                  className="bg-white rounded-xl shadow-lg flex flex-col items-center py-2"
                >
                  <img
                    src={mem.image}
                    alt="Member"
                    className="rounded-xl object-cover border-4 border-blue-200"
                    style={{
                      width: cardWidth * 0.9,
                      height: cardWidth * 0.9,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-16 items-center">
        <div className="flex gap-2">
          {members.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                main === idx ? "bg-blue-500" : "bg-gray-300"
              }`}
              style={{ display: "inline-block" }}
            ></span>
          ))}
        </div>
        <div className="flex gap-6 mt-2">
          <button
            onClick={handlePrev}
            className="arrow left px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-bold text-lg hover:bg-blue-300 transition"
          >
            &#60;
          </button>
          <button
            onClick={handleNext}
            className="arrow right px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-bold text-lg hover:bg-blue-300 transition"
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSlides;
