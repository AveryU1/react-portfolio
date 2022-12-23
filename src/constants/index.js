import {
  css,
  html,
  javascript,
  react,
  sass,
  framerMotion,
  nodeJS,
  github,
  about01,
  about02,
  about03,
  home,
  user,
  project,
  skill,
  contact,
} from "../assets";
export const navLinks = [
  { id: "home", title: "Home", imgUrl: home },
  { id: "about", title: "About", imgUrl: user },
  { id: "projects", title: "Projects", imgUrl: project },
  { id: "skills", title: "Skills", imgUrl: skill },
  { id: "contact", title: "Contact", imgUrl: contact },
];

export const projects = [
  {
    tag: "Web Apps",
    title: "Web Apps",
    imgUrl: about01,
    link: "",
    description: "description",
  },
  {
    tag: "UI/UX",
    title: "UI/UX",
    imgUrl: about02,
    link: "",
    description: "description",
  },
  {
    tag: "React Js",
    title: "React JS",
    imgUrl: about03,
    link: "",
    description: "description",
  },
];

export const skills = [
  { title: "HTML", imgUrl: html },
  { title: "CSS", imgUrl: css },
  { title: "JavaScript", imgUrl: javascript },
  { title: "React", imgUrl: react },
  { title: "Sass", imgUrl: sass },
  { title: "Framer Motion", imgUrl: framerMotion },
  { title: "NodeJS", imgUrl: nodeJS },
  { title: "Github", imgUrl: github },
];
