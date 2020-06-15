import { SET_ERROR } from './types';

const INITIAL_GIFTED_STATE = { page: '', errors: {} };

export default (state = INITIAL_GIFTED_STATE, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case SET_ERROR:
      let { page, error } = action.payload;
      return { ...state, page: page, errors: error };

    default:
      return state;
  }
};
