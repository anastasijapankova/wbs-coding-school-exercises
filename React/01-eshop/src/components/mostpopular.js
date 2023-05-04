import React, { useState, useEffect } from 'react'
import { data } from './01-eshop-data'
import { FaRegStar } from 'react-icons/fa'

export function MostPopular(props) {

    const filteredMostPopular = data.filter(data => data.rating > 4.5);

    const handleIncrease = () => {
        props.onClick();
    }

    return (
        <div className='products'>
            {filteredMostPopular.map((data) => (
                <div className='card'>
                    <div className='card-head'>
                        <p className='new'>NEW</p>
                        <p className='rating'><FaRegStar /> {data.rating}</p>
                    </div>
                    <h1 className='card-name'>{data.name}</h1>
                    <img src={data.image} />
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