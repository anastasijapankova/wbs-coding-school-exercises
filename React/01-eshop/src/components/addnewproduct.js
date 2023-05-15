import '../App.css'
import { useState, useContext } from 'react';
import { data } from './01-eshop-data'
import { CartContext } from './cartContext'

export function AddNewProduct(props) {

    const { products, setProducts } = useContext(CartContext)

    const [name, setName] = useState('');
    const [descr, setDescr] = useState('');
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    // const [productCategory, setProductCategory] = useState('Mobile phone');
    // const [productFeatured, setProductFeatured] = useState(false)
    // const [productColours, setProductColours] = useState(false)



    const handleProductNameChange = (e) => {
        setName(e.target.value)
    }

    const handleProductDescriptionChange = (e) => {
        setDescr(e.target.value)
    }

    const handleProductPriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handleProductRatingChange = (e) => {
        setRating(e.target.value)
    }

    // const handleProductCategoryChange = (e) => {
    //     setProductCategory(e.target.value)
    // }

    // const handleProductFeaturedChange = (e) => {
    //     setProductFeatured(e.target.value)
    // }

    // const handleProductColoursChange = (e) => {
    //     setProductColours(e.target.value)
    // }

    const submitProduct = (e) => {
        e.preventDefault();
        const newProduct = { name, descr, price, rating };
        setProducts([...products, newProduct])
        // data.push(newProduct);
        setName('');
        setDescr('');
        setPrice(0);
        setRating(0);
    }


    return (
        <div className="card-container">
            <div className='add-product-page'>
                <h1 className="card-title">Add New Product</h1>
                <form className='form' onSubmit={submitProduct}>
                    <div className='input-field'>
                        <label for="name">Product name</label>
                        <input id="name" type="text" value={name} onChange={handleProductNameChange} />
                    </div>
                    <div className='input-field'>
                        <label for="description">Product description</label>
                        <input id="description" type="textarea" value={descr} onChange={handleProductDescriptionChange} />
                    </div>
                    <div className='input-field'>
                        <label for="price">Product price</label>
                        <input id="price" type="number" value={price} onChange={handleProductPriceChange} />
                    </div>
                    <div className='input-field'>
                        <label for="rating">Product rating</label>
                        <input id="rating" type="number" value={rating} onChange={handleProductRatingChange} />
                    </div>
                    <button className='send-button '>Save</button>

                </form >
            </div >
        </div >

    )
}

