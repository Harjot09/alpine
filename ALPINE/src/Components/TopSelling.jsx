import React from "react";

const products = [
  {
    title: "Leafy plants",
    label: "Indoor texture",
    image:
      "https://www.heartyculturenursery.com/cdn/shop/products/Spathyphyllum_420x420.jpg?v=1637468992",
  },
  {
    title: "Cactus",
    label: "Low maintenance",
    image:
      "https://www.heartyculturenursery.com/cdn/shop/products/002_10_420x420.jpg?v=1633236420",
  },
  {
    title: "Medicinal trees",
    label: "Useful outdoors",
    image:
      "https://www.heartyculturenursery.com/cdn/shop/products/Justiciaadhatoda_420x420.jpg?v=1608906478",
  },
  {
    title: "Indoor plants",
    label: "Room refresh",
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695073525-157654MDS_20220824-1661373696646.jpg?crop=1xw:1xh;center,top&resize=980:*",
  },
  {
    title: "Fruit trees",
    label: "Garden growers",
    image:
      "https://www.heartyculturenursery.com/cdn/shop/products/004_3_c069fa9f-ca0d-451b-b1fd-6338eea6758d_420x420.png?v=1633842281",
  },
  {
    title: "Outdoor plants",
    label: "Patio friendly",
    image:
      "https://www.heartyculturenursery.com/cdn/shop/products/Parijathcoraljasmine_420x420.jpg?v=1622831365",
  },
  {
    title: "Flower plants",
    label: "Seasonal color",
    image:
      "https://www.heartyculturenursery.com/cdn/shop/products/513A8963_420x420.png?v=1636172462",
  },
  {
    title: "Miniature plants",
    label: "Compact accents",
    image:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-miniature-gardens-diy-house-warming-with-farm-house-garden-miniature-garden-16968938094732_520x520.jpg?v=1601350543",
  },
];

const TopSelling = () => {
  return (
    <section className="home-section">
      <div className="section-heading">
        <div>
          <h2>Best sellers across indoor and outdoor spaces.</h2>
        </div>
        <p>
          These categories cover the most-requested plant styles, from simple
          desk greens to fuller garden additions.
        </p>
      </div>

      <div className="selling-grid">
        {products.map((product) => (
          <article className="selling-card" key={product.title}>
            <img src={product.image} alt={product.title} />
            <div className="selling-card__content">
              <span className="selling-card__tag">{product.label}</span>
              <h3>{product.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TopSelling;
