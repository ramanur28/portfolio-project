import "../styles/about.css";
import computer from "../assets/coding.jpg";
import { motion } from "framer-motion";
import { useContext } from "react";
import { mouseContext } from "./cursor/mouseContext";

const About = () => {
  const { x, y } = useContext(mouseContext);
  const aboutVariants = {
    offScreen: {
      x: "-105%",
    },
    onScreen: {
      x: 0,
      transition: {
        delay: 0.3,
        ease: "easeInOut",
        duration: 1,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.8 }}
      className="container-fluid about text-center"
      id="about"
    >
      <motion.img
        src={computer}
        className="about-image"
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "ease",
          duration: 0.7,
        }}
      />
      <motion.div className="content" variants={aboutVariants}>
        <motion.h2 className="subtitle" animate={{ x: x / 120, y: y / 120 }}>
          Halo!
        </motion.h2>
        <motion.p animate={{ x: x / 110, y: y / 110 }}>
          Welcome to my corner of the web! I'm Ramadhani, a passionate front-end
          web developer hailing from the vibrant tech landscape of Indonesia.
          With an unwavering love for crafting digital experiences, I've honed
          my skills as a front-end web developer, dancing seamlessly with the
          language of JavaScript.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
