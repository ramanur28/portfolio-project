import "../styles/navbar.css";
import { useContext } from "react";
import { useCycle, motion, easeInOut } from "framer-motion";
import { mouseContext } from "./cursor/mouseContext";
const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const { setHover } = useContext(mouseContext);

  const navVariants = {
    open: {
      clipPath: `circle(120vh at 85% 8%)`,
      transition: {
        type: "ease",
        stiffness: 20,
      },
    },

    close: {
      clipPath: `circle(0px at 85% 8%)`,
      transition: {
        type: "ease",
        stiffness: 20,
      },
    },
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          Ramadhani
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            toggleOpen();
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <motion.ul
            variants={navVariants}
            animate={() => {
              if (window.innerWidth < 1024) {
                return isOpen ? "open" : "close";
              }
            }}
            className="navbar-nav ms-auto"
          >
            <li
              className="nav-item"
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
