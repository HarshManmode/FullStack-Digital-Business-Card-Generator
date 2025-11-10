import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out to us through any of the ways below.</p>

        <div className="contact-cards">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>harsh.manmode.btech2023@sitnagpur.siu.edu.in</p>
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h3>Phone</h3>
            <p>+91 8767903186</p>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Office</h3>
            <p>Symbiosis Institute of Technology , Nagpur</p>
          </div>
        </div>

        <div className="contact-footer">
          <p>© {new Date().getFullYear()} FlexiCredit. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
