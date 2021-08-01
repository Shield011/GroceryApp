import React from 'react'
import Navigation from '../../components/Navigation'
import Household from './Household'
import "./Dashboard.css";
import HouseholdData from '../../common/HouseholdData';

function HouseholdDisplay({cartItems, setCartItems, onAdd}) {
  const { householdproducts } = HouseholdData;
    return (
        <>
        <Navigation />
        <main className="product-list">
        <div className="row">
          {householdproducts.map((householdproducts) => (
            <Household
              cartItems={cartItems}
              setCartItems={setCartItems}
              key={householdproducts.id}
              householdproducts={householdproducts}
              onAdd={onAdd}
            ></Household>
          ))}
        </div>
        </main>
        </>
    )
}

export default HouseholdDisplay
