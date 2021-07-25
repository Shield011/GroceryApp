import React from 'react'

function Fruits(props) {
    const { Fruitsproducts} = props;
    return (
        <div>
            {/* <img className = "small" src = {Vegetablesproducts.image} alt = {Vegetablesproducts.name}></img> */}
            <h3>{Fruitsproducts.name}</h3>
            <div>Rs{Fruitsproducts.price}</div>
            <div>
                <button> Add to Cart</button>
            </div>
        </div>
    )
}

export default Fruits
