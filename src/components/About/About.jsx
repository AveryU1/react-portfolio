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
      description: "Web apps and websites that look great.",
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
              Since I was a kid I liked computers but it wasn't until I was 20
              that I decided I wanted to be a software developer. I would like a
              job where I gain experience and have a good work environment to
              better develop my skills. I love solving problems and I'm good at
              working in a team. In my spare time I like to play videogames,
              watch movies and anime :)
            </p>
            <div className="app__about-curriculum">
              <a
                href="https://drive.google.com/file/d/180AreA5s9oB8dbf4JlBdWuJY-lJQ9ujM/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button>View CV</button>
              </a>
            </div>
          </article>
          <motion.div className="app__about__image">
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
