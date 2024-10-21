import React, { useEffect } from "react";

const ParallaxScroll: React.FC = () => {
  useEffect(() => {
    const nav = document.querySelector(".navbar") as HTMLElement;
    const parallaxElements = document.querySelectorAll(
      ".parallax"
    ) as NodeListOf<HTMLElement>;

    const applyParallaxEffect = () => {
      const scrollPosition = window.scrollY;

      nav.classList.toggle("scrolled", scrollPosition > 10);

      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed") || "0.5");
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener("scroll", applyParallaxEffect);

    return () => {
      window.removeEventListener("scroll", applyParallaxEffect);
    };
  }, []);

  return null;
};

export default ParallaxScroll;
