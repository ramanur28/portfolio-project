import "../styles/jumbotron.css";
import video from "../assets/planet.mp4";
import { useContext } from "react";
import { mouseContext } from "./cursor/mouseContext";
import { motion, useScroll, useTransform } from "framer-motion";

const Jumbotron = () => {
  const { setHover, isHover, x, y } = useContext(mouseContext);
  const { scrollYProgress } = useScroll();
  const vidScale = useTransform(scrollYProgress, [0, 1], ["1", "2"]);

  return (
    <div className="jumbotron" id="home">
      <motion.h1
        className="title"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        animate={{ x: x / 50, y: y / 50 }}
        transition={{ type: "ease", duration: 0.7 }}
      >
        Ramadhani
      </motion.h1>
      <motion.p
        animate={{ x: x / 40, y: y / 40 }}
        transition={{ type: "ease", duration: 0.4 }}
        className="lead"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        POURING HEART, SOUL, AND CODE INTO A WEBSITE
      </motion.p>
      <motion.video
        style={{ scale: vidScale }}
        className="video "
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </motion.video>
    </div>
  );
};

export default Jumbotron;
