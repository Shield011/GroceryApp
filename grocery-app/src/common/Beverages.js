import React from 'react'

function Beverages(props) {
    const {Beveragesproducts} = props;
    return (
        <div>
        {/* <img className = "small" src = {Vegetablesproducts.image} alt = {Vegetablesproducts.name}></img> */}
        <h3>{Beveragesproducts.name}</h3>
        <div>Rs{Beveragesproducts.price}</div>
        <div>
            <button> Add to Cart</button>
        </div>
    </div>
    )
}

export default Beverages
