import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <section className="footer__brand">
          <h2>Alpine</h2>
          <p>
            Alpine brings together nursery shopping, curated combos, and
            landscaping support for calmer homes and greener outdoor spaces.
          </p>
          <p>Chitkara University, Rajpura, Punjab, 140401</p>
          <a className="section-link" href="mailto:alpinepremiumflorist2022@gmail.com">
            Email us
          </a>
        </section>

        <section className="footer__column">
          <h3>Explore</h3>
          <div className="footer__links">
            <Link to="/Products">Products</Link>
            <Link to="/OurServices">Services</Link>
            <Link to="/AboutUs">Our Story</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </section>

        <section className="footer__column">
          <h3>Support</h3>
          <div className="footer__links">
            <Link to="/Faq">FAQ</Link>
            <Link to="/Login">Login</Link>
            <Link to="/SignUp">Sign Up</Link>
            <Link to="/Cart">Cart</Link>
          </div>
        </section>

        <section className="footer__column">
          <h3>Follow</h3>
          <p>Stay close to new arrivals, care tips, and curated plant drops.</p>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Instagram">IG</a>
            <a href="#" className="footer__social" aria-label="Facebook">FB</a>
            <a href="#" className="footer__social" aria-label="Pinterest">PI</a>
          </div>
        </section>
      </div>

      <div className="footer__legal">
        <span>&copy; 2026 Alpine. All rights reserved.</span>
        <span>Built by Team Alpine.</span>
      </div>
    </footer>
  );
};

export default Footer;
