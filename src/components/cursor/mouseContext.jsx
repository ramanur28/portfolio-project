import { useState, useEffect, createContext } from "react";

// creating context to get mouse position and creating mouse follow animation
// exported as object
export const mouseContext = createContext();
// export default provider that send mouse position
export default function ({ children }) {
  const [position, setPosition] = useState({
    x: null,
    y: null,
  });
  const [isHover, setHover] = useState(false);

  const mouseHandler = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseHandler);

    return () => {
      // using remove listener to avoid memory leak
      window.removeEventListener("mousemove", mouseHandler);
    };
  }, []);

  return (
    <mouseContext.Provider
      value={{ x: position.x, y: position.y, isHover, setHover }}
    >
      {children}
    </mouseContext.Provider>
  );
}
