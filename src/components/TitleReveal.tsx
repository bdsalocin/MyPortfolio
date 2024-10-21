import React from "react";
import { motion } from "framer-motion";
import "../styles/components/_TitleReveal.scss";

const TitleReveal: React.FC = () => {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <h1 id="TitleReveal">
      {[
        "Nicolas de Bressy",
        "Développeur full-stack",
        "Je donne vie",
        "à vos projets !",
      ].map((line, lineIndex) => (
        <motion.div
          key={lineIndex}
          initial="hidden"
          animate="visible"
          custom={lineIndex}
        >
          {line.split(" ").map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              className="word"
              variants={titleVariants}
              custom={lineIndex + wordIndex}
            >
              {word}{" "}
            </motion.span>
          ))}
          <br />
        </motion.div>
      ))}
    </h1>
  );
};

export default TitleReveal;
