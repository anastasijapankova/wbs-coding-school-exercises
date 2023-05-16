import React, { useContext, useState } from 'react'
import { AllProducts } from "./allproducts"
import { BestSellers } from "./bestsellers"
import { MostPopular } from "./mostpopular"
import { CartContext } from './cartContext'

export function Products({ children }) {

    const { increase } = useContext(CartContext);

    const [isHorizontalScroll, setIsHorizontalScroll] = useState(true);

    const handleToggle = () => {
        setIsHorizontalScroll(!isHorizontalScroll);
    };

    const productContainerStyle = isHorizontalScroll
        ? { overflowX: 'auto' }
        : { display: 'flex', flexWrap: 'wrap', color: 'red' };

    return (
        <>
            <div className="toggle-view-div">
                <button className="toggle-view" onClick={handleToggle}>
                    {isHorizontalScroll ? 'Scroll View' : 'Wrap View'}
                </button>
            </div>
            <div className="card-container" style={productContainerStyle}>
                <h1 className="card-title">Best Sellers</h1>
                <BestSellers onClick={increase} />
            </div>
            <div className="card-container" style={productContainerStyle} >
                <h1 className="card-title">Most Popular</h1>
                <MostPopular onClick={increase} />
            </div>
            <div className="card-container" style={productContainerStyle} >
                <h1 className="card-title">All Products</h1>
                <AllProducts onClick={increase} />
            </div>
        </>
    )
}