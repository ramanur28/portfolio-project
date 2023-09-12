import "../styles/about.css";
import computer from "../assets/coding.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container-fluid about text-center" id="about">
      <motion.img
        src={computer}
        className="about-image"
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "ease",
          duration: 0.7,
        }}
      />
      <motion.div
        className="content"
        initial={{ x: "100vw" }}
        animate={{ x: "0px" }}
      >
        <h2>Halo!</h2>
        <p>
          Welcome to my corner of the web! I'm Ramadhani, a passionate front-end
          web developer hailing from the vibrant tech landscape of Indonesia.
          With an unwavering love for crafting digital experiences, I've honed
          my skills as a front-end web developer, dancing seamlessly with the
          language of JavaScript.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
