import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionTypes";

const initialState = {
    todos: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { text: action.payload, completed: false }]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload)
            };
        default:
            return state;
    }
};

export default rootReducer;
