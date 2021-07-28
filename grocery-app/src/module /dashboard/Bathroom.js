import React from 'react'
import "./Dashboard.css";


function Bathroom({bathroomproducts, onAdd}) {
   
    return (
        <div className = "row-items">
            <img className = "small" src = {bathroomproducts.image} alt = {bathroomproducts.name}></img>
            <h3>{bathroomproducts.name}</h3>
            <div className = "price">Rs. {bathroomproducts.price}</div>
            <div>
                <button className = "add-to-cart-btn" onClick = {() => onAdd(bathroomproducts)}> Add to Cart</button>
            </div>
        </div>
    )
}

export default Bathroom