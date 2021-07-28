import React from 'react'
import "./Dashboard.css";


function Fruits({fruitsproducts, onAdd}) {
   
    return (
        <div className = "row-items">
            <img className = "small" src = {fruitsproducts.image} alt = {fruitsproducts.name}></img>
            <h3>{fruitsproducts.name}</h3>
            <div className = "price">Rs. {fruitsproducts.price}</div>
            <div>
                <button className = "add-to-cart-btn" onClick = {() => onAdd(fruitsproducts)}> Add to Cart</button>
            </div>
        </div>
    )
}

export default Fruits
