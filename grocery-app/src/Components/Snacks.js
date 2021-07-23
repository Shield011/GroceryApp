import React from 'react'

function Snacks(props) {
    const {Snacksproducts} = props;

    return (
        <div>
            {/* <img className = "small" src = {Vegetablesproducts.image} alt = {Vegetablesproducts.name}></img> */}
            <h3>{Snacksproducts.name}</h3>
            <div>Rs{Snacksproducts.price}</div>
            <div>
                <button> Add to Cart</button>
            </div>
        </div>
       
    )
}

export default Snacks
