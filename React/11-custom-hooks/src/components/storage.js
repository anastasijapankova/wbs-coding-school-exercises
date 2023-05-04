import { useLocalStorage } from "../custom-hooks/storage-hook";

const LocalStorage = () => {

    const [name, setName] = useLocalStorage('name', '')


    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div className="storage">
            <h1>Hello, {name || 'Guest'}!</h1>
            <input type="text" value={name} onChange={handleChange} />

        </div>
    )
}

export default LocalStorage