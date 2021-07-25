import React from 'react'

function Vegetables(props) {
    const {Vegetablesproducts} = props;
    
   
    return (   
        <div>
            {/* <img className = "small" src = {Vegetablesproducts.image} alt = {Vegetablesproducts.name}></img> */}
            <h3>{Vegetablesproducts.name}</h3>
            <div>Rs{Vegetablesproducts.price}</div>
            <div>
                <button> Add to Cart</button>
            </div>
        </div>
    )
}

export default Vegetables
