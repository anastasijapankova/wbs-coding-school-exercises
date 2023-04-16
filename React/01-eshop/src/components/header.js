import React, { useState, useEffect } from 'react'
import { Search } from "./search"
import { Cart } from "./cart"
import { Button } from './button'



export function Header() {


    return (
        <header>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png' alt='' />
            <nav><ul>
                <li><a>Home</a></li>
                <li><a>Categories</a></li>
                <li><a>Deals</a></li>
                <li><a>Contact</a></li>
            </ul>
            </nav>
            <div className="search">
                <input type="search" placeholder="Search apple.com ..." />
                <button><Search /></button>
            </div>
            <div class="shopping">
                <Cart />
                <span className='itemsnumber'>0</span>
            </div>

        </header>
    )
}