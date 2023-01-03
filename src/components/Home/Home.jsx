import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import { avatar } from "../../assets";
const Home = () => {
  return (
    <div id="home" className="app__home">
      <div className="app__home-info">
        <div className="app__home__info-left">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="app__home-hero"
          >
            <h1>
              Hi! My name is <br />
              <span>Cristopher</span>
            </h1>
          </motion.div>
          <div className="app__home__typing-container">
            <h2 className="app__home-typing">Frontend Web Developer</h2>
          </div>
        </div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delayChildren: 1 }}
          className="app__home-profile"
        >
          <img src={avatar} alt="profile" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
