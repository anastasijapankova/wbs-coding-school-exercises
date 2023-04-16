const ColorBoxes = () => {

    const colors = ["red", "blue", "green", "yellow"];

    return (
        <div>
            {colors.map((color, index) => (
                <div key={index} style={{ backgroundColor: color }}>ColorBoxes</div>
            ))}
        </div>
    )
}

export default ColorBoxes;



