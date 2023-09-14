import "../styles/skills.css";

import { useCycle, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const [contentCycle, toggleCycle] = useCycle(false, true);
  const skillsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skillsRef,
    offset: ["start start", "end end"],
  });

  const contentMoveLg = useTransform(scrollYProgress, [0, 1], ["0vh", "114vh"]);

  const skillSet = [
    "Html Css Js",
    "Bootstrap",
    "React",
    "Framer-motion",
    "Gsap",
    "Figma",
    "Photoshop",
    "Canva",
  ];

  const contentVariants = {
    close: {
      clipPath: `circle(0 at 87% 92%)`,
      transition: {
        type: "ease",
        stiffness: 20,
      },
    },
    open: {
      clipPath: `circle(120vh at 87% 92%)`,
      transition: {
        type: "ease",
        stiffness: 20,
      },
    },
  };

  const togglerVariants = {
    notView: { display: "none" },
    close: {
      backgroundColor: "var(--white)",
    },
    open: {
      backgroundColor: "var(--black)",
    },
    inView: {
      display: "block",
      position: "fixed",
      top: "90%",
    },
  };

  const renderSkill = skillSet.map((data) => {
    return (
      <div className="skill" key={data}>
        <h3>{data}</h3>
      </div>
    );
  });

  if (window.innerWidth < 1024) {
    return (
      <motion.div
        ref={skillsRef}
        className="skills-container"
        animate={contentCycle ? "open" : "close"}
        initial={"notView"}
        whileInView={"inView"}
        viewport={{ amount: 0.2 }}
      >
        <h2 className="subtitle">Skills</h2>
        <div className="skills-wrapper">{renderSkill}</div>
        <motion.div
          variants={togglerVariants}
          className="content-toggler"
          onClick={() => {
            toggleCycle();
          }}
        ></motion.div>
        <motion.div
          variants={contentVariants}
          className="skills-content"
          style={{ top: 0, position: "fixed" }}
        >
          <p className="skills-text">
            My journey in programming has been a pursuit of constant growth, and
            my mission is crystal clear: to evolve into a better programmer with
            each passing day.
          </p>
        </motion.div>
      </motion.div>
    );
  } else {
    return (
      <motion.div ref={skillsRef} className="skills-container">
        <h2 className="subtitle">Skills</h2>
        <div className="skills-wrapper">{renderSkill}</div>
        <motion.div className="skills-content" style={{ top: contentMoveLg }}>
          <p className="skills-text">
            My journey in programming has been a pursuit of constant growth, and
            my mission is crystal clear: to evolve into a better programmer with
            each passing day.
          </p>
        </motion.div>
      </motion.div>
    );
  }
};

export default Skills;
