import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./actions.js";
import "./TodoList.css";

const TodoList = () => {
    const [newTodo, setNewTodo] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const addNewTodo = () => {
        if (newTodo.trim() !== "") {
            dispatch(addTodo(newTodo));
            setNewTodo("");
        }
    };

    const toggleTodoItem = (index) => {
        dispatch(toggleTodo(index));
    };

    const deleteTodoItem = (index) => {
        dispatch(deleteTodo(index));
    };
    const incompleteCount = todos.filter((todo) => !todo.completed).length;
    return (
        <div className="todo-list-container">
            <h1 className="title">My Todo List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new task"
                />
                <button className="add-btn" onClick={addNewTodo}>
                    Add
                </button>
            </div>

            {todos.length > 0 && (
                <p className="incomplete-count">
                    Incomplete: {incompleteCount} / {todos.length}
                </p>
            )}
            {!todos.length > 0 && (
                <p className="no-tasks-msg">No existing tasks. Please add a task.</p>
            )}

            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className={todo.completed ? "completed" : ""}>
                        {todo.text}
                        <div className="btn-group">
                            <button
                                className="toggle-btn"
                                onClick={() => toggleTodoItem(index)}
                            >
                                {todo.completed ? "Incomplete" : "Complete"}
                            </button>
                            {/* } */}
                            <button
                                className="delete-btn"
                                onClick={() => deleteTodoItem(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
