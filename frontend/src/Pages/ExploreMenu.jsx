import "./ExploreMenu.css";
import React, { useState } from "react";

const foodItems = [
  {
    id: 1,
    name: "Cheese Burger",
    price: 149,
    category: "Burger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 249,
    category: "Pizza",
   image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format"
  },
  {
    id: 3,
    name: "Paneer Roll",
    price: 99,
    category: "Rolls",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc"
  },
  {
    id: 4,
    name: "French Fries",
    price: 89,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add"
  },
  {
    id: 5,
    name: "Veg Biryani",
    price: 199,
    category: "Rice",
    image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972"
  },
  {
    id: 6,
    name: "Cold Coffee",
    price: 79,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
   {
    id: 7,
    name: "Cold Coffee",
    price: 79,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
   {
    id: 8,
    name: "Cold Coffee",
    price: 79,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
   {
    id: 9,
    name: "Margherita Pizza",
    price: 249,
    category: "Pizza",
   image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format"
  }
];


const ExploreMenu = () => {
  const [cart, setCart] = useState([]);

  // + add to cart
const addToCart = (item) => {
  const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
    setCart(
      cart.map(i =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      )
    );
  } else {
    setCart([...cart, { ...item, qty: 1 }]);
  }
};

// ➕ Increase qty
  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(i =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      )
    );
  };
// ➖ Decrease qty
  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(i =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter(i => i.qty > 0)
    );
  };
  // ❌ Remove item
  const removeItem = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };
    // 💰 Total Amount
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="explore-menu">
      <h1>Explore Our Menu 🍽️</h1>
       
      <div className="menu-grid">
        {foodItems.map(item => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p className="category">{item.category}</p>
              <p className="price">₹{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
       </div>
       <div className="addto_cart">
        <div>
        <h2 className="cart_icon">🛒 Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
       <div> 
      {cart.map(item => (
          <div key={item.id}>
            <p>
              {item.name} × {item.qty} = ₹{item.price * item.qty}
            </p>
            <div className="buttons">
          
            <button onClick={() => decreaseQty(item.id)}>-</button>
            
          
            <button onClick={() => increaseQty(item.id)}>+</button>
            
          
            <button onClick={() => removeItem(item.id)}>Remove</button>
            
            </div>
          </div>
        ))}
{cart.length > 0 && (
          <h3>Total Amount: ₹{totalAmount}</h3>
        )}
      </div>
      </div>
     </div>
    </div>
  );
};

export default ExploreMenu;
