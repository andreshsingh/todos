import { FETCH_TOKEN } from './types';

export function loginToRails(credentials) {
  return async function (dispatch) {
    try {
      const token = await (await fetch('http://localhost:3001/user_token.json', {
        body: JSON.stringify({
          "auth": credentials
        }),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
      })).json();
      dispatch({
        type: FETCH_TOKEN,
        payload: token
      })
    } catch (e) {
      console.log(e);
    }
  }
}
