import React, { useState } from 'react';
import './Subscription.css';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // success | error

  // Email validation
  const isValidEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._!#$%&'*+/=?^`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    if (!isValidEmail(email)) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }

    if (!agreed) {
      setMessage('You must agree to the terms before subscribing.');
      setMessageType('error');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, agreedToTerms: agreed }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || 'Something went wrong.');
        setMessageType('error');
        return;
      }

      setMessage('Subscription saved successfully!');
      setMessageType('success');
      setEmail('');
      setAgreed(false);
    } catch (error) {
      setMessage('Network error. Please try again later.');
      setMessageType('error');
    }
  };

  return (
    <div className="subscribe">
      <h2 className="subscribe__title">Let's keep in touch</h2>
      <p className="subscribe__copy">
        Subscribe to keep your garden fresh and updated. We promise not to spam
        you!
      </p>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          className="form__email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="form__button">
          Send
        </button>

        {message && (
          <div className={`message message--${messageType}`}>
            {message}
          </div>
        )}
      </form>

      <div className="notice">
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        <span className="notice__copy">
          I agree to my email being stored and used to receive monthly updates.
        </span>
      </div>
    </div>
  );
};

export default Subscription;
