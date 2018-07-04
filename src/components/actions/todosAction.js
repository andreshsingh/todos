import { FETCH_TODOS, NEW_TODO, DELETE_TODO, UPDATE_TODO } from './types';

export function fetchTodos() {
  console.log('fetching')
  return async function (dispatch) {
    const todos = await (await fetch('http://localhost:3001/todos.json')).json();
    dispatch({
      type: FETCH_TODOS,
      payload: todos
    })
  }
}

export function addTodo(newTodo) {
  console.log('newTodo')

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

export function deleteTodo(todo) {
  console.log('delete')

  return async function (dispatch) {
    try {
      let resp = await (await fetch('http://127.0.0.1:3001/todos/' + todo.id + '.json', {
        credentials: 'same-origin',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json'
        },
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
      })).json();
      dispatch({
        type: DELETE_TODO,
        payload: resp
      })
      return true;
    } catch (e) {
      console.log(e);
    }
  }
}

export function updateSpecificTodo(todo) {
  console.log('update')

  return async function (dispatch) {
    try {
      var isCompleteUpdate;
      if (todo.isComplete === true) {
        isCompleteUpdate = false
      }
      else {
        isCompleteUpdate = true;
      }
      let resp = await (await fetch('http://127.0.0.1:3001/todos/' + todo.id + '.json', {
        body: JSON.stringify({ isComplete: isCompleteUpdate }), // must match 'Content-Type' header
        credentials: 'same-origin',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json'
        },
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
      })).json();
      console.log(resp);
      dispatch({
        type: UPDATE_TODO,
        payload: resp
      })
    } catch (e) {
      console.log(e);
    }
  }
}
