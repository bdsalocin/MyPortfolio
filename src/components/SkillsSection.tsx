import React from "react";
import { motion } from "framer-motion";
import "../styles/components/_SkillsSection.scss";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "CSS/SASS", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "Git", level: 80 },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="skills-section">
      <h2>Mes Compétences</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{skill.name}</h3>
            <div className="skill-bar-container">
              <motion.div
                className="skill-bar"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            <span className="skill-level">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
