import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content" id="footer">
        <div className="footer-section">
          <h3>Guideline</h3>
          <p>
            Your trusted resource for step-by-step guides and best practices.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/docs">Documentation</a>
            </li>
            <li>
              <a href="/faq">FAQs</a>
            </li>
            <li>
              <a href="https://t.me/Lyn_niee">Contact</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:phalimsophal06@gmail.com">
              phalimsophal06@gmail.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Jellylynny"
              target="_blank"
              rel="noreferrer"
            >
              Jellylynny
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Guideline. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
