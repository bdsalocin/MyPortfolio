import React, { useEffect } from "react";
import "../styles/components/_Tooltip.scss";

const HoverBitcoin: React.FC = () => {
  useEffect(() => {
    const donationLink = document.querySelector(
      ".donation-link"
    ) as HTMLElement | null;

    if (!donationLink) return;

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";

    const image = document.createElement("img");
    image.src = require("../assets/img/bitcoin-adress.png");
    image.alt = "adresse bitcoin";
    image.className = "tooltip-img";

    tooltip.appendChild(image);
    document.body.appendChild(tooltip);

    const updateTooltipPosition = () => {
      const linkRect = donationLink.getBoundingClientRect();
      const scrollTop = window.scrollY;

      tooltip.style.top = `${linkRect.bottom + scrollTop + 15}px`;
      tooltip.style.left = `${linkRect.left + linkRect.width / 2}px`;
    };

    const handleMouseEnter = () => {
      updateTooltipPosition();
      tooltip.style.display = "block";
    };

    const handleMouseLeave = () => {
      tooltip.style.display = "none";
    };

    donationLink.addEventListener("mouseover", handleMouseEnter);
    donationLink.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("scroll", () => {
      if (tooltip.style.display === "block") {
        updateTooltipPosition();
      }
    });

    return () => {
      donationLink.removeEventListener("mouseover", handleMouseEnter);
      donationLink.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <li className="donation-link">
      Dons
      <i className="fab fa-bitcoin"></i>
    </li>
  );
};

export default HoverBitcoin;
