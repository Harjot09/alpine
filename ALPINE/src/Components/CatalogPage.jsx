import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./CatalogPage.css";

const CatalogPage = ({ data }) => {
  const navigate = useNavigate();

  const handleCart = (item) => {
    const logged = localStorage.getItem("logged");
    if (!logged) {
      alert("Please login to add items to cart");
      navigate("/Login");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const itemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);

    if (itemIndex !== -1) {
      cart[itemIndex].quantity += 1;
    } else {
      cart.push({
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart`);
  };

  return (
    <main className="page-shell catalog-page">
      <section className="catalog-hero">
        <div className="catalog-hero__panel">
          <span className="catalog-hero__eyebrow">{data.eyebrow}</span>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
        </div>

        <div className="catalog-hero__stats">
          {data.stats.map((stat) => (
            <article className="catalog-stat" key={stat.title}>
              <span>{stat.label}</span>
              <h3>{stat.title}</h3>
              <p>{stat.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="catalog-topics">
        {data.topics.map((topic) => (
          <article className="catalog-topic" key={topic.title}>
            <img src={topic.image} alt={topic.title} />
            <h3>{topic.title}</h3>
            <p>{topic.copy}</p>
          </article>
        ))}
      </section>

      <section className="catalog-products">
        {data.products.map((product) => (
          <article className="catalog-product" key={product.name}>
            <img src={product.image} alt={product.name} />
            <div className="catalog-product__content">
              <span className="catalog-product__price">Rs. {product.price}</span>
              <h3>{product.name}</h3>
              <p>{product.copy}</p>
              <button onClick={() => handleCart(product)}>Add to Cart</button>
            </div>
          </article>
        ))}
      </section>

      <section className="catalog-notes">
        {data.notes.map((note) => (
          <article className="catalog-note" key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.copy}</p>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
};

export default CatalogPage;
