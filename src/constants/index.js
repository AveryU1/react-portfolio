import {
    css,
    html,
    javascript,
    react,
    sass,
    framerMotion,
    github,
    about01,
    about02,
    about03,
    modernBank,
    home,
    user,
    project,
    skill,
    contact,
    portfolio,
    ecommerce,
    tailwind,
    typescript,
    trueBeautyLandingPage,
    nextJs,
    dkoEvents,
} from "../assets";
export const navLinks = [
    { id: "home", title: "Home", imgUrl: home },
    { id: "about", title: "About", imgUrl: user },
    { id: "projects", title: "Projects", imgUrl: project },
    { id: "skills", title: "Skills", imgUrl: skill },
    { id: "contact", title: "Contact", imgUrl: contact },
];

export const projects = [
    // {
    //   tag: "Web Apps",
    //   title: "Web Apps",
    //   imgUrl: about01,
    //   link: "",
    //   description: "description",
    // },
    {
        tag: "UI/UX",
        title: "Modern Bank",
        imgUrl: modernBank,
        link: "https://criss-modern-bank.netlify.app",
        github: "https://github.com/AveryU1/Modern-Bank",
        description:
            "Modern responsive website made with reactJS and tailwind, making use of best practices.",
    },
    {
        tag: "UI/UX",
        title: "True Beauty",
        imgUrl: trueBeautyLandingPage,
        link: "https://true-beauty.vercel.app",
        github: "https://github.com/AveryU1/True-Beauty",
        description:
            "Modern, responsive beauty product landing page built with Next.js, TailwindCSS, and cutting-edge technologies.",
    },
    {
        tag: "UI/UX",
        title: "Portfolio",
        imgUrl: portfolio,
        link: "https://crissm-portfolio.netlify.app",
        github: "https://github.com/AveryU1/react-portfolio",
        description:
            "Personal website made with ReactJS and FramerMotion, doing good practices such as folder structure.",
    },
    {
        tag: "UI/UX",
        title: "Events DKO",
        imgUrl: dkoEvents,
        link: "https://events-landing-page.vercel.app",
        github: "https://github.com/AveryU1/events-landing-page",
        description:
            "Next.js and Tailwind power a sleek event landing page, built with best practices.",
    },
    {
        tag: "React Js",
        title: "E-commerce",
        imgUrl: ecommerce,
        link: "https://headphonesecommerce.netlify.app",
        github: "https://github.com/AveryU1/ecommerce",
        description:
            "Modern responsive full-Stack e-commerce made with react and Sanity.",
    },
];

export const skills = [
    { title: "JavaScript", imgUrl: javascript },
    { title: "React", imgUrl: react },
    { title: "Typescript", imgUrl: typescript },
    { title: "Next.JS", imgUrl: nextJs },
    { title: "Github", imgUrl: github },
    { title: "HTML", imgUrl: html },
    { title: "CSS", imgUrl: css },
    { title: "Sass", imgUrl: sass },
    { title: "Framer Motion", imgUrl: framerMotion },
    { title: "TailwindCSS", imgUrl: tailwind },
];
