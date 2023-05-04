import { useMousePosition } from "../custom-hooks/mouse-hook";


const MousePosition = () => {
    const { x, y } = useMousePosition();

    return (
        <div className="mouse">
            <h1>Mouse Position</h1>
            Mouse Position: ({x}, {y})
        </div>
    );
};

export default MousePosition;