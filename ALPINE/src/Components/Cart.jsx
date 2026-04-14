// import React, { useState, useEffect } from 'react';
// import CartItem from './CartItem';
// import "./Cart.css";

// const Cart = () => {
//     const [cart2, setCart] = useState([]);
//     const [checkout, setCheckout] = useState(false);
//     const [walletBalance, setWalletBalance] = useState(500.0); // Initial wallet balance
//     const TAX_RATE = 100.0;

//     useEffect(() => {
//         const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//         const logged = localStorage.getItem('logged');
//         if (!logged) {
//             setCart([]);
//             return;
//         }
//         setCart(savedCart);
//     }, []);

//     const handleQuantityChange = (e, itemName) => {
//         const newQuantity = Number(e.target.value);
//         if (newQuantity < 1) {
//             alert('Quantity must be at least 1');
//             return;
//         }
//         const updatedCart = cart2.map(item =>
//             item.name === itemName ? { ...item, quantity: newQuantity } : item
//         );
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     const handleDeleteItem = (itemName) => {
//         const updatedCart = cart2.filter(item => item.name !== itemName);
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     const calculateSubtotal = () => {
//         return cart2.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     };

//     const calculateTotal = () => {
//         const subtotal = calculateSubtotal();
//         return subtotal + TAX_RATE;
//     };

//     const handleCheckout = (e) => {
//         e.preventDefault();
//         const total = calculateTotal();
//         if (cart2.length === 0) {
//             alert('Cart is empty');
//             return;
//         }
//         if (checkout) {
//             alert('Checkout already done');
//             return;
//         }
//         if (walletBalance < total) {
//             alert('Insufficient wallet balance. Please add money to your wallet.');
//             return;
//         }
//         setWalletBalance(walletBalance - total);
//         setCheckout(true);
//         localStorage.removeItem('cart');
//         setCart([]);
//         alert('Successful');
//     };

//     const handleTopUp = (amount) => {
//         if (amount > 0) {
//             setWalletBalance(walletBalance + amount);
//             alert(`Wallet topped up by Rs ${amount.toFixed(2)}`);
//         } else {
//             alert('Enter a valid amount to top up.');
//         }
//     };

//     return (
//         <div className="small-container cart-page">
//             <div className="wallet-section">
//                 <h3>Wallet Balance: Rs {walletBalance.toFixed(2)}</h3>
//                 <button onClick={() => handleTopUp(500.0)}>Add Rs 500</button>
                
//                 <button onClick={() => handleTopUp(1000.0)}>Add Rs 1000</button>
//             </div>

//             {checkout && (
//                 <div className="submit-success">
//                      Successful! Your wallet has been charged. Thank you for your purchase.
//                 </div>
//             )}

//             {cart2.length === 0 ? (
//                 <div className="empty-cart">
//                     Your cart is empty. <a href="Products">Go back to shopping</a>.
//                 </div>
//             ) : (
//                 <>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Product</th>
//                                 <th>Quantity</th>
//                                 <th>Subtotal</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cart2.map(item => (
//                                 <CartItem
//                                     key={item.name}
//                                     item={item}
//                                     onQuantityChange={handleQuantityChange}
//                                     onDelete={handleDeleteItem}
//                                 />
//                             ))}
//                         </tbody>
//                     </table>

//                     <div className="total-price">
//                         <table>
//                             <tbody>
//                                 <tr>
//                                     <td>Subtotal</td>
//                                     <td>Rs {calculateSubtotal().toFixed(2)}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Tax</td>
//                                     <td>Rs {TAX_RATE.toFixed(2)}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Total</td>
//                                     <td>Rs {calculateTotal().toFixed(2)}</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                         <button type="submit" className="submitbtn" onClick={handleCheckout}>
//                             Pay From Wallet
//                         </button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Cart; 




import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const [cart2, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [walletBalance, setWalletBalance] = useState(500.0);
  const TAX_RATE = 100.0;
  const userId = 'sampleUserId123'; 

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const logged = localStorage.getItem('logged');
    if (!logged) {
      setCart([]);
      return;
    }
    setCart(savedCart);
    saveCartToMongoDB(savedCart); 
  }, []);

  const saveCartToMongoDB = async (cartItems) => {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, cartItems }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Cart saved to MongoDB:', data);
      } else {
        console.error('Error saving cart:', data.message);
      }
    } catch (error) {
      console.error('Error sending cart data to the server:', error);
    }
  };

  const handleQuantityChange = (e, itemName) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity < 1) {
      alert('Quantity must be at least 1');
      return;
    }
    const updatedCart = cart2.map(item =>
      item.name === itemName ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    saveCartToMongoDB(updatedCart); 
  };

  const handleDeleteItem = (itemName) => {
    const updatedCart = cart2.filter(item => item.name !== itemName);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    saveCartToMongoDB(updatedCart); 
  };

  const calculateSubtotal = () => {
    return cart2.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal + TAX_RATE;
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    const total = calculateTotal();
    if (cart2.length === 0) {
      alert('Cart is empty');
      return;
    }
    if (checkout) {
      alert('Checkout already done');
      return;
    }
    if (walletBalance < total) {
      alert('Insufficient wallet balance. Please add money to your wallet.');
      return;
    }
    setWalletBalance(walletBalance - total);
    setCheckout(true);
    localStorage.removeItem('cart');
    setCart([]);
    alert('Successful');
  };

  const handleTopUp = (amount) => {
    if (amount > 0) {
      setWalletBalance(walletBalance + amount);
      alert(`Wallet topped up by Rs ${amount.toFixed(2)}`);
    } else {
      alert('Enter a valid amount to top up.');
    }
  };

  return (
    <div className="small-container cart-page">
      <div className="wallet-section">
        <h3>Wallet Balance: Rs {walletBalance.toFixed(2)}</h3>
        <button onClick={() => handleTopUp(500.0)}>Add Rs 500</button>
        <button onClick={() => handleTopUp(1000.0)}>Add Rs 1000</button>
      </div>

      {checkout && (
        <div className="submit-success">
          Successful! Your wallet has been charged. Thank you for your purchase.
        </div>
      )}

      {cart2.length === 0 ? (
        <div className="empty-cart">
          Your cart is empty. <a href="Products">Go back to shopping</a>.
        </div>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart2.map(item => (
                <CartItem
                  key={item.name}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onDelete={handleDeleteItem}
                />
              ))}
            </tbody>
          </table>

          <div className="total-price">
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>Rs {calculateSubtotal().toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>Rs {TAX_RATE.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>Rs {calculateTotal().toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <button type="submit" className="submitbtn" onClick={handleCheckout}>
              Pay From Wallet
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
