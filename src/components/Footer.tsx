import React from "react";
import "../styles/components/_Footer.scss";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {currentYear} Nicolas de Bressy. Tous droits réservés.</p>
        <ul className="socials">
          <li>
            <a
              href="https://github.com/NicolasdeBressy"
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
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
