export function GroceryList({ groceries }) {

    return <div>
        <ul>
            {groceries.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
}