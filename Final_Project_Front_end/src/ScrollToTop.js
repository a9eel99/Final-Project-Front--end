import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ستايلات مدمجة
  const buttonStyle = {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "50px",
    height: "50px",
    backgroundColor: "#61CE70",
    color: "white",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
    transition: "background-color 0.3s",
    borderRadius: "50%",
    zIndex: 1000,
  };

  const iconStyle = {
    fontSize: "20px",
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} style={buttonStyle}>
          <i className="bi bi-arrow-up" style={iconStyle}></i>
        </button>
      )}
    </>
  );
}
