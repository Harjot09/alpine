import React from "react";

const services = [
  {
    title: "Nursery collections for homes and gifts",
    image: "PHOTO-2024-03-07-14-16-38.jpg",
    copy:
      "Browse healthier stock for indoor styling, seasonal gifting, and everyday plant buying without the cluttered marketplace feel.",
  },
  {
    title: "Landscaping with a softer visual direction",
    image: "PHOTO-2024-03-07-14-16-38.jpg",
    copy:
      "Use Alpine for outdoor refreshes, patio planting, and greener residential spaces with a cleaner planning approach.",
  },
];

const Services = () => {
  return (
    <section className="home-section">
      <div className="section-heading">
        <div>
          <h2>Nursery and landscaping services in one place.</h2>
        </div>
        <p>
          Alpine is positioned as both a plant shop and a styling partner for
          greener interiors, balconies, and outdoor spaces.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <img src={service.image} alt={service.title} />
            <div className="service-card__content">
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
