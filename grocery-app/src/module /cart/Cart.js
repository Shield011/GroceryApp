import React, {useState} from 'react'

function Cart(cartItems, setCartItems) {
   
    return (
       <>
            <h2> Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div> Your Cart is Empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}</div>

                        
            </div>

))}
                

                
          </>  
     )  
   )}
                
    
export default Cart
 