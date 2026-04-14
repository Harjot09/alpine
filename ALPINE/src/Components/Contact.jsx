import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import "./Contact.css";

const contactPoints = [
  {
    label: "Email",
    value: "alpinepremiumflorist2022@gmail.com",
    link: "mailto:alpinepremiumflorist2022@gmail.com",
  },
  {
    label: "Location",
    value: "Chitkara University, Rajpura, Punjab, 140401",
  },
  {
    label: "Support",
    value: "Plant questions, gifting ideas, and project enquiries",
  },
];

const supportReasons = [
  {
    title: "Plant recommendations",
    copy: "Get help choosing plants that fit your room, routine, and care level.",
  },
  {
    title: "Gifting guidance",
    copy: "Ask for combinations that feel more personal and occasion-ready.",
  },
  {
    title: "Service enquiries",
    copy: "Reach out about business supply, styling support, or custom requirements.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name) {
      alert("Name is required.");
      return false;
    }
    if (!formData.email) {
      alert("Email is required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      alert("Phone number must be 10 digits.");
      return false;
    }
    if (!formData.message) {
      alert("Message is required.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Form submitted successfully! Thank you for reaching out.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to submit the form. Please try again later.");
    }
  };

  return (
    <main className="page-shell contact-page">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <span className="contact-hero__eyebrow">Contact</span>
          <h1>Let&apos;s talk about plants, gifting, or your next green corner.</h1>
          <p>
            Reach out for plant recommendations, gifting help, or service-related
            questions. Alpine keeps the conversation warm, clear, and practical.
          </p>
        </div>

        <div className="contact-hero__panel">
          <p className="contact-hero__panel-title">Reach Alpine</p>
          <div className="contact-hero__points">
            {contactPoints.map((item) => (
              <article className="contact-hero__point" key={item.label}>
                <span>{item.label}</span>
                {item.link ? <a href={item.link}>{item.value}</a> : <p>{item.value}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-layout">
        <article className="contact-card contact-card--form">
          <div className="contact-card__intro">
            <div>
              <span className="contact-section__label">Send a message</span>
              <h2>Your details</h2>
            </div>
            <p>
              Share what you&apos;re looking for and Alpine will get back with the
              most relevant help.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__grid">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label>
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Optional"
              />
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell Alpine what you need help with"
                required
              />
            </label>

            <button type="submit" className="contact-submit">
              Send message
            </button>
          </form>
        </article>

        <aside className="contact-card contact-card--info">
          <span className="contact-section__label">Why contact Alpine</span>
          <h2>More thoughtful support than a generic contact form.</h2>
          <div className="contact-info__list">
            {supportReasons.map((item, index) => (
              <article className="contact-info__item" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
