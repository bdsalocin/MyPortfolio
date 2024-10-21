import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/components/_Testimonials.scss";

const testimonials = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "CEO, Tech Innovators",
    content:
      "Nicolas a réalisé un travail exceptionnel sur notre site web. Son expertise technique et sa créativité ont dépassé nos attentes.",
  },
  {
    id: 2,
    name: "Marie Martin",
    role: "Directrice Marketing, E-commerce Plus",
    content:
      "Travailler avec Nicolas a été une expérience formidable. Il a su traduire nos idées en une interface utilisateur élégante et fonctionnelle.",
  },
  // Ajoutez d'autres témoignages...
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <h2>Ce que disent mes clients</h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="testimonial-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="testimonial-content">{testimonial.content}</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
          </motion.div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;
