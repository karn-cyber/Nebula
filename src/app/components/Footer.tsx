import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About SAST</h3>
          <p>
            The Society for Astrophysics and Space Technology (SAST) at Rishihood University fosters innovation in space exploration, satellite tech, and astrophysics. We aim to empower students with hands-on experience and cosmic curiosity.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:sast@rishihood.edu.in">sast@rishihood.edu.in</a></p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/sast.rishihood/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/society-for-aerospace-and-space-technology/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Society for Astrophysics and Space Technology (SAST) | Rishihood University</p>
      </div>
    </footer>
  );
};

export default Footer;
