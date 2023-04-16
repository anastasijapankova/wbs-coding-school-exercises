export function Box({ color, size }) {

    const square = {
        backgroundColor: color,
        width: size,
        height: size,
    };

    return <div style={square}></div>;

}