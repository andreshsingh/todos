import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  todos: todosReducer,
  loginCredentials: loginReducer
});
