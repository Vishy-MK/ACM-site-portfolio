import React, { useEffect, useRef, useState } from "react";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import gsap from "gsap";
import {
  Bot,
  FileCode,
  Microscope,
  Smartphone,
  Palette as PaletteIcon,
  Code,
} from "lucide-react";
import LandingPage from "./LandingPage";


const TheAnimation = () => {
  const [showLoader, setShowLoader] = useState(true);
  const spanRef = useRef(null);

  useEffect(() => {
    
    try {
      window.dispatchEvent(new Event("landingAnimationStart"));
    } catch (e) {
      
    }
    
    try {
      document.body.style.overflow = "hidden";
    } catch (e) {
      
    }
    gsap.registerPlugin(Physics2DPlugin);
    const el = spanRef.current;

    if (el) {
      const tl = gsap.timeline({
        onComplete: () => {
          
          gsap.to(".loader-container", {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
              
              try {
                document.body.style.overflow = "";
              } catch (e) {}
              setShowLoader(false);
              
              try {
                window.dispatchEvent(new Event("landingAnimationComplete"));
              } catch (e) {
                
              }
            },
          });
        },
      });

      tl.fromTo(
        el,
        { fontSize: "15rem", opacity: 0, y: 100 },
        {
          fontSize: "8rem",
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        }
      )
        .to(
          el,
          {
            scale: 1.1,
            rotate: 5,
            duration: 0.3,
            ease: "power1.out",
          },
          "+=0.2"
        )
        .to(
          el,
          {
            scale: 1,
            rotate: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)",
          },
          "+=0.1"
        )
        .to(
          ".manipal-chap-loader", 
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .add(() => {
          const domains = [
            "AI-ML",
            "Coding",
            "WebDev",
            "Research",
            "AppDev",
            "Design",
          ];
          domains.forEach((domName) => {
            gsap.to(`.${domName}`, {
              opacity: 1,
              duration: 1.5,
              physics2D: {
                velocity: gsap.utils.random(500, 700),
                angle: gsap.utils.random(220, 320),
                gravity: 1000,
              },
              ease: "power1.out",
            });
          });
        }, "-=1");
    }
  }, []);

  const domains = [
    { name: "AI-ML", Icon: <Bot size={70} className="text-purple-500" /> },
    { name: "Coding", Icon: <Code size={70} className="text-teal-500" /> },
    {
      name: "WebDev",
      Icon: <FileCode size={70} className="text-yellow-500" />,
    },
    {
      name: "Research",
      Icon: <Microscope size={70} className="text-orange-500" />,
    },
    {
      name: "AppDev",
      Icon: <Smartphone size={70} className="text-green-500" />,
    },
    {
      name: "Design",
      Icon: <PaletteIcon size={70} className="text-pink-500" />,
    },
  ];

  return (
    <>
      {showLoader ? (
        <div className="loader-container fixed inset-0 overflow-hidden bg-white">
          <div className="domains-container">
            {domains.map((dom, idx) => (
              <div
                className={`${dom.name} absolute left-1/2 top-1/2 z-50 -translate-x-1/2 flex justify-center items-center -translate-y-1/2 opacity-0`}
                key={idx}
              >
                {dom.Icon}
              </div>
            ))}
          </div>
          <div className="fixed flex-col z-30 inset-0 flex justify-center items-center">
            <div
              className="font-righteous flex flex-col cursor-default"
              ref={spanRef}
            >
              <div>ACM</div>
            </div>
            <div className="manipal-chap-loader text-4xl justify-center items-center flex gap-2 opacity-0 -translate-y-4">
              <div className="text-5xl text-yellow-700 font-semibold">
                {"{"}
              </div>
              <div className="font-righteous">Manipal Chapter</div>
              <div className="text-5xl font-semibold text-yellow-700">
                {"}"}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LandingPage />
      )}
    </>
  );
};

const LandingPageAnimation = () => {
  return (
    <div>
      <TheAnimation />
    </div>
  );
};

export default LandingPageAnimation;
