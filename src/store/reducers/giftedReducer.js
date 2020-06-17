import { SET_GIFTED } from './types';

const INITIAL_STATE = { name: '', age: '', gender: '', bond: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GIFTED:
      let { name, age, gender, bond } = action.payload;
      return { ...state, name, age, gender, bond };

    default:
      return state;
  }
};
