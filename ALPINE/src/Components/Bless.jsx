import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import './Bless.css';

const Bless = () => {
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([
    {
      name: "Dr Sadhna Singh",
      date: "Jun 22, 2022",
      rating: 5,
      review: "Variety of plants and its accessories like fertilizer, biocharcoal are available. Gardening equipments too are available.",
    },
    {
      name: "Joshy",
      date: "Mar 14, 2021",
      rating: 1,
      review: "Can get in low price in other websites or in Irinjalakuda get it 💯 only for one",
    },
  ]);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 1,
    review: '',
  });
  const [cart, setCart] = useState([]);

  const pricePerItem = 250;

  // Fetch reviews from the server
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews/Bless');
        if (response.status === 200) {
          setReviews(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch reviews:", error.message);
      }
    };

    fetchReviews();
  }, []);

  const calculateTotal = () => pricePerItem * quantity;

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleReviewSubmit = async (e) => {
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
      const response = await axios.post('http://localhost:5000/api/reviews/Bless', newReviewData);

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
      name: "Miracle leaf/ Bryophyllum, Insulin, Aloe vera",
      quantity,
      price: calculateTotal(),
    };
    setCart([...cart, item]);
    window.alert("Item added to cart!");
  };

  return (
    <div>
      <br />
      <div className="bundle">
        <img
          src="https://www.heartyculturenursery.com/cdn/shop/products/001_1_1171822f-22ee-443d-b5be-97c5e7915880_869x869.png?v=1633608608"
          alt="Product Image"
        />
        <div className="cont">
          <h2>Miracle leaf/ Bryophyllum, Insulin, Aloe vera</h2>
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
          <p>10% Contribution goes to Forest By ALPINE - Donate</p>
          {/* Add to Cart Button */}
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>

      <div className="writ">
        <h1>Healing plants that nourish and restore</h1>

        <h2>1. Insulin</h2>
        <h3>What better to battle diabetes than this anti - diabetic miracle 'Insulin plant' that has been extensively researched upon? It is perfectly low maintenance and all in the same while being highly health benefiting. In parts of India these leaves are traditionally consumed to battle diabetes mellitus and several researches have been conducted to see its positive impact on health.

Go ahead and buy this if you need something that you don't have to bother about much, but would still be a healthy gold mine in your little garden. It is the best herb to have at home if any loved one has diabetes.

The leaves have corosolic acid that aids in insulin secretion, and thereby it is called the insulin plant.</h3>

        <h2>2. Aloe vera</h2>
        <h3>We are no strangers to the universally hailed 'wonder plant', Aloe vera. Known for its endless health benefits, it used to be planted in every house under curry leaves trees as a tradition. Bringing it back, wouldn't it be handy to have this all purpose plant in our apartments even in the busiest of the cities?
        Aloe vera is known for its antioxidant properties, skin healing tendencies, body heat reduction… and this list is literally endless. Go ahead and buy this little treasure cove, which you can propagate into multiple pots later on. It is said that having a shot of aloe vera juice every day keeps us young and healthy all life and it has centuries of documented benefits and usage through history.
        </h3>

        <h2>3. Miracle leaf Bryophyllum</h2>
        <h3>This little plant is called 'Leaf of life for its life enhancing properties and medicinal value as it is used to treat shortness of breath, asthma, bronchitis and even kidney stones. You can use this as a quick remedy to insect bites, bruises, boils and even skin ulcers. It is called 'Pancharuti' and it is truly named right, for it is a miracle.

Go ahead and buy this if you want a handy herb, an aromatic plant to spice up your table. This is a must - have when you have kids as this can be a quick remedy.</h3>
        <i>This is an excellent blood purifier and can bring your blood toxicity level to zero</i>
      </div>
      <br />

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

export default Bless;