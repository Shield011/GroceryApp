import React from 'react'
import Navigation from '../../components/Navigation'
import Snacks from './Snacks'
import "./Dashboard.css";
import SnacksData from '../../common/SnacksData';

function SnacksDisplay({cartItems, setCartItems, onAdd}) {
    const {snacksproducts} = SnacksData;
    return (
        <>
        <Navigation />
        <main className="product-list">
        <div className="row">
          {snacksproducts.map((snacksproducts) => (
            <Snacks
              cartItems={cartItems}
              setCartItems={setCartItems}
              key={snacksproducts.id}
              snacksproducts={snacksproducts}
              onAdd={onAdd}
            ></Snacks>
          ))}
        </div>
        </main>
        </>
    )
}

export default SnacksDisplay
