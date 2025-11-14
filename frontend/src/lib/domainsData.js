const s = {
  AIML: {
    desc: "Explore the cutting-edge fields of Artificial Intelligence and Machine Learning with our dedicated domain",
    color: "purple",
    link: "/ai-ml",
    icons: [
      { icon: "brain", title: "Deep Learning" },
      { icon: "lightbulb", title: "Research and Innovation" },
      { icon: "database", title: "Data Science" },
    ],
  },
  APPDEV: {
    color: "green",
    desc: "Build innovative mobile applications for iOS and Android with our app development domain",
    link: "/appdev",
    icons: [
      { icon: "smartphone", title: "Cross-Platform Development" },
      { icon: "cpu", title: "Native Development" },
      { icon: "zap", title: "Performance Optimization" },
    ],
  },
  CODING: {
    color: "teal",
    desc: "Dive into the world of competitive programming, algorithms, and data structures with our coding ",
    link: "/coding",
    icons: [
      { icon: "code", title: "Competitive Programming" },
      { icon: "trophy", title: "Contests and Hackathons" },
      { icon: "users", title: "Peer Learning" },
    ],
  },
  DESIGN: {
    color: "pink",
    desc: "Create beautiful and functional designs with our UI/UX and graphic design ",
    link: "/design",
    icons: [
      { icon: "layout", title: "UI/UX Design" },
      { icon: "palette", title: "Graphic Design" },
      { icon: "pen-tool", title: "Design Systems" },
    ],
  },
  RESEARCH: {
    color: "orange",
    desc: "Explore academic research, technical writing, and content creation with our dedicated ",
    link: "/research",
    icons: [
      { icon: "book-open", title: "Academic Research" },
      { icon: "file-text", title: "Technical Writing" },
      { icon: "graduation-cap", title: "Mentorship" },
    ],
  },
  WEBDEV: {
    color: "yellow",
    desc: "Create modern, responsive, and accessible web applications with our web development ",
    link: "/webdev",
    icons: [
      { icon: "globe", title: "Frontend Development" },
      { icon: "server", title: "Backend Development" },
      { icon: "code", title: "Full-Stack Development" },
    ],
  },
};

export function getDomains() {
  return s;
}
