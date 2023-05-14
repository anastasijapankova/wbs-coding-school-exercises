import '../App.css'


export function AddNewProduct() {

    return (
        <div className="card-container">
            <div className='add-product-page'>
                <h1 className="card-title">Add New Product</h1>
                <form className='form'>
                    <div className='input-field'>
                        <label for="name">Product name</label>
                        <input id="name" type="text" />
                    </div>
                    <div className='input-field'>
                        <label for="description">Product description</label>
                        <input id="description" type="textarea" />
                    </div>
                    <div className='input-field'>
                        <label for="price">Product price</label>
                        <input id="price" type="number" />
                    </div>
                    <div className='input-field'>
                        <label for="category">Product category</label>
                        <select id="category">
                            <option value="mobile-phone">Mobile phone</option>
                            <option value="mobile-accessory">Mobile accessory</option>
                            <option value="smart-watch">Smartwatch</option>
                        </select>
                    </div>

                    <div className='input-field-featured'>
                        <label for="featured">Product is featured</label>
                        <input type="checkbox" id="featured" name="featured" value="featured" />
                    </div>
                    <div className='input-field-colours'>
                        <label>Colours</label>
                        <div className='colours'>
                            <div>
                                <input type="checkbox" ></input>
                                <label>Pink</label>
                            </div>
                            <div>
                                <input type="checkbox" ></input>
                                <label>Red</label>
                            </div>
                            <div>
                                <input type="checkbox" ></input>
                                <label>Black</label>
                            </div>
                            <div>
                                <input type="checkbox" ></input>
                                <label>Sky Blue</label>
                            </div>
                            <div>
                                <input type="checkbox" ></input>
                                <label>White</label>
                            </div>
                            <div>
                                <input type="checkbox" ></input>
                                <label>Golden</label>
                            </div>
                        </div>


                        {/* Save Button */}
                    </div>
                </form>
            </div >

        </div >
    )
}

