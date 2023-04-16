export function ShoppingList() {

    const shoppingList = ['Milk', 'Eggs', 'Bread']

    return (
        <div>
            {
                shoppingList.map(item => <li>{item}</li>)
            }
        </div>
    )
}