import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../componets/Title'
import "./cart.css"

export default function EmptyCart() {
    return (
        <div className = "container mt-5">
             <Title name="My" title="Cart" />
            <div className = "empty-cart">
                <h1 className = "empty-cart">Your have no item added in your Cart</h1>
                <Link to = "/dashboard">
                <button className = "start-shopping">
                    Start Shopping
                </button>
                </Link>
            </div>
            
        </div>
    )
}
