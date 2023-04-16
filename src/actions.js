import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionTypes";

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: text
    };
};

export const toggleTodo = (index) => {
    return {
        type: TOGGLE_TODO,
        payload: index
    };
};

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        payload: index
    };
};
