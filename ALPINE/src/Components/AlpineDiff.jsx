import React from "react";

const highlights = [
  {
    image: "img2.webp",
    title: "Plant-first curation",
    copy: "Selections are grouped for actual use cases like gifting, balconies, desks, and soft indoor styling.",
  },
  {
    image: "img1.avif",
    title: "Healthier stock",
    copy: "Plants are presented as living products, with more attention to quality, condition, and practical care.",
  },
  {
    image: "img3.webp",
    title: "Guidance that matters",
    copy: "Care tips are built into the experience so new buyers can keep plants thriving after delivery.",
  },
  {
    image: "img4.webp",
    title: "Fast, low-friction service",
    copy: "Delivery, replacement, and landscaping support are treated as part of the design experience.",
  },
];

const AlpineDiff = () => {
  return (
    <section className="home-section">
      <div className="difference-panel">
        <div className="section-heading">
          <div>
            <h2>Why Alpine feels more considered.</h2>
          </div>
          <p>
            The goal is not to show the most products. It is to help people
            build greener spaces that look intentional and are easier to live
            with over time.
          </p>
        </div>

        <div className="difference-grid">
          {highlights.map((item) => (
            <article className="difference-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlpineDiff;
