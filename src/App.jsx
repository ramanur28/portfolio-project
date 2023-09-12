import "./styles/app.css";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Cursor from "./components/cursor/Cursor";
import Loader from "./components/Loader";
import About from "./components/About";

import { useContext, useState, useEffect } from "react";
import { mouseContext } from "./components/cursor/mouseContext";

function App() {
  const { x, y } = useContext(mouseContext);

  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Loader />
      <Cursor mousePos={{ x, y }} />
      <Navbar />
      <Jumbotron />
      <About />
    </>
  );
}

export default App;
