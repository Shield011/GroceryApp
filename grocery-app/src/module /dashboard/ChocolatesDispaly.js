import React from 'react'
import Navigation from '../../components/Navigation'
import Chocolates from './Chocolates';
import "./Dashboard.css";
import ChocolatesData from '../../common/ChocolatesData';

function ChocolatesDisplay({cartItems, setCartItems, onAdd}) {
  const { chocolatesproducts } = ChocolatesData;
    return (
        <>
        <Navigation />
        <main className="product-list">
        <div className="row">
          {chocolatesproducts.map((chocolatesproducts) => (
            <Chocolates
              cartItems={cartItems}
              setCartItems={setCartItems}
              key={chocolatesproducts.id}
              chocolatesproducts={chocolatesproducts}
              onAdd={onAdd}
            ></Chocolates>
          ))}
        </div>
        </main>
        </>
    )
}

export default ChocolatesDisplay
