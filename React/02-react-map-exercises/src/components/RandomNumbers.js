const RandomNumbers = () => {

    const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

    return (
        <ul>
            {numbers.map((number, index) => (
                <li key={index}>{number}</li>
            ))}
        </ul>
    )
}

export default RandomNumbers;