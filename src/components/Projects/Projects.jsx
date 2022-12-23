import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { view, about01, about02, about03, github } from "../../assets";
import { projects } from "../../constants";
import "./Projects.scss";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projectsApps, setProjectsApps] = useState(projects);

  const allTags = ["All", ...new Set(projects.map(project => project.tag))];

  const handleProjectFilter = tag => {
    setActiveFilter(tag);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (tag === "All") {
        setProjectsApps(projects);
        return;
      }
      const filteredProjects = projects.filter(project => project.tag === tag);
      setProjectsApps(filteredProjects);
    }, 500);
  };
  return (
    <motion.div
      id="projects"
      className="app__projects-container"
      whileInView={{ opacity: [0, 0, 1], y: [100, 50, 0] }}
      transition={{ duration: 0.8 }}
    >
      <h2>My Projects</h2>
      <div className="app__projects-filter">
        {allTags.map(tag => (
          <div
            key={tag}
            onClick={() => handleProjectFilter(tag)}
            className={`app__project-filter-tag ${
              activeFilter === tag ? "item-active" : ""
            }`}
          >
            {tag}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__projects-portfolio"
      >
        {projectsApps.map((project, index) => (
          <div className="app__project-item app__flex" key={project.id}>
            <div className="app__project-img app__flex">
              <img src={project.imgUrl} alt="project.title" />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__project-hover app__flex"
              >
                <a href={project.link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.25,
                    }}
                    className="app__flex"
                  >
                    <img src={view} alt="view" />
                  </motion.div>
                </a>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.25,
                    }}
                    className="app__flex"
                  >
                    <img src={github} alt="github" />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__project-content app__flex">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="app__project-tag app__flex">
                <p>{project.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
