import React from 'react'
import "./Dashboard.css";


function Cooking({cookingproducts, onAdd}) {
   
    return (
        <div className = "row-items">
            <img className = "small" src = {cookingproducts.image} alt = {cookingproducts.name}></img>
            <h3>{cookingproducts.name}</h3>
            <div className = "price">Rs. {cookingproducts.price}</div>
            <div>
                <button className = "add-to-cart-btn" onClick = {() => onAdd(cookingproducts)}> Add to Cart</button>
            </div>
        </div>
    )
}

export default Cooking;