import React from "react";
import "./ExploreMenu.css";

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
  }
];


const ExploreMenu = () => {
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
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
