import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ParallaxScroll from "./ParallaxScroll";
import HoverBitcoin from "./HoverBitcoin";
import "../styles/components/_Navigation.scss";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleThemeChange = (isDarkMode: boolean) => {
    setDarkMode(isDarkMode);
  };

  return (
    <nav className="navbar">
      <ParallaxScroll />
      <ul className="nav-left">
        <li className="logo">
          <Link to="/">
            <img
              src={
                darkMode
                  ? require("../assets/img/letter darkmode.png")
                  : require("../assets/img/letter-n_15090711.png")
              }
              alt="logo"
            />
          </Link>
        </li>
        <li>
          <a
            href="/documents/CVNicolasdebressy.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">Profil</Link>
        </li>
        {!isMobile && (
          <li>
            <HoverBitcoin />
          </li>
        )}
      </ul>
      <ul className="nav-right">
        <li>
          <ThemeToggle onThemeChange={handleThemeChange} />
        </li>
        {!isMobile && (
          <>
            <li>
              <a
                href="https://github.com/bdsalocin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nicolas-de-bressy-181849303/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
