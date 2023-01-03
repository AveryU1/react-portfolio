import { motion, useScroll, useSpring } from "framer-motion";
import "./App.scss";
import { Navbar, Home, About, Projects, Skills, Contact } from "./components";
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="app bg-black-gradient">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <motion.div className="progress-bar" style={{ scaleX }} />
    </div>
  );
}

export default App;
