import "../styles/jumbotron.css";
import video from "../assets/planet.mp4";
import { useContext, useRef } from "react";
import { mouseContext } from "./cursor/mouseContext";
import { motion, useScroll, useTransform } from "framer-motion";

const Jumbotron = () => {
  const jumbotronRef = useRef(null);
  const { setHover, isHover, x, y } = useContext(mouseContext);
  const { scrollYProgress } = useScroll({
    target: jumbotronRef,
    offset: ["end end", "end start"],
  });
  const vidScale = useTransform(scrollYProgress, [0, 1], ["1", "2"]);
  const jumbotronTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <motion.div
      ref={jumbotronRef}
      className="jumbotron"
      id="home"
      style={{
        y: jumbotronTransform,
      }}
      transition={{ ease: "linear" }}
    >
      <motion.h1
        className="title"
        animate={{ x: x / 50, y: y / 50 }}
        transition={{ duration: 0.7 }}
      >
        Ramadhani
      </motion.h1>
      <motion.p
        animate={{ x: x / 40, y: y / 40 }}
        transition={{ duration: 0.4 }}
        className="lead"
      >
        POURING HEART, SOUL, AND CODE INTO A WEBSITE
      </motion.p>
      <motion.video
        style={{
          scale: vidScale,
        }}
        className="video "
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </motion.video>
    </motion.div>
  );
};

export default Jumbotron;
