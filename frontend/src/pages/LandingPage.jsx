import { useEffect, useRef, useState } from "react";
import "../landingpage.css"; 
import { DynamicIcon } from "lucide-react/dynamic";
import {
  HammerIcon,
  Settings,
  User,
  Bot,
  Code,
  FileCode,
  Microscope,
  Smartphone,
  Palette as PaletteIcon,
  Building2,
  ExternalLink,
} from "lucide-react";
import DomainSelector from "../components/domainSelector.jsx";
import { getDomains } from "../lib/domainsData.js";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
} from "../components/ui/card.js";
import { Link } from "react-router-dom";
import AboutUsSlides from "../components/AboutUsSlides.jsx";

gsap.registerPlugin(SplitText, ScrollTrigger);

const domains = [
  { name: "AI ML", color: "purple", Icon: Bot },
  { name: "Coding", color: "teal", Icon: Code },
  { name: "WebDev", color: "yellow", Icon: FileCode },
  { name: "Research", color: "orange", Icon: Microscope },
  { name: "AppDev", color: "green", Icon: Smartphone },
  { name: "Design", color: "pink", Icon: PaletteIcon },
];

const colorCodes = {
  purple: "#6B21A8",
  teal: "#0D9488",
  yellow: "#CA8A04",
  orange: "#EA580C",
  green: "#16A34A",
  pink: "#DB2777",
};

const lightGradients = {
  purple:
    "linear-gradient(315deg, rgba(233,213,255,0.8) 0%, rgba(255,255,255,1) 90%)",
  teal: "linear-gradient(315deg, rgba(204,251,241,0.8) 0%, rgba(255,255,255,1) 90%)",
  yellow:
    "linear-gradient(315deg, rgba(254,249,195,0.8) 0%, rgba(255,255,255,1) 90%)",
  orange:
    "linear-gradient(315deg, rgba(254,215,170,0.8) 0%, rgba(255,255,255,1) 90%)",
  green:
    "linear-gradient(315deg, rgba(187,247,208,0.8) 0%, rgba(255,255,255,1) 90%)",
  pink: "linear-gradient(315deg, rgba(251,207,232,0.8) 0%, rgba(255,255,255,1) 90%)",
};

function LandingPage() {
  useEffect(() => {
    document.title = "Home | ACM Manipal";
  }, []);

  const [domainName, setDomainName] = useState("AIML");
  const domainsData = getDomains();
  let colors =
    "bg-green-500 bg-orange-500 bg-pink-500 bg-teal-500 bg-yellow-500 bg-purple-500";
  const bodyRef = useRef(document.body);
  const myRef = useRef(null);

  const handleBarMouseEnter = (color) => {
    if (
      !bodyRef.current.style.background ||
      bodyRef.current.style.background !== lightGradients[color]
    ) {
      if (myRef.current) {
        myRef.current.classList.remove("open");
      }
      bodyRef.current.style.background = lightGradients[color];
    }
  };

  const domainKey = domainName.replace(" ", "").toUpperCase();
  const selectedDomain = domainsData[domainKey];

  const aboutUsTitleRef = useRef(null);
  const aboutUsCardRefs = useRef([]);
  const aboutUsSlidesRef = useRef(null);
  const domainsSectionTitleRef = useRef(null);
  const domainSelectorRef = useRef(null);
  const domainDetailCardRef = useRef(null);
  const resourcesSectionTitleRef = useRef(null);
  const resourcesCardRef = useRef(null);
  const announcementsSectionTitleRef = useRef(null);
  const announcementsCardRef = useRef(null);
  const knowUsSectionTitleRef = useRef(null);
  const knowUsCardRef = useRef(null);

  
  useEffect(() => {
    
    let ctx = gsap.context(() => {
      
      const acmHeadSplit = SplitText.create("#acm-head", { type: "words" });
      const manipalHeadSplit = SplitText.create("#manipal-head", {
        type: "words",
      });
      const paraHeadSplit = SplitText.create("#para-head", { type: "lines" });

      
      gsap.set(acmHeadSplit.words, { y: 100, autoAlpha: 0 });
      gsap.set("#bars", { y: 100, autoAlpha: 0 });
      gsap.set(manipalHeadSplit.words, { y: 100, autoAlpha: 0 });
      gsap.set(".expl-card", { y: 100, autoAlpha: 0 });
      gsap.set(paraHeadSplit.lines, { autoAlpha: 0 });
      gsap.set(".info-2", { y: 100, autoAlpha: 0 });

      
      gsap
        .timeline()
        .to(acmHeadSplit.words, {
          duration: 0.4,
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          ease: "power2.out",
        })
        .to(
          "#bars",
          {
            duration: 0.4,
            y: 0,
            autoAlpha: 1,
            stagger: 0.05,
            ease: "power2.out",
          },
          "<"
        )
        .to(manipalHeadSplit.words, {
          duration: 0.4,
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          ease: "power2.out",
        })
        .to(".expl-card", {
          duration: 0.5,
          y: 0,
          autoAlpha: 1,
          ease: "power2.out",
        })
        .to(paraHeadSplit.lines, {
          duration: 0.3,
          autoAlpha: 1,
          stagger: 0.1,
          ease: "power1.inOut",
        })
        .to(".info-2", {
          duration: 0.4,
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          ease: "power2.out",
        });
    });

    
    return () => ctx.revert();
  }, []);

  return (
    
    <div id="landingPage" className="overflow-clip relative right-0">
      <div id="bars" className="landingChild md:block right-0 absolute">
        <div id="domainBars" ref={myRef} className="open ">
          {domains.map(({ name, color, Icon }) => (
            <Link
              to={`/domains/${name.replace(" ", "-").toLowerCase()}`}
              key={name}
            >
              <div
                onMouseEnter={() => handleBarMouseEnter(color)}
                className={`mainBar bg-${color}-500`}
              >
                <div className={`bar bg-${color}-500`}></div>
                <div className={`barText bg-${color}-500 md:bg-white`}>
                  <div className="barContent hidden md:block">
                    <Icon size={40} color={colorCodes[color]} />
                    <div className={`text-${color}-800 font-bold`}>{name}</div>
                  </div>
                </div>
                <div className={`bar bg-${color}-500`}></div>
                <div className={`barExt bg-${color}-500`}></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={colors}></div>
      <div id="landingMain">
        <div id="landingText" className="landingChild text-left">
          <div className="main-text">
            <div className="text-[7rem] font-[700]">
              <div
                id="acm-head"
                className="font-righteous w-screen md:w-auto text-center md:text-left md:mx-16"
              >
                ACM
              </div>
              <div
                id="manipal-head"
                className="manipal-chap md:text-[4rem] text-[2.5rem] md:mx-4 -mt-8 md:text-left text-center w-screen md:w-auto mb-8 justify-center md:justify-start items-center flex gap-2"
              >
                <div className="md:text-[5rem] text-yellow-700 font-semibold">
                  {"{"}
                </div>
                <div className="font-righteous whitespace-nowrap">
                  Manipal Chapter
                </div>
                <div className="md:text-[5rem] font-semibold text-yellow-700">
                  {"}"}
                </div>
              </div>
            </div>
            <div className="flex justify-center w-screen md:w-auto md:block">
              <Card className="md:mx-8 md:w-[50vw] px-4 shadow-lg bg-white/80 backdrop-blur-lg relative expl-card">
                <div
                  id="para-head"
                  className="font-bold p-4 text-2xl md:w-[50vw]"
                >
                  The official student chapter of the
                  <p id="asso" className="text-blue-900">
                    Association for Computing Machinery
                  </p>
                  <p className="flex items-center gap-2">
                    at <Building2 /> MIT, Manipal.
                  </p>
                </div>
              </Card>
            </div>
          </div>
          <div className="more-text md:w-[80vw] justify-center md:text-2xl text-xl mt-8 pl-3 block sm:m-5 gap-[1rem]">
            <Card className="mb-6 md:m-0 md:w-[50vw] md:ml-3 mx-4 md:mx-0 p-6 info-2 font-semibold shadow-lg bg-white/80 backdrop-blur-lg">
              <p>
                We are a community of passionate individuals dedicated to
                advancing computing as a science and profession.
              </p>
            </Card>
            <Card className="md:w-[50vw] mt-5 info-2 mx-4 md:mx-0 p-6 font-semibold shadow-lg bg-white/80 backdrop-blur-lg">
              <p>
                Our chapter fosters innovation, collaboration, and learning
                through workshops, hackathons, and research initiatives.
              </p>
            </Card>
          </div>
        </div>
      </div>
      
      <div id="aboutUs" className="pt-12 section">
        <div className="relative">
          <h1
            ref={aboutUsTitleRef}
            className="md:text-left text-left mx-4 md:text-[5rem] text-[3rem] md:mx-16 font-righteous"
          >
            About Us
          </h1>
        </div>
        <div id="aboutUsContent" className="font-semibold text-xl px-10">
          <div className="aboutUsCards grid grid-cols-1 ">
            <div className="grid justify-items-center align-middle md:grid-cols-2">
              <Card
                ref={(el) => (aboutUsCardRefs.current[0] = el)}
                className="shadow-lg bg-opacity-75 bg-white/80 md:m-4 relative backdrop-blur-lg pb-7"
              >
                <div className="pin bg-pink-200/60">
                  <User />
                </div>
                <CardTitle className="py-4 font-extrabold flex gap-2 items-center text-left mx-8 md:text-3xl text-2xl">
                  People
                </CardTitle>
                <p className="text-left md:text-xl text-sm mx-8">
                  We’re a friendly bunch of tech lovers, creators, and
                  problem-solvers. Everyone brings something unique to the
                  table!
                </p>
              </Card>
              <Card
                ref={(el) => (aboutUsCardRefs.current[1] = el)}
                className="shadow-lg bg-opacity-75 md:m-4 mt-4 relative bg-white/80 backdrop-blur-lg pb-7 transparentCard"
              >
                <CardTitle className="py-4 font-extrabold flex gap-2 items-center text-left mx-8 md:text-3xl text-xl">
                  <div className="pin bg-blue-200/60">
                    <Settings />
                  </div>
                  Technology & Design
                </CardTitle>
                <p className="text-left md:text-xl text-sm mx-8">
                  We blend tech and design to build things that work well and
                  look great. Simple, smart, and user-friendly!
                </p>
              </Card>
            </div>
            <div className="md:px-[15vw] w-full place-items-center">
              <Card
                ref={(el) => (aboutUsCardRefs.current[2] = el)}
                className="shadow-lg md:m-8 mt-8 bg-white/80 relative backdrop-blur-lg md:mx-auto"
              >
                <div className="pin bg-green-200">
                  <HammerIcon />
                </div>
                <CardTitle className="font-extrabold flex gap-2 items-center text-left m-4 mx-8 md:text-3xl text-xl">
                  Innovation
                </CardTitle>
                <CardContent>
                  <p className="text-left md:text-xl text-sm mx-4">
                    Innovation is our habit. Got a wild idea or want to build
                    something cool? You’ll find the support and tools here.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="relative my-4" ref={aboutUsSlidesRef}>
              <AboutUsSlides />
            </div>
          </div>
        </div>
      </div>
      
      <div id="domains" className="w-screen section">
        <div className="relative md:mx-16 mx-4">
          <h1
            ref={domainsSectionTitleRef}
            className="text-left font-righteous md:text-[5rem] text-[3rem]"
          >
            Domains
          </h1>
        </div>
        <div id="aboutUsContent" className="mx-8">
          <div className="md:flex gap-2">
            <div className="mt-8" ref={domainSelectorRef}>
              <DomainSelector onSelect={setDomainName} />
            </div>
            <Card
              ref={domainDetailCardRef}
              className="shadow-lg py-5 my-8 w-full px-4 bg-white/75 backdrop-blur-lg"
            >
              <CardHeader>
                <CardTitle
                  className="text-center flex font-righteous text-3xl font-bold justify-center items-center gap-2"
                  style={{
                    color: selectedDomain
                      ? colorCodes[selectedDomain.color]
                      : "gray",
                  }}
                >
                  {selectedDomain ? selectedDomain.name : "Select a Domain"}
                  <Link
                    to={`/domains${selectedDomain ? selectedDomain.link : ""}`}
                  >
                    <div className="p-1 rounded-sm hover:bg-gray-200 hover:scale-105 duration-300 cursor-pointer">
                      <ExternalLink className="" onClick={() => {}} size={28} />
                    </div>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">{selectedDomain?.desc}</p>
                <div className="flex justify-center items-center mt-8">
                  <div className="grid md:grid-cols-3 justify-items-center grid-cols-1 gap-6 w-full">
                    {selectedDomain?.icons.map(({ icon, title }, index) => (
                      <div
                        key={index}
                        className={`flex w-1/3 rounded-lg px-32 py-4 hover:bg-gray-200 duration-300 flex-col items-center`}
                      >
                        <div className="text-4xl mb-2">
                          <div className="bg-white p-3 rounded-full shadow-sm">
                            <DynamicIcon
                              style={{
                                color: colorCodes[selectedDomain.color],
                              }}
                              size={30}
                              name={icon}
                            ></DynamicIcon>
                          </div>
                        </div>
                        <div className="text-center whitespace-nowrap font-medium ">
                          {title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div id="resources" className="w-screen my-12 section">
        <div className="relative mx-4 md:mx-16">
          <h1
            ref={resourcesSectionTitleRef}
            className="text-left font-righteous md:text-[5rem] text-[3rem]"
          >
            Resources
          </h1>
        </div>
        <div className="flex justify-center items-center w-full mt-4">
          <Card
            ref={resourcesCardRef}
            className="shadow-lg p-4 bg-white/80 backdrop-blur-lg md:mx-16 mx-2 flex flex-col items-center"
          >
            <CardHeader className="w-full">
              <CardTitle className="text-left text-3xl font-extrabold">
                Explore Our Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-left text-lg font-semibold mb-6">
                Access curated learning materials, guides, and tools to help you
                grow in every domain of computing. Whether you're a beginner or
                an expert, our resources are here to support your journey.
              </p>
              <Link to="/resources">
                <div className="p-2 w-20 font-bold flex gap-2 justify-center items-center rounded-sm bg-gray-200 hover:bg-gray-300">
                  <span className="hidden md:block">Go</span>
                  <ExternalLink />
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div id="announcements" className="w-screen my-12 section">
        <div className="relative md:mx-16 mx-4">
          <h1
            ref={announcementsSectionTitleRef}
            className="text-left font-righteous md:text-[5rem] text-[3rem]"
          >
            Announcements
          </h1>
        </div>
        <div className="flex justify-center items-center w-full mt-4">
          <Card
            ref={announcementsCardRef}
            className="shadow-lg p-4 bg-white/80 backdrop-blur-lg md:mx-16 mx-2 flex flex-col items-center"
          >
            <CardHeader className="w-full">
              <CardTitle className="text-left text-3xl font-extrabold">
                Check it out!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-left text-lg font-semibold mb-6">
                Stay up to date with the latest news, events, and updates from
                ACM Manipal. Don’t miss out on important announcements and
                opportunities!
              </p>
              <Link to="/announcements">
                <div className="p-2 w-[20%] font-bold whitespace-nowrap flex gap-2 justify-center items-center rounded-sm bg-gray-200 hover:bg-gray-300">
                  <span className="hidden md:block">View Announcements</span>
                  <ExternalLink />
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div id="knowus" className="w-screen my-12 section">
        <div className="relative md:mx-16 mx-4">
          <h1
            ref={knowUsSectionTitleRef}
            className="text-left font-righteous md:text-[5rem] text-[3rem]"
          >
            Know Us
          </h1>
        </div>
        <div className="flex justify-center items-center w-full mt-4">
          <Card
            ref={knowUsCardRef}
            className="shadow-lg p-4 bg-white/80 backdrop-blur-lg md:mx-16 mx-2 flex flex-col items-center"
          >
            <CardHeader className="w-full">
              <CardTitle className="text-left text-3xl font-extrabold">
                Get to Know Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-left text-lg font-semibold mb-6">
                Learn more about our mission, vision, and the passionate people
                behind ACM Manipal. Discover what makes our chapter unique and
                how you can be a part of it.
              </p>
              <Link to="/know-us">
                <div className="p-2 font-bold w-[12%] whitespace-nowrap flex gap-2 justify-center items-center rounded-sm bg-gray-200 hover:bg-gray-300">
                  <span className="hidden md:block">Know Us</span>
                  <ExternalLink />
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
