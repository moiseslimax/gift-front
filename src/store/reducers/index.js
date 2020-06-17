import { combineReducers } from 'redux';

//Reducers
import ErrorReducer from './errorReducer';
import GiftedReducer from './giftedReducer';

export default combineReducers({ errors: ErrorReducer, gifted: GiftedReducer });
