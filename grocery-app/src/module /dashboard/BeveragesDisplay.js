import React from 'react'
import Navigation from '../../components/Navigation'
import Beverages from './Beverages'
import "./Dashboard.css";
import BeveragesData from '../../common/BeveragesData';

function BeveragesDisplay({cartItems, setCartItems, onAdd}) {
    const { beveragesproducts } = BeveragesData;
    return (
        <>
        <Navigation />
        <main className="product-list">
        <div className="row">
          {beveragesproducts.map((beveragesproducts ) => (
            <Beverages
              cartItems={cartItems}
              setCartItems={setCartItems}
              key={beveragesproducts.id}
              beveragesproducts ={beveragesproducts }
              onAdd={onAdd}
            ></Beverages>
          ))}
        </div>
        </main>
        </>
    )
}

export default BeveragesDisplay
