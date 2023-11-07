import React, { useState, useEffect } from "react";
import {BsFillArrowUpCircleFill} from "react-icons/bs"
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Add a scroll event listener to track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={` z-50 fixed bottom-32 rounded-full cursor-pointer right-10 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0 invisible"
      }`}
      onClick={scrollToTop}
    >
      <button><BsFillArrowUpCircleFill className="text-5xl text-emerald-400"/></button>
    </div>
  );
};

export default ScrollToTop;
