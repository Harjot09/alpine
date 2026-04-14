import React from 'react'
import "./Products.css"
import { Link } from 'react-router-dom'
import Footer from './Footer'

const productCategories = [
  {
    title: "Gardening",
    route: "/Gardening",
    label: "Tools and essentials",
    copy: "Build your base with practical items for potting, maintenance, and everyday garden care.",
    image: "https://assets.wfcdn.com/im/29185591/resize-h755-w755%5Ecompr-r85/1084/108412659/Jean+Pierre+Planter+Urn+Planter.jpg",
  },
  {
    title: "Seeds",
    route: "/Seed",
    label: "Start from scratch",
    copy: "Grow from seed with options for kitchen gardens, seasonal flowers, and longer-term planting.",
    image: "https://popshopamerica.com/wp-content/uploads/2015/05/seed-packets-1.jpg",
  },
  {
    title: "Pots",
    route: "/Pots",
    label: "Display and structure",
    copy: "Choose planters that help plants sit better in the room, not just containers that happen to fit.",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-container-set/p/p/4/05-inkul-flowerpots-multicolor-05-inkulture-original-imagm4eerjje3smq.jpeg?q=90&crop=false",
  },
  {
    title: "Fertilizers",
    route: "/Fertilizers",
    label: "Soil support",
    copy: "Keep growth steady with nutrition options that support flowers, foliage, and healthier roots.",
    image: "https://images.thdstatic.com/productImages/5f0c1127-da34-42aa-8c54-04fe529278e1/svn/vermont-organics-reclamation-soil-organic-plant-food-ntri441-c3_600.jpg",
  },
  {
    title: "Accessories",
    route: "/Acessories",
    label: "Useful extras",
    copy: "Add the small tools and details that make day-to-day plant care less messy and more consistent.",
    image: "https://image.made-in-china.com/2f0j00bGQkERTMuBze/3-Piece-Set-Mini-Gardening-Potting-Tools-Wooden-Handle-Shovel-Rake-Shovel-Multifunctional-Household-Plant-Bonsai-Tools.webp",
  },
  {
    title: "Pebbles",
    route: "/Pebbles",
    label: "Finishing texture",
    copy: "Use decorative stones and top layers to sharpen the final look of planters, trays, and display bowls.",
    image: "https://i5.walmartimages.com/asr/dd77780a-6107-4abe-9c88-33a7a9e478f1.8263de2b5a2c4eac3e510b1922a5a7eb.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
];

const shoppingNotes = [
  {
    title: "Choose by outcome",
    copy: "Start with the result you want: styling, growth support, repotting, or building from seed.",
  },
  {
    title: "Mix practical and visual",
    copy: "The best setups usually combine care essentials with display pieces that fit the room.",
  },
  {
    title: "Build in layers",
    copy: "Plants work better when pots, soil support, and small accessories are chosen together.",
  },
]

const categorySteps = [
  {
    step: "01",
    title: "Pick a category",
    copy: "Browse the catalog by what part of the plant setup you want to improve first.",
  },
  {
    step: "02",
    title: "Explore the selection",
    copy: "Each category page groups products, starter guidance, and useful context together.",
  },
  {
    step: "03",
    title: "Build your mix",
    copy: "Combine care tools, decorative pieces, and growing support into a more complete purchase.",
  },
]

const Products = () => {
  return (
    <main className='page-shell products-page'>
      <section className="products-hero">
        <div className="products-hero__content">
          <span className="products-hero__eyebrow">Plants</span>
          <h1>Choose the layer of the garden you want to build.</h1>
          <p>
            Browse by category instead of digging through an unstructured catalog.
            Each group is arranged around how it contributes to the final space.
          </p>

          <div className="products-hero__actions">
            <a href="#plants-catalog" className="products-button">
              Browse Categories
            </a>
            <Link to="/OurServices" className="products-button products-button--ghost">
              View Services
            </Link>
          </div>
        </div>

        <div className="products-hero__panel">
          <p className="products-hero__panel-title">Shop smarter</p>
          <div className="products-hero__tips">
            {shoppingNotes.map((item) => (
              <article className="products-hero__tip" key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="products-flow">
        <div className="section-heading section-heading--products">
          <div>
            <span className="products-section__label">How to shop</span>
            <h2>Build the space one decision at a time.</h2>
          </div>
          <p>
            Start with what you need most, then layer in structure, styling,
            and care support as the setup becomes more complete.
          </p>
        </div>

        <div className="products-flow__grid">
          {categorySteps.map((item) => (
            <article className="products-flow__card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="products-catalog" id="plants-catalog">
        <div className="section-heading section-heading--products">
          <div>
            <span className="products-section__label">Catalog</span>
            <h2>Explore each product category.</h2>
          </div>
          <p>
            Whether you are starting from seeds, repotting old favorites, or
            refining the final look, each section gives you a more focused path.
          </p>
        </div>

        <div className="products-grid">
          {productCategories.map((item) => (
            <Link to={item.route} className="product-card" key={item.title}>
              <div className="product-card__media">
                <img src={item.image} className="product-card__image" alt={item.title} />
              </div>
              <div className="product-card__content">
                <span className="product-card__label">{item.label}</span>
                <h2 className="product-card__title">{item.title}</h2>
                <p className="product-card__description">{item.copy}</p>
                <span className="product-card__link">Open category</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Products
