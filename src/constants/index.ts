import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mantic,
  carrent,
  jobit,
  tripguide,
  threejs,
  sync,
  aicte,
  pantech,
  bluechip,
  bignation,

} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services: TService[] = [
  {
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "MernStack Intern",
    companyName: "Mantic Technology",
    icon: mantic,
    iconBg: "#383E56",
    date: "Aug 2023 - Dec 2023",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Develop a Responsive and Dynamic Indian Smart Traffic System (SITS) using the MERN stack. HTML, CSS, JS, Bootstrap, JQuery, React.JS, Node.JS, Express.JS, MongoDB, Git , API’s.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Python Student Intern",
    companyName: "Sync Intern's",
    icon: sync,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Apr 2023",
    points: [
      "Developing and maintaining Software applications using Python and other related technologies.",
      "URL Shortener in Python Using Tkinter and pyshorteners Python Libraries. Gmail OTP Verification using smptlib Libraries and Develop AI ChatBot Using Python.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AI-ML Virtual Internship Program",
    companyName: "AICTE | AWS Academy",
    icon: aicte,
    iconBg: "#383E56",
    date: "Dec 2022 - Feb 2023",
    points: [
      "AI-ML Virtual Internship organised by AICTE with the support of Amazon Web Services.",
      "Experienced in AI and ML concepts and algorithms along with Python programming.",
    ],
  },
  {
    title: "OpenCV Python Student Internship",
    companyName: "Pantech E-Learning",
    icon: pantech,
    iconBg: "#E6DEDD",
    date: "Nov 20222 - Dec-2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Python Training And Internship Program",
    companyName: "Blue Chip Computer Education",
    icon: bluechip,
    iconBg: "#383E56",
    date: "Jan 2022 - Apr 2023",
    points: [
      "Own PA Lady Jarvis, AI Banking System, Traffic Light Simulator, Mobile Number Tracer",
      "Tkinter, SQL, Numpy, Pandas, matplotlib, pyplot, SciKit-Learn, OpenCV, Django.",
      "Experienced in AI and ML concepts and algorithms along with Python programming.",
    ],
  },
  {
    title: "PHP Training and Internship Program",
    companyName: "Big Nation7 Infotech",
    icon: bignation,
    iconBg: "#E6DEDD",
    date: "Apr 2019 - Jul-2019",
    points: [
      "Developing and maintaining web applications using PHP and other related technologies.",
      "HTML, CSS, JS, Bootstrap, SQL, Database, PHP, XAMPP",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
