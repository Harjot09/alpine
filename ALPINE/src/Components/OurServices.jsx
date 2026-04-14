import React from 'react'
import { Link } from 'react-router-dom'
import "./OurServices.css"
import Footer from './Footer'

const services = [
  {
    title: "Online retail",
    image: "1.jpg",
    copy: "A curated digital storefront for plants, combos, and garden essentials with a calmer browsing experience.",
    tag: "Shopping",
  },
  {
    title: "B2B plant supply",
    image: "2.jpg",
    copy: "Support offices, hospitality spaces, retail environments, and projects that need reliable plant sourcing at scale.",
    tag: "Business",
  },
  {
    title: "Green tourism",
    image: "3.jpg",
    copy: "Create plant-led visits and experiences that connect people to local growing, conservation, and sustainable outdoor spaces.",
    tag: "Experiences",
  },
];

const serviceNotes = [
  {
    title: "Founder-led direction",
    copy: "Each service is shaped around a calmer visual identity and more thoughtful plant selection.",
  },
  {
    title: "Practical support",
    copy: "The goal is not only to sell, but to help people choose what fits their space and purpose.",
  },
  {
    title: "Flexible scale",
    copy: "Alpine can support individuals, gifting needs, and larger commercial requirements.",
  },
]

const serviceFlow = [
  {
    step: "01",
    title: "Understand the need",
    copy: "We start with the use case, setting, and kind of plant experience you want to create.",
  },
  {
    step: "02",
    title: "Shape the service",
    copy: "Recommendations are aligned to shopping, supply, or experience-building rather than a one-size-fits-all offer.",
  },
  {
    step: "03",
    title: "Deliver with clarity",
    copy: "Each service aims to stay useful, visually coherent, and easier to trust from start to finish.",
  },
]

const OurServices = () => {
  return (
    <main className="page-shell services-page">
      <section className="services-hero">
        <div className="services-hero__content">
          <span className="services-hero__eyebrow">Services</span>
          <h1>Plant retail, business supply, and greener experiences.</h1>
          <p>
            Alpine works across direct shopping, commercial plant supply, and
            destination-led experiences that connect people to nature in a calmer,
            more curated way.
          </p>

          <div className="services-hero__actions">
            <a href="#services-list" className="services-button">
              Explore Services
            </a>
            <Link to="/Contact" className="services-button services-button--ghost">
              Contact Alpine
            </Link>
          </div>
        </div>

        <div className="services-hero__panel">
          <p className="services-hero__panel-title">What Alpine offers</p>
          <div className="services-hero__notes">
            {serviceNotes.map((item) => (
              <article className="services-hero__note" key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-flow">
        <div className="section-heading section-heading--services">
          <div>
            <span className="services-section__label">How it works</span>
            <h2>Each service is built around a different kind of plant experience.</h2>
          </div>
          <p>
            From personal shopping to larger supply needs, the approach stays
            clear, practical, and visually intentional.
          </p>
        </div>

        <div className="services-flow__grid">
          {serviceFlow.map((item) => (
            <article className="services-flow__card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-list" id="services-list">
        <div className="section-heading section-heading--services">
          <div>
            <span className="services-section__label">Service List</span>
            <h2>Three ways Alpine works with plants and people.</h2>
          </div>
          <p>
            Each service is designed to feel more curated than generic, with a
            focus on fit, quality, and a calmer overall experience.
          </p>
        </div>

        <div className="services-grid-page">
          {services.map((service) => (
            <article className="services-grid-page__card" key={service.title}>
              <div className="services-grid-page__media">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="services-grid-page__content">
                <span>{service.tag}</span>
                <h2>{service.title}</h2>
                <p>{service.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div>
          <span className="services-section__label">Let us help</span>
          <h2>Need a service that matches your space, project, or idea?</h2>
          <p>
            Alpine can help you choose the right path, whether you are shopping for
            yourself, planning a business setup, or creating a plant-led experience.
          </p>
        </div>
        <Link to="/Contact" className="services-button">
          Get in touch
        </Link>
      </section>

      <Footer />
    </main>
  )
}

export default OurServices;
