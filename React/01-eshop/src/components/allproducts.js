import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from './cartContext'
import { FaRegStar } from 'react-icons/fa'


export function AllProducts(props) {

    const { products } = useContext(CartContext)
    const handleIncrease = () => {
        props.onClick();
    }



    console.log('All products=', products)
    return (
        <div className='products' style={props.productContainerStyle} >
            {products.map((data) => (
                <div className='card'>
                    <div className='card-head'>
                        <p className='new'>NEW</p>
                        <p className='rating'><FaRegStar /> {data.rating}</p>
                    </div>
                    <h1 className='card-name'>{data.name}</h1>
                    <img src={data.image} />
                    <p maxlength="100">{data.descr.slice(0, 100)} </p>
                    <div className="price-button">
                        <p>{data.price} €</p>
                        <button onClick={handleIncrease}>Buy</button>
                    </div >
                </div>
            ))
            }
        </div >
    )
}