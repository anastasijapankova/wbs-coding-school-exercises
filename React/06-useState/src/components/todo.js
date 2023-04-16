// 06-useState (03)
import { useState } from 'react';

export function Todo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const handleAddTask = () => {
        setTasks([...tasks, input]);
        setInput('');
    };

    const handleRemoveTask = (index) => {
        const newTasks = tasks.filter((item, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleRemoveTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}