import { motion } from "framer-motion";

const Project = ({ imgSrc, description, githubLink }) => {
  const contentVariants = {
    initial: {
      clipPath: "inset(100% 0 0 0)",
    },
    hover: {
      clipPath: "inset(0 0 0 0)",
    },
  };

  const imgVariants = {
    initial: { scale: "1", filter: "brightness(40%)" },
    hover: { scale: "1.1" },
    view: { filter: "brightness(100%)" },
  };
  return (
    <motion.div
      className="project"
      initial={"initial"}
      whileHover={"hover"}
      whileInView={"view"}
      viewport={{ amount: 0.6 }}
    >
      <motion.img
        variants={imgVariants}
        src={imgSrc}
        alt="project1"
        className="project-image"
      />
      <motion.div
        variants={window.innerWidth > 1024 && contentVariants}
        className="project-content"
      >
        <p className="project-description">{description}</p>
        <a href={githubLink} target="_blank" className="project-link">
          see on github
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Project;
