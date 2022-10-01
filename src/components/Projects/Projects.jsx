import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { view, hide } from "../../assets";
import { projects } from "../../constants";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const handleProjectFilter = project => {};
  return (
    <>
      <h2>My Projects</h2>
      <div className="app__projects-filter">
        {projects.map(project => (
          <div
            key={project.id}
            onClick={() => handleProjectFilter(project.title)}
            className={`app__project-filter-item ${
              activeFilter === project.title ? "item-active" : ""
            }`}
          ></div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__projects-portfolio"
      ></motion.div>
    </>
  );
};

export default Projects;
