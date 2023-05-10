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
                    <div className='input-field'>
                        <label for="featured">Product is featured</label>
                        <input type="checkbox" id="featured" name="featured" value="featured" />
                    </div>
                    <div className='input-field'>
                        <label for="colours">Colours</label>
                        <div className='input-field'>
                            <input type="checkbox" id="pink" name="pink" value="pink" />
                            <label for="pink">Pink</label>
                            <input type="checkbox" id="red" name="red" value="red" />
                            <label for="red">Red</label>
                            <input type="checkbox" id="black" name="black" value="black" />
                            <label for="black">Black</label>
                            <input type="checkbox" id="skyblue" name="skyblue" value="skyblue" />
                            <label for="skyblue">Sky Blue</label>
                            <input type="checkbox" id="white" name="white" value="white" />
                            <label for="white">White</label>
                            <input type="checkbox" id="golden" name="golden" value="golden" />
                            <label for="golden">Golden</label>
                        </div>
                        {/* Save Button */}
                    </div>
                </form>
            </div >

        </div>
    )
}

