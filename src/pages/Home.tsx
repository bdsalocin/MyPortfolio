import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import profilePicture from "../assets/img/profilPicture.jpg";
import finityOneLogo from "../assets/img/finityOne-logo.png";
import oneFinityExplorerLogo from "../assets/img/One Explorer.png";
import "../styles/pages/_Home.scss";

const projectsData = [
  {
    id: 1,
    title: "FinityOne NFT",
    description: "Une plateforme NFT en construction",
    image: finityOneLogo,
    liveLink: "https://finityone-nft.vercel.app",
  },
  {
    id: 2,
    title: "OneFinity Explorer",
    description: "Un explorateur sous la blockchain OneFinity",
    image: oneFinityExplorerLogo,
    liveLink: "https://one-finity-explorer.vercel.app",
  },
];

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={profilePicture}
          alt="Nicolas de Bressy"
          className="profile-pic"
          whileHover={{ scale: 1.05 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Nicolas de Bressy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Développeur web, créant des expériences numériques innovantes.
        </motion.p>
      </motion.section>

      <motion.section
        className="skills"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <h2>Compétences</h2>
        <div className="skill-icons">
          {["react", "js", "sass", "node", "git"].map((skill, index) => (
            <motion.i
              key={skill}
              className={`fab fa-${skill}`}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        className="projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <h2>Mes Projets</h2>
        <div className="project-grid">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visiter le site de ${project.title}`}
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <h2>Prêt à collaborer ?</h2>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-secondary">
            Me contacter
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
