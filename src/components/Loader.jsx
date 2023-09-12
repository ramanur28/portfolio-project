import { delay, motion } from "framer-motion";
import "../styles/loader.css";

const Loader = () => {
  return (
    <motion.div
      className="container-fluid loader"
      initial={{ y: "0" }}
      animate={{ y: "-100vh", display: "none" }}
      transition={{
        duration: 0.7,
        delay: 0.3,
        display: {
          delay: 1,
        },
      }}
    >
      <h3 className="title">Ramadhani</h3>
    </motion.div>
  );
};

export default Loader;
