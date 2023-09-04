"use client";
import { useState, useEffect } from "react";
const Heading = ({ text }: { text: string }) => {
  const breakPoint = 810;
  const [isWideScreen, setIsWideScreen] = useState<boolean>(
    window.innerWidth > breakPoint
  );
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > breakPoint);
    };
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakPoint]);

  return isWideScreen ? <h1>{text}</h1> : <h2 className="tc">{text}</h2>;
};

export default Heading;
