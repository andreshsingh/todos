import { FETCH_TODOS, NEW_TODO, DELETE_TODO, UPDATE_TODO } from './../actions/types';

const initialState = {
  todos: [],
  todo: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    case UPDATE_TODO:
      const updatedItems = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...action.payload }
        }
        return todo
      })
      return {
        ...state,
        todos: updatedItems
      }
    case NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case DELETE_TODO:
      let todos = state.todos;
      let newTodos = todos.filter(todo => todo.id !== action.payload.id);
      return {
        ...state,
        todos: newTodos
      }
    default:
      return state;
  }
}
