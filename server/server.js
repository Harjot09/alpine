// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
 const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// const cors = require('cors');

// // Initialize dotenv to access environment variables
// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json()); // Parse incoming JSON
// app.use(cors()); // Enable Cross-Origin Requests (CORS)

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.log('Error connecting to MongoDB:', err));

// // MongoDB Schema for storing emails in the Subscription_newsletter collection
// const emailSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   agreedToTerms: { type: Boolean, required: true },
// });

// const Email = mongoose.model('EmailId', emailSchema, 'Subscription_newsletter'); // Model for Subscription_newsletter.EmailId

// // Define Rating Schema
// const ratingSchema = new mongoose.Schema({
//     productName: { type: String, required: true },
//     total: { type: Number, default: 0 },
//     count: { type: Number, default: 0 },
// });

// const Rating = mongoose.model('Rating', ratingSchema);

// // API Route to submit rating
// app.post('/api/ratings', async (req, res) => {
//     const { productName, rating } = req.body;

//     if (!productName || !rating) {
//         return res.status(400).send('Product name and rating are required');
//     }

//     try {
//         let productRating = await Rating.findOne({ productName });

//         if (!productRating) {
//             productRating = new Rating({ productName });
//         }

//         productRating.total += rating;
//         productRating.count += 1;

//         await productRating.save();
//         res.status(200).send({ message: 'Rating submitted successfully!' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// });


// // MongoDB Schema for storing contact form submissions
// const contactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String },
//   message: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// const Contact = mongoose.model('Contact', contactSchema, 'Contacts'); // Model for contact submissions

// // Nodemailer transport configuration (use App Password if 2FA enabled)
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'alpinepremiumflorist2022@gmail.com',  // Your email
//     pass: 'mavogqtdyzpfblys' // Use the App Password generated from Gmail settings
//   }
// });

// // Function to send the sample newsletter email
// const sendNewsletter = async (email) => {
//   const mailOptions = {
//     from: 'alpinepremiumflorist2022@gmail.com',
//     to: email,
//     subject: 'Welcome to Our Newsletter!',
//     html: `
//       <h1>Welcome!</h1>
//       <p>Thank you for subscribing to our newsletter. We are excited to keep you updated!</p>
//       <p>Stay tuned for the latest news.</p>
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log(`Newsletter sent to: ${email}`);
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// };

// // Route to handle subscription logic
// app.post('/subscribe', async (req, res) => {
//   const { email, agreedToTerms } = req.body;

//   // Enhanced email validation regex (allowing special characters such as ., !, +, etc.)
//   const emailRegex = /^[a-zA-Z0-9._!#$%&'*+/=?^`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ message: 'Invalid email format. Please ensure the email is structured correctly with allowed special characters.' });
//   }

//   // Check if the user has agreed to the terms
//   if (!agreedToTerms) {
//     return res.status(400).json({ message: 'You must agree to the terms before subscribing.' });
//   }

//   try {
//     // Check if the email already exists
//     const existingEmail = await Email.findOne({ email });
//     if (existingEmail) {
//       return res.status(400).json({ message: 'This email is already subscribed.' });
//     }

//     // Save the email in the database
//     const newEmail = new Email({ email, agreedToTerms });
//     await newEmail.save();

//     // Send the newsletter to the newly added user
//     await sendNewsletter(email);

//     // Respond with success message
//     return res.status(201).json({ message: 'Subscription successful and newsletter sent!' });
//   } catch (error) {
//     console.error('Error during subscription or sending email:', error);
//     return res.status(500).json({ message: 'An error occurred. Please try again later.' });
//   }
// });

// // Route to handle contact form submissions
// app.post('/api/contact', async (req, res) => {
//   const { name, email, phone, message } = req.body;

//   // Validate fields
//   if (!name || !email || !message) {
//     return res.status(400).json({ message: 'Name, email, and message are required.' });
//   }

//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ message: 'Invalid email format.' });
//   }

//   // Save contact form data to MongoDB
//   try {
//     const newContact = new Contact({ name, email, phone, message });
//     await newContact.save();

//     // Send a confirmation email to the user
//     const mailOptions = {
//       from: 'alpinepremiumflorist2022@gmail.com',
//       to: email,
//       subject: 'Thank you for contacting us',
//       html: `
//         <h1>Thank you for reaching out!</h1>
//         <p>We have received your message and will get back to you as soon as possible.</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     console.log(`Confirmation email sent to: ${email}`);

//     return res.status(201).json({ message: 'Contact form submitted successfully.' });
//   } catch (error) {
//     console.error('Error saving contact form data:', error);
//     return res.status(500).json({ message: 'Failed to submit the contact form. Please try again later.' });
//   }
// });


// // MongoDB Schema for storing cart items
// const cartSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   items: [
//     {
//       name: { type: String, required: true },
//       price: { type: Number, required: true },
//       quantity: { type: Number, required: true },
//     },
//   ],
// });

// const Cart = mongoose.model('Cart', cartSchema); // Model for Cart collection

// // API Route to save/update cart data
// app.post('/api/cart', async (req, res) => {
//   const { userId, cartItems } = req.body;

//   if (!userId || !cartItems) {
//     return res.status(400).json({ message: 'User ID and cart items are required.' });
//   }

//   try {
//     // Check if cart already exists for this user
//     let userCart = await Cart.findOne({ userId });

//     if (userCart) {
//       // Update existing cart
//       userCart.items = cartItems;
//       await userCart.save();
//     } else {
//       // Create a new cart for the user
//       userCart = new Cart({ userId, items: cartItems });
//       await userCart.save();
//     }

//     res.status(200).json({ message: 'Cart saved successfully.' });
//   } catch (err) {
//     console.error('Error saving cart:', err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });






// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

 


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// // Initialize Express
// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// // mongoose.connect('mongodb://localhost:27017/gardeningShop', { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect('mongodb://localhost:27017/your-database');
// //  .then(() => console.log('Connected to MongoDB'))
// //   .catch(err => console.error('MongoDB connection error:', err));

// // Define MongoDB schema for a product
// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   description: String,
//   image: String,
//   ratings: {
//     total: { type: Number, default: 0 },
//     count: { type: Number, default: 0 }
//   }
// });

// const Product = mongoose.model('Product', productSchema);

// // Define API endpoints
// app.post('/addProduct', async (req, res) => {
//   try {
//     const { name, price, description, image } = req.body;
//     const newProduct = new Product({ name, price, description, image });
//     await newProduct.save();
//     res.status(200).json({ message: 'Product added successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Error adding product' });
//   }
// });

// app.post('/rateProduct', async (req, res) => {
//   try {
//     const { name, rating } = req.body;
//     const product = await Product.findOne({ name });
//     if (!product) return res.status(404).json({ error: 'Product not found' });

//     product.ratings.total += rating;
//     product.ratings.count += 1;
//     await product.save();

//     res.status(200).json({ message: 'Rating added successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Error rating product' });
//   }
// });

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Alpine').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Define MongoDB schema for a product
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  ratings: {
    total: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  }
});

const Product = mongoose.model('Product', productSchema);

// Define MongoDB schema for the Cart
const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

// Define API endpoints

// Add a product
app.post('/addProduct', async (req, res) => {
  try {
    const { name, price, description, image } = req.body;
    const newProduct = new Product({ name, price, description, image });
    await newProduct.save();
    res.status(200).json({ message: 'Product added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error adding product' });
  }
});


// Add item to cart
app.post('/addToCart', async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    // Check if the item is already in the cart
    let cartItem = await CartItem.findOne({ productId });
    if (cartItem) {
      // Update the quantity if the item is already in the cart
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      // Add new cart item
      cartItem = new CartItem({ productId, quantity });
      await cartItem.save();
    }

    res.status(200).json({ message: 'Item added to cart successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error adding item to cart' });
  }
});

// Get all items in cart
app.get('/getCart', async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate('productId');
    res.status(200).json(cartItems);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching cart items' });
  }
});

// Remove item from cart
app.delete('/removeFromCart/:productId', async (req, res) => {
  try {
    const { productId } = req.params;

    // Remove the cart item by productId
    const result = await CartItem.deleteOne({ productId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Product not found in cart' });
    }

    res.status(200).json({ message: 'Item removed from cart successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error removing item from cart' });
  }
});
// MongoDB Schema for storing emails in the Subscription_newsletter collection
const emailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  agreedToTerms: { type: Boolean, required: true },
});

const Email = mongoose.model('EmailId', emailSchema, 'Subscription_newsletter'); // Model for Subscription_newsletter.EmailId

// MongoDB Schema for storing contact form submissions
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema, 'Contacts'); // Model for contact submissions

// Nodemailer transport configuration (use App Password if 2FA enabled)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alpinepremiumflorist2022@gmail.com',  // Your email
    pass: 'mavogqtdyzpfblys' // Use the App Password generated from Gmail settings
  }
});

// Function to send the sample newsletter email
const sendNewsletter = async (email) => {
  const mailOptions = {
    from: 'alpinepremiumflorist2022@gmail.com',
    to: email,
    subject: 'Welcome to Our Newsletter!',
    html: `
      <h1>Welcome!</h1>
      <p>Thank you for subscribing to our newsletter. We are excited to keep you updated!</p>
      <p>Stay tuned for the latest news.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Newsletter sent to: ${email}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Route to handle subscription logic
app.post('/subscribe', async (req, res) => {
  const { email, agreedToTerms } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  if (agreedToTerms !== true) {
    return res.status(400).json({ message: 'You must agree to the terms before subscribing.' });
  }

  const emailRegex = /^[a-zA-Z0-9._!#$%&'*+/=?^`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  try {
    const newEmail = new Email({ email, agreedToTerms });
    await newEmail.save();

    await sendNewsletter(email);

    return res.status(201).json({ message: 'Subscription successful! A confirmation email has been sent.' });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: 'This email is already subscribed.' });
    }

    console.error('Error saving subscription:', err);
    return res.status(500).json({ message: 'An internal server error occurred.' });
  }
});


// Route to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validate fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  // Save contact form data to MongoDB
  try {
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Send a confirmation email to the user
    const mailOptions = {
      from: 'alpinepremiumflorist2022@gmail.com',
      to: email,
      subject: 'Thank you for contacting us',
      html: `
        <h1>Thank you for reaching out!</h1>
        <p>We have received your message and will get back to you as soon as possible.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to: ${email}`);

    return res.status(201).json({ message: 'Contact form submitted successfully.' });
  } catch (error) {
    console.error('Error saving contact form data:', error);
    return res.status(500).json({ message: 'Failed to submit the contact form. Please try again later.' });
  }
});

// Routes for Bless reviews

// Add a new Bless review

const blessReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true }
});

const BlessReview = mongoose.model('BlessReview', blessReviewSchema);

app.post("/api/reviews/Bless", async (req, res) => {
  try {
    const { name, date, rating, review } = req.body;

    // Validate input
    if (!name || !date || !rating || !review) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newReview = new BlessReview({ name, date, rating, review });
    await newReview.save();

    res.status(200).json({ message: "Review added successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add review", details: err.message });
  }
});

// Get all Bless reviews
app.get("/api/reviews/Bless", async (req, res) => {
  try {
    const reviews = await BlessReview.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews", details: err.message });
  }
});

// Routes for Divine reviews

// Add a new Divine review

const divineReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true }
});

const DivineReview = mongoose.model('DivineReview', divineReviewSchema);

app.post("/api/reviews/Divine", async (req, res) => {
  try {
    const { name, date, rating, review } = req.body;

    // Validate input
    if (!name || !date || !rating || !review) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newReview = new DivineReview({ name, date, rating, review });
    await newReview.save();

    res.status(200).json({ message: "Review added successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add review", details: err.message });
  }
});

// Get all Divine reviews
app.get("/api/reviews/Divine", async (req, res) => {
  try {
    const reviews = await DivineReview.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews", details: err.message });
  }
});

//Destined

const destinedReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true }
});

const DestinedReview = mongoose.model('DestinedReview', destinedReviewSchema);

app.post("/api/reviews/Destined", async (req, res) => {
  try {
    const { name, date, rating, review } = req.body;

    // Validate input
    if (!name || !date || !rating || !review) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newReview = new DestinedReview({ name, date, rating, review });
    await newReview.save();

    res.status(200).json({ message: "Review added successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add review", details: err.message });
  }
});

// Get all Divine reviews
app.get("/api/reviews/Destined", async (req, res) => {
  try {
    const reviews = await DestinedReview.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews", details: err.message });
  }
});

//Tranquil

const tranquilReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true }
});

const TranquilReview = mongoose.model('TranquilReview', tranquilReviewSchema);

app.post("/api/reviews/Tranquil", async (req, res) => {
  try {
    const { name, date, rating, review } = req.body;

    // Validate input
    if (!name || !date || !rating || !review) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newReview = new TranquilReview({ name, date, rating, review });
    await newReview.save();

    res.status(200).json({ message: "Review added successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add review", details: err.message });
  }
});

// Get all Divine reviews
app.get("/api/reviews/Tranquil", async (req, res) => {
  try {
    const reviews = await TranquilReview.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews", details: err.message });
  }
});


//Server



//Signup-Login
// MongoDB User Schema
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email validation regex
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // Minimum password length
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

const User = mongoose.model("User", userSchema);

// JWT Secret key
const JWT_SECRET = "your_jwt_secret_key"; // Use a strong secret key for production

// Routes

// Signup Route
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Signup successful." });
  } catch (error) {
    res.status(500).json({ message: "Error signing up. Please try again." });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not registered." }); // Return error if email not found
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful.", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error logging in. Please try again." });
  }
});
// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
