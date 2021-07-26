import React from 'react'
import "./Dashboard.css";


function Snacks(props) {
    const {Snacksproducts} = props;

    return (
        <div className = "row-items">
            {/* <img className = "small" src = {Vegetablesproducts.image} alt = {Vegetablesproducts.name}></img> */}
            <h3>{Snacksproducts.name}</h3>
            <div className = "price">Rs. {Snacksproducts.price}</div>
            <div>
                <button> Add to Cart</button>
            </div>
        </div>
       
    )
}

export default Snacks
