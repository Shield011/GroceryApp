import React from 'react'
import "./Dashboard.css";


function Snacks({snacksproducts, onAdd}) {

    return (
        <div className = "row-items">
            <img className = "small" src = {snacksproducts.image} alt = {snacksproducts.name}></img>
            <h3>{snacksproducts.name}</h3>
            <div className = "price">Rs. {snacksproducts.price}</div>
            <div>
                <button className = "add-to-cart-btn" onClick = {() => onAdd(snacksproducts)}> Add to Cart</button>
            </div>
        </div>
       
    )
}

export default Snacks
