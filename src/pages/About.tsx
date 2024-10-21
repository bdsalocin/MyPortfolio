import React from "react";
import "../styles/pages/_About.scss";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <main className="about-content">
        <h1>À propos de moi</h1>

        <section className="intro">
          <h2>Qui suis-je ?</h2>
          <p>
            Bonjour à toi, je m'appelle Nicolas, j'ai 29 ans, et je suis un
            passionné d'informatique, de nouvelles technologies et par dessus
            tout le minimalisme que ce soit dans ma vie ou dans le design.
          </p>
        </section>

        <section className="passion">
          <h2>Ma passion pour la technologie</h2>
          <p>
            Depuis mon plus jeune âge, j'ai été fasciné par l'informatique.
            Cette passion m'a poussé à explorer et expérimenter dès mes
            premières années. J'ai fait mes premiers pas en installant Linux sur
            de vieux PC, essayant d'y faire fonctionner Dofus en installant une
            version obscure de flash player, une belle époque.
          </p>
        </section>

        <section className="journey">
          <h2>Mon parcours dans le code</h2>
          <p>
            En 2022, j'ai décidé de plonger dans le monde du développement. Ce
            qui a commencé comme une simple exploration s'est rapidement
            transformé en une véritable passion. Ma spécialisation se tourne
            particulièrement vers Javascript/React.
          </p>
        </section>

        <section className="future">
          <h2>Mes aspirations</h2>
          <p>
            Aujourd'hui, mon objectif est de continuer à repousser mes limites
            dans le domaine du développement. Je suis déterminé à approfondir
            mes connaissances, à relever de nouveaux défis et à explorer les
            nombreuses possibilités qu'offre le monde du code.
          </p>
        </section>

        <section className="conclusion">
          <p>
            Cette passion qui m'anime depuis l'enfance, combinée à ma
            détermination récente dans le développement, forme le socle de mon
            parcours professionnel. Je suis enthousiaste à l'idée de voir
            jusqu'où cette aventure me mènera et des innovations auxquelles je
            pourrai contribuer.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
