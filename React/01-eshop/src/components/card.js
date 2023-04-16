import { Product } from "./product"

export function Card(props) {
    return (
        <div className="card-container">
            <h1 className="card-title">{props.title}</h1>
            <Product />
        </div>
    )
}