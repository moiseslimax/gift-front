import { combineReducers } from 'redux';
import ErrorReducer from './errorReducer';

export default combineReducers({ errors: ErrorReducer });
