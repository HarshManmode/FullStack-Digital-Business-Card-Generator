import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Digital Business Card Generator</h1>
        <p>
          Welcome to <strong>FlexiCard Generator</strong> — your all-in-one platform for creating
          sleek and modern <strong>digital business cards</strong> with ease.
        </p>
        <p>
          Our mission is to help professionals and businesses make lasting first impressions.
          With FlexiCredit, you can design, store, and share your personalized business cards online.
        </p>

        <div className="about-features">
          <div className="feature-card">
            <h3>⚡ Quick & Easy</h3>
            <p>Create your card in seconds — no design skills required.</p>
          </div>
          <div className="feature-card">
            <h3>💼 Professional</h3>
            <p>Make your digital identity stand out with modern templates.</p>
          </div>
          <div className="feature-card">
            <h3>🌐 Share Anywhere</h3>
            <p>Instantly share your card via link, QR, or email.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
