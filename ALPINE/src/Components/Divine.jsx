import React,{ useState, useEffect} from 'react';
import axios from 'axios'; // Import axios
import './Divine.css';

const Divine = () => {

  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([
    {
      name: "Hema Patel ",
      date: "Jan 29, 2021",
      rating: 5,
      review: "plant arrived well packaged and with clear instructions for care.",
    },
    {
      name: "Emma Weber",
      date: "Feb 26, 2022",
      rating: 2,
      review: "Too expensive",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 1,
    review: '',
  });

  const pricePerItem = 1580; // Price of one item

  // Fetch reviews from the server
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews/Divine');
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
        const response = await axios.post('http://localhost:5000/api/reviews/Divine', newReviewData);
  
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
        <img src="https://www.heartyculturenursery.com/cdn/shop/products/combo_1279x1279.jpg?v=1635773132" alt="" />
        <div className="cont">
          <h2>Pollution Control Combo / Sansevieria Hahnii Gilt / Sansevieria Trifasciata 'Twister /Sansevieria Hahnii High-Color / Sansevieria Hahnii Compacta</h2>
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

          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>

      <br />

      <div className="writ">
        <h1>Sansevieria is one of NASA's Top Ten Air Purifying plants</h1>
        <h2>1. Sansevieria Hahnii Gilt:</h2>
        <h3>
        The Gilt Edge plant has yellow margins and short leaves that look like tongues.
        Their foliage forms compact rosettes of grayish green.
        </h3>

        <h2>2. Sansevieria Hahnii High-Color:</h2>
        <h3>
        It is one of the most popular and hardy species of houseplants.
         These are some of the toughest indoor plants you will find, with their sturdy, spiky leaves that range from six inches to eight feet tall.
        Snake Plants usually have green striped leaves, whereas the variety commonly known as Mother-In-Law's Tongue has a yellow border.
        </h3>

        <h2>3. Sansevieria Hahnii Compacta:</h2>
        <h3>
        The Snake Plant Green Compacta is grown for its attractive foliage.
        Dark green leaves with light green stripes across, which are stiff and shaped like swords.
        This houseplant grows to only about 6 inches in height and width.
        Highly drought tolerant, the Snake Plant Green Compacta is forgiving and extremely adjusting to its conditions.
        It grows in low light conditions and doesn’t mind being neglected.
        </h3>

        <h2>4. Sansevieria Trifasciata 'Twister':</h2>
        <h3>
        It is a dwarfed variety of the Sansevieria type. This indoor plant has green and yellow variegated foliage.
        The plant gets its name from the way the leaves curl around to give a twisted effect.
        It grows to a height and width of about one to two feet altogether.
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

     export default Divine ;