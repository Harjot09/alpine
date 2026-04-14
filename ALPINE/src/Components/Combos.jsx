import React from "react";
import { Link } from "react-router-dom";

const combos = [
  {
    title: "Bless",
    label: "Gift bundle",
    route: "/Bless",
    image:
      "https://www.heartyculturenursery.com/cdn/shop/files/blessings_844x469.jpg?v=1614391323",
  },
  {
    title: "Destined",
    label: "Warm interiors",
    route: "/Destined",
    image:
      "https://www.heartyculturenursery.com/cdn/shop/files/delight1_844x469.jpg?v=1614391324",
  },
  {
    title: "Divine",
    label: "Statement greens",
    route: "/Divine",
    image:
      "https://www.heartyculturenursery.com/cdn/shop/files/divine1_844x469.jpg?v=1614391511",
  },
  {
    title: "Tranquil",
    label: "Calm corners",
    route: "/Tranquil",
    image:
      "https://www.heartyculturenursery.com/cdn/shop/files/tranquil_844x469.jpg?v=1614391323",
  },
];

const Combos = () => {
  return (
    <section className="home-section">
      <div className="section-heading">
        <div>
          <h2>Signature combos for gifting and styling.</h2>
        </div>
        <p>
          Start with curated bundles that already feel balanced in scale, color,
          and mood instead of assembling everything from scratch.
        </p>
      </div>

      <div className="combo-grid">
        {combos.map((combo) => (
          <Link to={combo.route} className="combo-card" key={combo.title}>
            <img src={combo.image} alt={combo.title} />
            <div className="combo-card__overlay">
              <span className="combo-card__eyebrow">{combo.label}</span>
              <h3 className="combo-card__title">{combo.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Combos;
