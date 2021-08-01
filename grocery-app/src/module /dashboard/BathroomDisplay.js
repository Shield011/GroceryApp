import React from 'react'
import Navigation from '../../components/Navigation'
import Bathroom from './Bathroom'
import "./Dashboard.css";
import BathroomData from '../../common/BathroomData';

function BathroomDisplay({cartItems, setCartItems, onAdd}) {
  const { bathroomproducts } = BathroomData;
    return (
        <>
        <Navigation />
        <main className="product-list">
        <div className="row">
          {bathroomproducts.map((bathroomproducts) => (
            <Bathroom
              cartItems={cartItems}
              setCartItems={setCartItems}
              key={bathroomproducts.id}
              bathroomproducts={bathroomproducts}
              onAdd={onAdd}
            ></Bathroom>
          ))}
        </div>
        </main>
        </>
    )
}

export default BathroomDisplay
