import React, { useContext } from 'react'
import { AllProducts } from "./allproducts"
import { BestSellers } from "./bestsellers"
import { MostPopular } from "./mostpopular"
import { CartContext } from './cartContext'

export function Products({ children }) {

    const { increase } = useContext(CartContext);

    return (
        <>
            <div className="card-container">
                <h1 className="card-title">Best Sellers</h1>
                <BestSellers onClick={increase} />
            </div>
            <div className="card-container">
                <h1 className="card-title">Most Popular</h1>
                <MostPopular onClick={increase} />
            </div>
            <div className="card-container">
                <h1 className="card-title">All Products</h1>
                <AllProducts onClick={increase} />
            </div>
        </>
    )
}