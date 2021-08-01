import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import vegetables from "../../assets/img/vegetables.jpg";
import fruits from "../../assets/img/fruits.jpg";
import flour from "../../assets/img/flour.jpg";
import snacks from "../../assets/img/snacks.jpg";
import chocolates from "../../assets/img/chocolates.jpg";
import fastdelivery from "../../assets/img/fastdelivery.jpg";
import freshfoodadd from "../../assets/img/freshfoodadd.png";
import Navigation from "../../components/Navigation";

function Dashboard() {
  const [cartItems, setCartItems] = useState([]);
  

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onDelete = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

 
  return (
    <div>
      <Navigation
        cartItems={cartItems}
        setCartItems={setCartItems}
        onDelete={onDelete}
        onAdd={onAdd}
      />
      <div className="ad-container">
        <img className="ad" src={fastdelivery}></img>
        <img className="ad" src={freshfoodadd}></img>
      </div>

      <div className="shop-by-category">
        <span className="shop-by-category-span">Recommended for you</span>
      </div>
      <div className="category">
        <Link to = "/vegetablesdisplay"  className = "link">
        <div className="category-card">
          <img className="category-img" src={vegetables} alt="vegetables"></img>
          <span className="img-description">Fresh Vegetables</span>
        </div>
        </Link>

        <Link to = "/fruitsdisplay" className = "link">
        <div className="category-card">
          <img className="category-img" src={fruits} alt="fruits"></img>
          <span className="img-description"> Fresh Fruits</span>
        </div>
        </Link>


        <Link to = "/cookingdisplay" className = "link">
        <div className="category-card">
          <img
            className="category-img"
            src={flour}
            alt="cooking Essentials"
          ></img>
          <span className="img-description">Cooking Essentials</span>
        </div>
        </Link>

        <Link to = "/snacksdisplay" className = "link">
        <div className="category-card">
          <img className="category-img" src={snacks} alt="snacks"></img>
          <span className="img-description">Mixtures, Snacks</span>
        </div>
        </Link>


        <Link to = "/chocolatesdisplay" className = "link">
        <div className="category-card">
          <img className="category-img" src={chocolates} alt="chocolates"></img>
          <span className="img-description">Chocolates, candies</span>
        </div>
        </Link>
      </div>
      <br />
    </div>
  );
}

export default Dashboard;
