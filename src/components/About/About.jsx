import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { about01, about02, about03, space } from "../../assets";
const About = () => {
  const abouts = [
    {
      title: "Web Development",
      description: "Good web applications with great funcionality.",
      imgUrl: about01,
    },
    {
      title: "Web Animations",
      description: "Good animations, not the boring static sites.",
      imgUrl: about03,
    },
    {
      title: "Web Design",
      description: "Web apps and websites than look great.",
      imgUrl: about02,
    },
  ];
  return (
    <section id="about" className="app__about">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__about-info"
      >
        <div className="app__about__info-container">
          <article>
            <h3>About me</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              molestias facere voluptate optio odit quae quaerat consectetur
              exercitationem tenetur deleniti ullam, expedita ut. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quod quos est ratione
              molestias distinctio? Asperiores perspiciatis incidunt aliquid,
              accusamus vero nostrum reprehenderit vel vitae veritatis illum
              quos deserunt tenetur hic.
            </p>
          </article>
          <motion.div>
            <img src={space} alt="programming" />
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="app__about__main-title">
        <h2>
          <span>Good Development </span>means <br /> <span>Good Bussiness</span>
        </h2>
      </motion.div>
      <div className="app__about-content">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            key={index}
            className="app__about__content-item"
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <img src={about.imgUrl} alt="image-about" />
            </motion.div>
            <h3>{about.title}</h3>
            <p>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
