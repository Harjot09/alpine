import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutUs.css"
import Footer from './Footer'

const highlights = [
  {
    value: "Personal",
    label: "A founder-led plant brand shaped around Harjot Kaur's taste, care philosophy, and customer focus.",
  },
  {
    value: "Practical",
    label: "Advice that helps customers choose what actually fits their space and routine.",
  },
  {
    value: "Curated",
    label: "Plant selections built for gifting, styling, and calmer everyday living.",
  },
]

const principles = [
  {
    title: "Healthy first",
    copy: "We focus on plant quality, reliable sourcing, and combinations that are easier to maintain over time.",
  },
  {
    title: "Design with function",
    copy: "Every arrangement should look good in a room and still feel realistic for the person caring for it.",
  },
  {
    title: "Clear guidance",
    copy: "From gifting to outdoor refreshes, we keep plant choices simple, understandable, and confidence-building.",
  },
]

const workflow = [
  {
    step: "01",
    title: "Discover the space",
    copy: "We start with the mood, light, purpose, and maintenance comfort level of the customer.",
  },
  {
    step: "02",
    title: "Shape the mix",
    copy: "Plants, pots, and accents are combined into a look that feels intentional instead of crowded.",
  },
  {
    step: "03",
    title: "Support the result",
    copy: "After the purchase, we stay useful with care tips, follow-ups, and service recommendations.",
  },
]

const founder = {
  name: "Harjot Kaur",
  role: "Founder",
  image: "harjot.png",
  email: "harjot362.be22@chitkara.edu.in",
  copy: "Harjot Kaur built Alpine as a personal project focused on thoughtful plant curation, calm visual design, and making green spaces feel approachable.",
  note: "Alpine is presented here as Harjot Kaur's personal project and founder-led brand.",
  details: [
    { label: "Project type", value: "Personal brand project" },
    { label: "Focus", value: "Plants, styling, and care guidance" },
    { label: "Approach", value: "Calm, practical, founder-led" },
  ],
  quote: "I wanted Alpine to feel softer, clearer, and more personal than a typical plant store.",
}

const founderStats = [
  {
    value: "Founder-led",
    label: "Every design choice reflects Harjot's visual direction and customer-first approach.",
  },
  {
    value: "Style + Care",
    label: "The project balances aesthetic presentation with realistic plant maintenance.",
  },
  {
    value: "Warm Support",
    label: "Customers are guided with practical suggestions instead of generic recommendations.",
  },
]

const AboutUs = () => {
  return (
    <main className="page-shell story-page">
      <section className="story-hero">
        <div className="story-hero__content">
          <span className="story-hero__eyebrow">Our Story</span>
          <h1>Alpine is Harjot Kaur's personal project for shaping calmer places to live.</h1>
          <p>
            What began as a personal idea grew into a plant brand centered on curated greenery,
            styling support, and guidance that makes green spaces feel more approachable.
          </p>

          <div className="story-hero__actions">
            <Link to="/Products" className="story-button">
              Explore Plants
            </Link>
            <Link to="/Contact" className="story-button story-button--ghost">
              Talk to Alpine
            </Link>
          </div>
        </div>

        <div className="story-hero__panel">
          <p className="story-hero__panel-title">What Alpine stands for</p>
          <ul>
            <li>A personal design approach shaped by Harjot's taste and point of view.</li>
            <li>Plant choices that match real homes, not just perfect photos.</li>
            <li>Helpful guidance that keeps the experience warm before and after checkout.</li>
          </ul>
        </div>
      </section>

      <section className="story-highlights">
        {highlights.map((item) => (
          <article className="story-highlights__card" key={item.value}>
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="story-grid">
        <article className="story-card story-card--feature">
          <span className="story-card__label">Why we exist</span>
          <h2>I wanted plant buying to feel guided, styled, and easier to trust.</h2>
          <p>
            Alpine was built around a simple gap Harjot noticed early: many people love
            the idea of plants, but hesitate because choices feel confusing, maintenance
            feels risky, and most stores do not connect beauty with usable advice.
          </p>
          <p>
            This project combines nursery quality with design thinking so people can
            bring home greenery that looks right, suits their routine, and lasts longer.
          </p>
        </article>

        <article className="story-card story-card--accent">
          <span className="story-card__label">What makes us different</span>
          <div className="story-principles">
            {principles.map((item) => (
              <div className="story-principles__item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="story-process">
        <div className="section-heading section-heading--story">
          <div>
            <span className="story-card__label">How we work</span>
            <h2>From first idea to final placement, the experience stays clear and personal.</h2>
          </div>
          <p>
            Alpine combines Harjot's curation, visual taste, and practical support so
            customers are not left guessing what to buy or how to care for it.
          </p>
        </div>

        <div className="story-process__grid">
          {workflow.map((item) => (
            <article className="story-process__card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="founder-section">
        <div className="founder-section__wrap">
          <article className="founder-card">
            <div className="founder-card__media">
              <img src={founder.image} alt={founder.name} />
              <div className="founder-card__quote">
                <span className="story-card__label">Personal Note</span>
                <p>{founder.quote}</p>
              </div>
            </div>

            <div className="founder-card__content">
              <span className="story-card__label">Founder</span>
              <p className="founder-card__intro">The person behind Alpine.</p>
              <h3>{founder.name}</h3>
              <span className="founder-card__role">{founder.role}</span>
              <p className="founder-card__note">{founder.note}</p>
              <p>{founder.copy}</p>

              <div className="founder-card__details">
                {founder.details.map((item) => (
                  <div className="founder-card__detail" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>

              <a href={`mailto:${founder.email}`}>{founder.email}</a>
            </div>
          </article>
        </div>

        <div className="founder-stats">
          {founderStats.map((item) => (
            <article className="founder-stats__card" key={item.value}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-cta">
        <div>
          <span className="story-card__label">Let us help</span>
          <h2>Looking for plants, gifting ideas, or a greener corner to redesign?</h2>
          <p>
            Harjot can help you choose pieces that feel right for the room, the occasion,
            and the amount of care you can realistically give.
          </p>
        </div>
        <Link to="/OurServices" className="story-button">
          View Services
        </Link>
      </section>

      <Footer />
    </main>
  )
}

export default AboutUs;
