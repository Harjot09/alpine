import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

const slides = [
  {
    image:
      "https://www.heartyculturenursery.com/cdn/shop/files/2_59458964-93df-41da-8a89-515add00e716_1086x522_crop_center.jpg?v=1691581755",
    eyebrow: "Curated houseplants and outdoor greens",
    title: "Plants chosen for calm, texture, and everyday living.",
    copy:
      "Build a softer home with sculptural foliage, seasonal color, and easy-care plant bundles that feel deliberate instead of random.",
  },
  {
    image:
      "https://www.heartyculturenursery.com/cdn/shop/files/Untitled_design_2_640x308_crop_center.jpg?v=1691581377",
    eyebrow: "Nursery-grown and carefully maintained",
    title: "Healthy stock with guidance that makes it easier to keep thriving.",
    copy:
      "From indoor starters to statement greens, Alpine pairs selection with practical care advice so your plants stay alive after checkout.",
  },
  {
    image:
      "https://www.heartyculturenursery.com/cdn/shop/files/217_520x250_crop_center.jpg?v=1691582998",
    eyebrow: "Landscaping and gifting",
    title: "Design greener corners indoors, outdoors, and everywhere between.",
    copy:
      "Use Alpine for ready-made gift combos, balcony refreshes, or full garden styling with a more polished visual direction.",
  },
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((current) => (current + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[slideIndex];

  return (
    <section className="hero">
      <div className="slideshow-container">
        <div className="mySlides fade" style={{ display: "block" }}>
          <div className="numbertext">{String(slideIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</div>
          <img
            src={activeSlide.image}
            className="hero__image"
            alt={activeSlide.title}
          />
          <div className="hero__overlay" />
          <div className="text">
            <span className="hero__eyebrow">{activeSlide.eyebrow}</span>
            <h1>{activeSlide.title}</h1>
            <p className="hero__copy">{activeSlide.copy}</p>
            <div className="hero__actions">
              <Link to="/Products" className="hero__button">
                Explore Plants
              </Link>
              <Link to="/OurServices" className="hero__button hero__button--secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>

        <button className="prev" onClick={() => setSlideIndex((slideIndex - 1 + slides.length) % slides.length)} aria-label="Previous slide">
          &#10094;
        </button>
        <button className="next" onClick={() => setSlideIndex((slideIndex + 1) % slides.length)} aria-label="Next slide">
          &#10095;
        </button>
      </div>

      <div className="hero__dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${slideIndex === index ? "active" : ""}`}
            onClick={() => setSlideIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
