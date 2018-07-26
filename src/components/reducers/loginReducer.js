import { FETCH_TOKEN, LOG_OUT } from './../actions/types';

const initialState = {
  token: { jwt: '' },
  error: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    case LOG_OUT:
      return {
        ...state,
        token: { jwt: '' }
      }
    default:
      return state;
  }
}
