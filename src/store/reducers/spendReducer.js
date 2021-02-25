import { SET_SPENDANDSTYLE } from './types';

const INITIAL_STATE = { spendValue: '', giftStyleSelected: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SPENDANDSTYLE:
      let { spendValue, giftStyleSelected } = action.payload;
      return { ...state, spendValue, giftStyleSelected };

    default:
      return state;
  }
};
