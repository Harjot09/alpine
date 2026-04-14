import React from 'react';

const CartItem = ({ item, onQuantityChange, onDelete }) => {
    return (
        <tr>
            <td>
                <div className="cart-info">
                    <img src={item.image} alt={item.name} />
                    <div>
                        <p>{item.name}</p>
                        <small>Price: Rs {item.price}</small>
                        <button onClick={() => onDelete(item.name)}>Remove</button>
                    </div>
                </div>
            </td>
            <td>
                <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => onQuantityChange(e, item.name)}
                />
            </td>
            <td>Rs {item.price * item.quantity}</td>
        </tr>
    );
};

export default CartItem;
