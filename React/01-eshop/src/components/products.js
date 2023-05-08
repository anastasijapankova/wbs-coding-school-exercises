import { AllProducts } from "./allproducts"
import { BestSellers } from "./bestsellers"
import { MostPopular } from "./mostpopular"

export function Products(props) {


    return (
        <>
            <div className="card-container">
                <h1 className="card-title">Best Sellers</h1>
                <BestSellers onClick={props.onClick} />
            </div>
            <div className="card-container">
                <h1 className="card-title">Most Popular</h1>
                <MostPopular onClick={props.onClick} />
            </div>
            <div className="card-container">
                <h1 className="card-title">All Products</h1>
                <AllProducts onClick={props.onClick} />
            </div>
        </>
    )
}