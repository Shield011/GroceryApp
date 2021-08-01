import React from 'react'
import Navigation from '../../components/Navigation'
import Vegetables from './Vegetables'
import "./Dashboard.css";
import VegetablesData from '../../common/VegetablesData';

function VegetablesDisplay({cartItems, setCartItems, onAdd}) {
  const { vegetablesproducts } = VegetablesData;
    return (
        <>
        <Navigation />
        <main className="product-list">
        <div className="row">
          {vegetablesproducts.map((vegetablesproducts) => (
            <Vegetables
              cartItems={cartItems}
              setCartItems={setCartItems}
              key={vegetablesproducts.id}
              vegetablesproducts={vegetablesproducts}
              onAdd={onAdd}
            ></Vegetables>
          ))}
        </div>
        </main>
        </>
    )
}

export default VegetablesDisplay
