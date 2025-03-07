import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Higher education",
    location: "Kyiv, UA",
    description: [
      "<em>2016-2020.</em> <strong>Law</strong>, Bachelor's degree - Academy of Advocacy of Ukraine",
      "<em>2020-2022.</em> <strong>Law</strong>, Master's degree - Academy of Advocacy of Ukraine",
      "<em>2020-2022.</em> <strong>Computer science</strong>, Bachelor's degree - National Technical University of Ukraine 'Igor Sikorsky Kyiv Polytechnic Institute'",
      "<em>2022-2024.</em> <strong>Psychology</strong>, Master's degree - European University",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2016-2024",
  },
  {
    title: "Legal work",
    location: "Kyiv, UA",
    description: [
      "<em>2019-2021.</em> <strong>Lawyer</strong>. I was responsible for preparing claims, managing contract work, and providing legal support for cases.",
      "<em>2021-2023.</em> <strong>Head of the Legal Department at a construction company</strong>.  Led a team of lawyers, coordinated the legal support processes for transactions, and represented the company's interests in negotiations. Ensured compliance with all legal requirements at various stages of construction projects, minimizing risks and contributing to the effective execution of business objectives.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Kyiv, UA",
    description: [
      "<em>2023-present.</em> <strong>Freelance</strong>. Development of e-commerce platforms and portfolio websites using the MERN stack.",
      "<em>01/2023-02/2025.</em>  <strong>Full Stack Developer</strong>. Developed and maintained web applications, ensuring high performance, scalability, and responsiveness by utilizing modern frameworks and technologies. Collaborated with cross-functional teams to design, implement, and deploy user-friendly interfaces and efficient backend solutions. Debugged and optimized code to enhance application performance and user experience. Integrated third-party APIs and services to extend application functionality.",
    ],
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "This app allows users to provide public feedback to companies, enabling them to share their experiences, rate services, and voice their opinions.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. t has features like filtering by technology stack, sorting by relevance or date, and seamless pagination for easy navigation.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "NestJS",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
] as const;
