import { FETCH_TOKEN } from './../actions/types';

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
    default:
      return state;
  }
}
