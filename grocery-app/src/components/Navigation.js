import React from "react";
import vegetables from "../assets/img/vegetables.jpg";
import fruits from "../assets/img/fruits.jpg";
import flour from "../assets/img/flour.jpg";
import snacks from "../assets/img/snacks.jpg";
import household from "../assets/img/household.jpg";
import chocolates from "../assets/img/chocolates.jpg";
import beverages from "../assets/img/beverages.jpg";
import bathroomEssentials from "../assets/img/bathroomEssentials.jpg";
import fastdelivery from "../assets/img/fastdelivery.jpg";
import freshfoodadd from "../assets/img/freshfoodadd.png";

import "./Navigation.css";

function Navigation() {
  return (
    <>
      <div className="row-wise">
        <div className="row-wise-display">
          <img className="row-img" src={vegetables} alt="vegetables"></img>
          <span className="row-img-description">Vegetables</span>
        </div>

        <div className="row-wise-display">
          <img className="row-img" src={fruits} alt="fruits"></img>
          <span className="row-img-description"> Fruits</span>
        </div>

        <div className="row-wise-display">
          <img className="row-img" src={flour} alt="cooking Essentials"></img>
          <span className="row-img-description">Cooking Essentials</span>
        </div>

        <div className="row-wise-display">
          <img className="row-img" src={snacks} alt="snacks"></img>
          <span className="row-img-description">Snacks</span>
        </div>

        <div className="row-wise-display">
          <img className="row-img" src={household} alt="household items"></img>
          <span className="row-img-description">Household Items</span>
        </div>

        <div className="row-wise-display">
          <img
            className="row-img"
            src={bathroomEssentials}
            alt="bathroom essentials"
          ></img>
          <span className="row-img-description">Bathroom Essentials</span>
        </div>

        <div className="row-wise-display">
          <img className="row-img" src={chocolates} alt="chocolates"></img>
          <span className="row-img-description">Chocolates</span>
        </div>

        <div className="row-wise-display">
          <img className="row-img" src={beverages} alt="beverages"></img>
          <span className="row-img-description">Beverages</span>
        </div>
      </div>

      <div className="ad-container">
        <img className="ad" src={fastdelivery}></img>
        <img className="ad" src={freshfoodadd}></img>
      </div>

      <div className="shop-by-category">
        <span className="shop-by-category-span">Recommended for you</span>
      </div>
      <div className="category">
        <div className="category-card">
          <img className="category-img" src={vegetables} alt="vegetables"></img>
          <span className="img-description">Fresh Vegetables</span>
        </div>

        <div className="category-card">
          <img className="category-img" src={fruits} alt="fruits"></img>
          <span className="img-description"> Fresh Fruits</span>
        </div>

        <div className="category-card">
          <img
            className="category-img"
            src={flour}
            alt="cooking Essentials"
          ></img>
          <span className="img-description">Cooking Essentials</span>
        </div>

        <div className="category-card">
          <img className="category-img" src={snacks} alt="snacks"></img>
          <span className="img-description">Mixtures, Snacks</span>
        </div>

        {/* <div className = "category-card">
            <img className = "category-img" src = {household} alt = "household items"></img>
                <span className = "img-description">Household Items</span>
            </div>

            <div className = "category-card">
            <img className = "category-img" src = {bathroomEssentials} alt = "bathroom essentials"></img>
                <span className = "img-description">Bathroom Essentials</span>
            </div> */}

        <div className="category-card">
          <img className="category-img" src={chocolates} alt="chocolates"></img>
          <span className="img-description">Chocolates, candies</span>
        </div>

        {/* <div className = "category-card">
            <img className = "category-img" src = {beverages} alt = "beverages"></img>
                <span className = "img-description">Beverages</span>

        </div>   */}
      </div>
    </>
  );
}

export default Navigation;
