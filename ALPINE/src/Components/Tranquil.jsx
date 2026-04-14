import React, {useState,useEffect} from 'react';
import axios from 'axios'; // Import axios
import './Tranquil.css';

const Tranquil = () => {

  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([
    {
      name: "Hema shankar ",
      date: "Dec 29, 2020",
      rating: 3,
      review: "Need manures for home gardening",
    },
    {
      name: "Gopal Aironi",
      date: "Jan 26, 2021",
      rating: 5,
      review: "Excellent packaging and received the plants in good condition. They have survived and growing well.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 1,
    review: '',
  });

  const pricePerItem = 599; // Price of one item

  //  Fetch reviews from the server
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews/Tranquil');
        if (response.status === 200) {
          setReviews(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch reviews:", error.message);
      }
    };

    fetchReviews();
  }, []);

  // Function to calculate total price
  const calculateTotal = () => {
    return pricePerItem * quantity;
  };

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  // Handle form submission
  const handleReviewSubmit = async(e) => {
    e.preventDefault();
    try {
      if (!newReview.name || !newReview.review) {
        throw new Error("All fields are required!");
      }

      const newReviewData = {
        name: newReview.name,
        date: new Date().toLocaleDateString(),
        rating: parseInt(newReview.rating),
        review: newReview.review,
      };

      // Post to the server
      const response = await axios.post('http://localhost:5000/api/reviews/Tranquil', newReviewData);

      if (response.status === 200) {
        // Update reviews state
        setReviews([...reviews, newReviewData]);
        setNewReview({ name: '', rating: 1, review: '' });

        // Show success popup
        window.alert("Review submitted successfully!");
      } else {
        throw new Error("Failed to save the review to the server.");
      }
    } catch (error) {
      // Show error popup
      window.alert(`Error: ${error.message}`);
    }
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    const item = {
      name: "Tranquil Trio | Jasmine, Lemon grass, Henna",
      quantity,
      price: calculateTotal(),
    };
    setCart([...cart, item]);
    window.alert("Item added to cart!");
  };
  return (
    
      <div>

      {/* Center */}
      <div className="bundle">
        <img src="https://www.heartyculturenursery.com/cdn/shop/products/001_2_7669ad9d-2814-403a-94f8-7d814b364137_869x869.png?v=1633609044" alt="" />
        <div className="cont">
          <h2>Tranquil Trio | Jasmine, Lemon grass, Henna</h2>
          
          <td>
            Quantity
            <br />
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </td>
          <td>Rs {calculateTotal()}</td>
          <p>10% Contribution goes to Forest By Heartfulness - Donate</p>
           {/* Add to Cart Button */}
           <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>

      <div className="writ">
        <h1>Rich aromatic plants that soothe and calm.</h1>
        <h2>1. Mogra Jasmine</h2>
        <h3>
          Mogra is a snow white, exquisite flower that has its own exotic sense of beauty. This is
          quite incomparable to any other flower, with its very own unique fragrance and its use
          for women to adorn their hair. In India, it is known for its great religious significance,
          being the flower of gods and goddesses. This durable flower stays fresh for a long time.
          It is also known for its medicinal and aromatherapy properties, commonly used for its healing
          and a very calming effect.
        </h3>

        <h2>2. Lemongrass</h2>
        <h3>
          Lemon grass is a unique all-purpose herb, and its properties are vast, from being a medicinal
          plant to an aromatic plant and even a pesticide. It has many names including Malabar grass, Cochin
          grass, and Barbed wire grass. Lemongrass tea is proven to reduce anxiety, lower cholesterol levels,
          prevent several infections, boost oral health. It is also used as a handy painkiller.
          <br />
          Did you know that a 2015 study concluded that drinking lemongrass tea for 30 days boosted
          hemoglobin concentration and RBC count?
        </h3>

        <h2>3. Henna</h2>
        <h3>
          We would remember the henna plant for the rich, deep red mehendi or maruthani on our hands during
          festivals and the red henna hair dye commonly used. In addition to this, it has health benefits
          like cooling body temperature and serves as an excellent ornamental outdoor tree. Henna would
          thrive in your garden when you plant it on well-drained soil and water it only once the soil
          dries out. It also loves the sunlight, so choose a nice sunny spot for it.
          <br />
          It is quite a tall shrub, that grows up to 25 feet. Did you know it was brought to India by the Mughal
          emperor Babur?
        </h3>
      </div>

     

      <br />

      
  {/* Existing Reviews */}
  <div className="revi">
        <h1>REVIEWS</h1>
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="star"
                  style={{
                    color: i < review.rating ? '#ffcc00' : '#ddd',
                  }}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <p>
              <b>{review.name}</b>
              <br />
              <i>{review.date}</i>
              <br />
              <br />
              {review.review}
            </p>
          </div>
        ))}
      </div>

      {/* Review Form */}
      <div className="review-form">
        <h2>Leave a Review</h2>
        <form onSubmit={handleReviewSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Rating:
            <select
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              required
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star} Star{star > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </label>
          <label>
            Review:
            <textarea
              name="review"
              value={newReview.review}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Submit Review</button>
        </form>
      </div>

    </div>
  );
};

export default Tranquil;