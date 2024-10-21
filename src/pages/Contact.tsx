import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="page-container">
      <main className="contact-page">
        <h1>Contactez-moi</h1>
        <div className="messaging-icons">
          <a
            href="https://www.instagram.com/nicolasdebressy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a
            href="https://m.me/nicolasdebressy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Messenger"
          >
            <FontAwesomeIcon icon={faFacebookMessenger} size="3x" />
          </a>
          <a href="mailto:nicolas.debressy@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </div>
      </main>
    </div>
  );
}

export default Contact;
