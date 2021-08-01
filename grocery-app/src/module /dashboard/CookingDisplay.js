import React from 'react'
import Navigation from '../../components/Navigation'
import Cooking from './Cooking'
import "./Dashboard.css";
import CookingData from '../../common/CookingData';

function CookingDisplay({cartItems, setCartItems, onAdd}) {
  const { cookingproducts } = CookingData;
    return (
        <>
        <Navigation />
        <main className="product-list">
        <div className="row">
          {cookingproducts.map((cookingproducts) => (
            <Cooking
              cartItems={cartItems}
              setCartItems={setCartItems}
              key={cookingproducts.id}
              cookingproducts={cookingproducts}
              onAdd={onAdd}
            ></Cooking>
          ))}
        </div>
        </main>
        </>
    )
}

export default CookingDisplay
