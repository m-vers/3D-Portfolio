import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  artblog,
  artportfolio,
  exercise,
  threejs,
} from "../assets";

import Resume from '../assets/Mitchell-Baldwin-Resume.pdf'

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
    {
    id: "contact",
    title: "Contact",
  },
  {
    pdf: Resume,
    pdfTitle: "Resume",
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
];


const projects = [
  {
    name: "Art Portfolio",
    description:
      "Web-based art porfolio that uses that divides animation, design, and illustration via separate pages and projects.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: artportfolio,
    source_code_link: "https://github.com/m-vers/art-portfolio",
    site_link: "https://sarabaldwin-artportfolio.vercel.app/",
  },
  {
    name: "Art Blog",
    description:
      "Web application that enables users to update the art blog via a headless cms, Hygraph. The data is queried with GraphQL.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "graphCMS",
        color: "pink-text-gradient",
      },
    ],
    image: artblog,
    source_code_link: "https://github.com/m-vers/art-blog",
    site_link: "https://sarabaldwinblog.vercel.app/",
  },
  {
    name: "Exercise Program Builder",
    description:
      "Group project creating a comprehensive exercise platform that allows users to search for exercises and recieve information.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: exercise,
    source_code_link: "https://github.com/m-vers/Excercise-Program-Builder",
    site_link: "https://excercise-program-builder.vercel.app/",
  },
];

export { navLinks, technologies, projects };