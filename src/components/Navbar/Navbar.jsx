import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { navLinks } from "../../constants";
import { logo } from "../../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((navLink, index) => (
          <li key={navLink.id}>
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <i className="bx bx-menu" onClick={() => setToggle(prev => !prev)}></i>

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <i className="bx bx-x" onClick={() => setToggle(prev => !prev)}></i>

            <ul className="app__navbar-links">
              {navLinks.map((navLink, index) => (
                <li key={navLink.id}>
                  <a
                    href={`#${navLink.id}`}
                    onClick={() => setToggle(prev => !prev)}
                  >
                    {navLink.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
