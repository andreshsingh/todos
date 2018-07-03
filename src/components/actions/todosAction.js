import { FETCH_TODOS, NEW_TODO } from './types';

export function fetchTodos() {
  return async function (dispatch) {
    const todos = await (await fetch('http://localhost:3001/todos.json')).json();
    dispatch({
      type: FETCH_TODOS,
      payload: todos
    })
  }
}

export function addTodo(newTodo) {
  return async function (dispatch) {
    try {
      let resp = await (await fetch('http://127.0.0.1:3001/todos.json', {
        body: JSON.stringify(newTodo),
        credentials: 'same-origin',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
      })).json();
      dispatch({
        type: NEW_TODO,
        payload: resp
      })
      return true;
    } catch (e) {
      console.log(e);
    }
  }
}
