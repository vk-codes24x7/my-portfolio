import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./GoTop.css";

const GoTop = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.scrollY > 50);
  };

  const handleScrollTop = () => {
    window.scrollTo({ left: 0, top: 0 });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <>
      <div className={showGoTop ? "" : "goTopHidden"} onClick={handleScrollTop}>
        <button className="goTop">
          <FaArrowUp className="text" />
        </button>
      </div>
    </>
  );
};

export default GoTop;
