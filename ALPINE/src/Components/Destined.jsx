import React,{ useState, useEffect} from 'react';
import axios from 'axios'; // Import axios
import './Destined.css';

const Destined = () => {

  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([
    {
      name: "Hena Patel ",
      date: "Jan 29, 2021",
      rating: 5,
      review: "plant arrived well packaged and with clear instructions for care.",
    },
    {
      name: "Elina Weber",
      date: "Feb 26, 2022",
      rating: 4,
      review: "This plant can help with stress relief and relaxation. It can be placed on a windowsill or near a bedside.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 1,
    review: '',
  });

  const pricePerItem = 450; // Price of one item

  //  Fetch reviews from the server
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews/Destined');
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
      const response = await axios.post('http://localhost:5000/api/reviews/Destined', newReviewData);

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
      name: "Pollution Control Combo / Sansevieria Hahnii Gilt / Sansevieria Trifasciata 'Twister /Sansevieria Hahnii High-Color / Sansevieria Hahnii Compacta",
      quantity,
      price: calculateTotal(),
    };
    setCart([...cart, item]);
    window.alert("Item added to cart!");
  };

  return (
    <div>
     

      <br />

      {/* Center */}
      <div className="bundle">
        <img src="https://www.heartyculturenursery.com/cdn/shop/products/delightcombonew_800x800.jpg?v=1633842400" alt="" />
        <div className="cont">
          <h2>Destined To Delight | Dragon fruit, Guava, Mulberry</h2>
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

      <br />

      <div className="writ">
        <h1>Beautiful and bountiful fruit plants.</h1>
        <h2>1. Dragon fruit sapling</h2>
        <h3>
          Though it is admired for its unique look and taste, its health benefits are said
          to be innumerable. It is a tropical fruit that has become extremely popular in the
          recent years. It has bright red skin with green scales that resemble a dragon and
          hence rightly named Dragon fruit. It has small quantities of many nutrients and is
          considered to be a highly nutrient-dense fruit.
          <br />
          Go ahead and buy this if you want something truly exotic and nutrient-dense.
        </h3>

        <h2>2. Guava sapling</h2>
        <h3>
          We are no stranger to this crunchy textured fruit we all love. But how would it be
          to just walk around your house, plucking one right off the tree, and munching on it?
          Guava is mildly sweet with its numerous seeds and the green bumpy skin we are all too
          familiar with. In South East Asia, it is a street favorite where it is dipped in chili or
          sprinkled with salt.
          <br />
          Did you know it was introduced in Asia by the Portuguese in the 17th century?
        </h3>

        <h2>3. Mulberry sapling</h2>
        <h3>
          Mulberry is generally a gardener’s favorite as it gives shade and fruit for generations unlike the
          other trees. It is a haven for birds as they love to snack on those little berries. This is
          an excellent addition to your backyard or garden if you want lazy summer afternoons where
          you can just eat fists full of little berries. The fruits can be any color - white,
          blue, red, purple, or black. Wait to see what your fruit’s color would be.
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

     export default Destined ;