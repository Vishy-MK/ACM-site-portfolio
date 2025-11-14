import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


const committeeMembers2024 = [
  {
    id: 1,
    name: "Morvin Prajapati",
    role: "Chair person",
    photo: "/morvin.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/morvin-prajapati",
      github: "https://github.com/morvinp",
    },
  },
  {
    id: 2,
    name: "Tanish Sunilkumar",
    role: "Vice Chairman",
    photo: "/tanish.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/tanishsunilkumar/",
      github: "https://github.com/t-sunk",
    },
  },
  {
    id: 3,
    name: "Prisha Singh",
    role: "Membership Chair",
    photo: "/prisha.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/prisha-singh-083439255",
      github: "https://github.com/prisha27",
    },
  },
  {
    id: 6,
    name: "Manas Gupta",
    role: "HR/PR Head",
    photo: "/manas.jpeg",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/meetmanas?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "#",
    },
  },
];

const domainHeads2024 = [
  {
    id: 1,
    name: "Srihari Srinivasan",
    role: "AIML Domain Head",
    photo: "/srihari.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/srihari-srini/",
      github: "https://github.com/speedwagon1299",
    },
  },
  {
    id: 2,
    name: "Sahil Natikar",
    role: "Webdev Domain Head",
    photo: "/sahil.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/sahil-natikar-8730b4294/",
      github: "https://github.com/nsxhil",
    },
  },
  {
    id: 3,
    name: "Subham Chakraborty",
    role: "Coding Head",
    photo: "/shubam.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/subhamchakraborty2006/",
      github: "https://github.com/sboltnotfound",
    },
  },
  {
    id: 4,
    name: "Aashna Baheti",
    role: "Design Head",
    photo: "/aashna2.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/aashnabaheti/",
      github: "https://github.com/aashnabaheti",
    },
  },
  {
    id: 5,
    name: "Hardik Garg",
    role: "AppDev Head",
    photo: "/hardik.jpeg",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/hardikgarg-999-x?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/GhouLsus",
    },
  },
  {
    id: 6,
    name: "Nitant Vaidya",
    role: "Research and Content Head",
    photo: "/nitant.jpeg",
    socials: {
      linkedin: "www.linkedin.com/in/nitant-vaidya-29jun2004",
      github: "https://github.com/Nitantv",
    },
  },
];

const websiteBuilders2024 = [
  {
    id: 1,
    name: "Vishal Kumar",
    role: "Frontend/Backend",
    photo: "vishal.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/vishal-kumar-24bb23317/",
      github: "https://github.com/Vishy-MK",
    },
  },
  {
    id: 2,
    name: "Abaan Shanid",
    role: "Frontend",
    photo: "/abaan.jpg",
    socials: {
      linkedin: "https://github.com/tomatopickle",
      github: "https://www.linkedin.com/in/abaan-shanid/",
    },
  },
  {
    id: 3,
    name: "Pravar Singh",
    role: "Frontend",
    photo: "/pravar.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/pravarsingh",
      github: "https://github.com/Pr3v3r",
    },
  },
  {
    id: 4,
    name: "Manas Goel",
    role: "Backend",
    photo: "/manasw.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/manas-goel-802293119/",
      github: "https://github.com/nullv0id2004",
    },
  },
];



const committeeMembers2025 = [
  {
    id: 100,
    name: "Subham Chakraborty",
    role: "Chairperson",
    photo: "/shubam.jpg",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: 101,
    name: "Manas Gupta",
    role: "Vice Chairperson",
    photo: "/manas.jpeg",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: 102,
    name: "Pranshu Singh",
    role: "General Secretary & Treasurer",
    photo: "/pranshu.png",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: 103,
    name: "Lakshya Agrawal",
    role: "Membership Chair",
    photo: "/laksya.png",
    socials: { linkedin: "#", github: "#" },
  },
];

const domainHeads2025 = [
  {
    id: 200,
    name: "Mrinal Dhami",
    role: "Head of AIML",
    photo: "/mrinal.png",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: 201,
    name: "Raghav Rau",
    role: "Head of Coding",
    photo: "/raghavendra.png",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: 202,
    name: "Vishal Kumar",
    role: "Head of Web Development",
    photo: "/vishy_updated.png",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: 203,
    name: "Lakshya Singhi",
    role: "Head of App Development",
    photo: "/laskhya2.png", 
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: 204,
    name: "Kaaviya Kalyanakumar",
    role: "Head of Social Media & Design",
    photo: "/kaaviya.png",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: 205,
    name: "Animesh Kumar",
    role: "Head of Content Writing & Research",
    photo: "/animesh.png",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: 104,
    name: "Aditi Jain",
    role: "Head of HR & PR",
    photo: "/aditi.png",
    socials: { linkedin: "#", github: "#" },
  },
];


const advisoryBoard2025 = [
  {
    id: 401,
    name: "Ridhima Verma",
    role: "Advisory Board Member",
    photo: "/ridhima.png",
    socials: { linkedin: "#", github: "#" },
  },
  {
    id: 402,
    name: "Sarayu Madakasira",
    role: "Advisory Board Member",
    photo: "/sarayu.png",
    socials: { linkedin: "#", github: "#" },
  },
];



function KnowUs() {
  useEffect(() => {
    document.title = "Know Us | ACM Manipal";
  }, []);

  const [selectedYear, setSelectedYear] = useState(2024);

  
  const renderMembers = (members, year) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
      {members.map((member) => (
        <Card
          key={member.id}
          className="bg-white/70 hover:scale-105 duration-300 backdrop-blur-lg shadow-lg flex flex-col items-center p-6"
        >
          <img
            src={member.photo}
            alt={member.name}
            className="w-24 h-24 rounded-full mb-3 border-4 border-blue-800 object-cover"
          />
          <CardHeader className="w-full p-0 mb-2">
            <CardTitle className="text-center text-blue-800 text-lg font-semibold">
              {member.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full p-0">
            <p className="text-center text-gray-700 mb-2">{member.role}</p>

            
            {year === 2024 ? (
              <div className="flex justify-center gap-4 mt-2">
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="g-nb.png"
                    alt="github"
                    className="rounded-full w-8 h-8 hover:scale-110 transition"
                  />
                </a>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="l-nb.png"
                    alt="linkedin"
                    className="rounded-full w-8 h-8 hover:scale-110 transition"
                  />
                </a>
              </div>
            ) : (
              
              
              <div className="h-12" />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );

  
  const renderBoardSections = (yearData, year) => (
    <div className="w-full flex-shrink-0">
      <section className="mb-16">
        
        <div className="flex items-center justify-center w-full mb-4">
          <hr className="border-t-2 border-gray-500 w-full" />
          <div className="text-3xl font-extrabold px-5 font-righteous whitespace-nowrap">
            Executive Board
          </div>
          <hr className="border-t-2 border-gray-500 w-full" />
        </div>
        {renderMembers(yearData.committee, year)}
      </section>

      <section className="mb-16">
        
        <div className="flex items-center justify-center w-full mb-6">
          <hr className="border-t-2 border-gray-500 w-full" />
          <div className="text-3xl font-extrabold px-5 font-righteous whitespace-nowrap">
            Domain Heads
          </div>
          <hr className="border-t-2 border-gray-500 w-full" />
        </div>
        {renderMembers(yearData.domainHeads, year)}
      </section>

      
      {yearData.websiteBuilders && (
        <section className="mb-16">
          
          <div className="flex items-center justify-center w-full mb-6">
            <hr className="border-t-2 border-gray-500 w-full" />
            <div className="text-3xl font-extrabold px-5 font-righteous whitespace-n-nowrap">
              Website Devs
            </div>
            <hr className="border-t-2 border-gray-500 w-full" />
          </div>
          {renderMembers(yearData.websiteBuilders, year)}
        </section>
      )}

      
      {yearData.advisoryBoard && (
        <section className="mb-16">
          <div className="flex items-center justify-center w-full mb-6">
            <hr className="border-t-2 border-gray-500 w-full" />
            <div className="text-3xl font-extrabold px-5 font-righteous whitespace-nowrap">
              Advisory Board
            </div>
            <hr className="border-t-2 border-gray-500 w-full" />
          </div>
          {renderMembers(yearData.advisoryBoard, year)}
        </section>
      )}
    </div>
  );

  return (
    <div className="p-5 bg-opacity-30 backdrop-blur-md z-30 min-h-screen">
      <h1 className="text-center text-blue-800 text-4xl font-bold mb-10 font-righteous">
        Meet Our Team!
      </h1>
      
      
      <div className="flex justify-center gap-3 mb-6">
        <button
          className={`px-4 py-2 rounded-md font-semibold ${
            selectedYear === 2024 ? "bg-blue-800 text-white" : "bg-white/60"
          }`}
          onClick={() => setSelectedYear(2024)}
        >
          2024 board
        </button>
        <button
          className={`px-4 py-2 rounded-md font-semibold ${
            selectedYear === 2025 ? "bg-blue-800 text-white" : "bg-white/60"
          }`}
          onClick={() => setSelectedYear(2025)}
        >
          2025 board
        </button>
      </div>

      
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(${selectedYear === 2024 ? "0%" : "-100%"})`,
          }}
        >
          
          {renderBoardSections(
            {
              committee: committeeMembers2024,
              domainHeads: domainHeads2024,
              websiteBuilders: websiteBuilders2024,
            },
            2024
          )}

          
          {renderBoardSections(
            {
              committee: committeeMembers2025,
              domainHeads: domainHeads2025,
              advisoryBoard: advisoryBoard2025,
              
            },
            2025
          )}
        </div>
      </div>
    </div>
  );
}

export default KnowUs;
