import React from 'react'
import "./Dashboard.css";


function Fruits(props) {
    const { Fruitsproducts} = props;
    return (
        <div className = "row-items">
            {/* <img className = "small" src = {Vegetablesproducts.image} alt = {Vegetablesproducts.name}></img> */}
            <h3>{Fruitsproducts.name}</h3>
            <div className = "price">Rs. {Fruitsproducts.price}</div>
            <div>
                <button > Add to Cart</button>
            </div>
        </div>
    )
}

export default Fruits
