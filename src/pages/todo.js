import React, { useState } from "react";
import './todo.css'; 

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const handleAddTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, { text: task, done: false }]);
            setTask("");
        }
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const handleToggleDone = (index) => {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, done: !task.done } : task
        ));
    };

    return (
        <div className="todo-page">
            <div className="todo-container">
                <h1>Todo List</h1>
                <div className="todo-input">
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Add a new task"
                    />
                    <button onClick={handleAddTask}>Add Task</button>
                </div>
                <ul className="todo-list">
                    {tasks.map((task, index) => (
                        <li key={index} className={task.done ? "done" : ""}>
                            <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() => handleToggleDone(index)}
                            />
                            <span className={task.done ? "task-done" : "task-pending"}>{task.text}</span>
                            <button onClick={() => handleDeleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;
