import React, { useState, useEffect } from 'react'
import { Search } from "./search"
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import '../App.css'



export function Header(props) {

    return (
        <header>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png' alt='' />
            <nav>
                <NavLink className="navigation" to="/">Home</NavLink>
                <NavLink className="navigation">Categories</NavLink>
                <NavLink className="navigation">Deals</NavLink>
                <NavLink className="navigation" to="/contact">Contact</NavLink>
                <NavLink className="navigation" to="/add-new-product">Add New Product</NavLink>
            </nav>
            <div className="search">
                <input type="search" placeholder="Search apple.com ..." />
                <button><Search /></button>
            </div>
            <div class="shopping">
                <FaShoppingCart className='carticon' />
                <div className='itemsnumber'>{props.cart}</div>
            </div>

        </header>
    )
}