import React from "react";

const guides = [
  {
    title: "Container gardening",
    image:
      "https://us.123rf.com/450wm/haritonoff/haritonoff2002/haritonoff200200259/141087119-interior-of-an-industrial-greenhouse-in-which-indoor-flowers-and-ampelous-plants-are-grown.jpg?ver=6",
    copy:
      "Use layered heights, repeat textures, and compact planters to make balconies and corners feel finished instead of crowded.",
  },
  {
    title: "Plant care fundamentals",
    image:
      "https://media.istockphoto.com/id/520545842/photo/making-a-list-of-plants.jpg?s=612x612&w=0&k=20&c=QFJx_d0hAItFhJZi1f5avjKfJIL9HzFihwGV4sABi8w=",
    copy:
      "Start with light, watering rhythm, and pot drainage. Getting those three right solves most early plant problems.",
  },
  {
    title: "Choosing the right plant",
    image:
      "https://st3.depositphotos.com/12039320/19155/i/450/depositphotos_191551624-stock-photo-smiling-gardeners-holding-pots-flowers.jpg",
    copy:
      "Pick plants for your actual environment and routine, not just the photo. That leads to better survival and better rooms.",
  },
];

const Guide = () => {
  return (
    <section className="home-section">
      <div className="section-heading">
        <div>
          <h2>Practical plant guidance, not filler content.</h2>
        </div>
        <p>
          Alpine works better when people know what to buy and how to care for
          it. These topics give the home page more utility and more confidence.
        </p>
      </div>

      <div className="guide-grid">
        {guides.map((guide) => (
          <article className="guide-card" key={guide.title}>
            <img src={guide.image} alt={guide.title} />
            <div className="guide-card__content">
              <h3>{guide.title}</h3>
              <p>{guide.copy}</p>
              <span className="section-link">Know more</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Guide;
