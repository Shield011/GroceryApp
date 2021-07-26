import React from 'react'
import "./Dashboard.css";


function Beverages(props) {
    const {Beveragesproducts} = props;
    return (
        <div className = "row-items">
        {/* <img className = "small" src = {Vegetablesproducts.image} alt = {Vegetablesproducts.name}></img> */}
        <h3>{Beveragesproducts.name}</h3>
        <div className = "price">Rs. {Beveragesproducts.price}</div>
        <div>
            <button> Add to Cart</button>
        </div>
    </div>
    )
}

export default Beverages
