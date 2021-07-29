import React from 'react'
import "./Dashboard.css";


function Household({householdproducts, onAdd}) {
   
    return (
        <div className = "row-items">
            <img className = "small" src = {householdproducts.image} alt = {householdproducts.name}></img>
            <h3>{householdproducts.name}</h3>
            <div className = "price">Rs. {householdproducts.price}</div>
            <div>
                <button className = "add-to-cart-btn" onClick = {() => onAdd(householdproducts)}> Add to Cart</button>
            </div>
        </div>
    )
}

export default Household
