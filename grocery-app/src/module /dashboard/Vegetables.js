import React from 'react';
import "./Dashboard.css";



function Vegetables({Vegetablesproducts, cartItems, setCartItems}) {
   

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
      };
    
   
    return (   
        <div className = "row-items">
            {/* <img className = "small" src = {Vegetablesproducts.image} alt = {Vegetablesproducts.name}></img> */}
            <h3>{Vegetablesproducts.name}</h3>
            <div className = "price">Rs. {Vegetablesproducts.price}</div>
            <div>
                <button onClick = {onAdd}> Add to Cart</button>
            </div>
        </div>
    )
}

export default Vegetables
