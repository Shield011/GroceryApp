import React from 'react'
import Navigation from '../../components/Navigation'
import FruitsData from '../../common/FruitsData'
import Fruits from './Fruits'
import "./Dashboard.css"

function FruitsDisplay({cartItems, setCartItems, onAdd}) {
    const { fruitsproducts } = FruitsData;

    return (
        <>
        <Navigation />
          <main className="product-list">
             <div className="row">
            {fruitsproducts.map((fruitsproducts) => (
            <Fruits
              key={fruitsproducts.id}
              fruitsproducts={fruitsproducts}
              onAdd={onAdd}
            ></Fruits>
          ))}
        </div>
        </main>
        </>
    )
}

export default FruitsDisplay
