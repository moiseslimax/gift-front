import { combineReducers } from 'redux';

//Reducers
import ErrorReducer from './errorReducer';
import GiftedReducer from './giftedReducer';
import SpendReducer from "./spendReducer";

export default combineReducers({ errors: ErrorReducer, gifted: GiftedReducer , spended: SpendReducer });
