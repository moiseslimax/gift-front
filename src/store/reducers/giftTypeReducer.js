import { SET_GIFT_TYPE } from './types';

const INITIAL_STATE = { giftTypeId: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GIFT_TYPE:
      let { giftTypeId } = action.payload;
      return { ...state, giftTypeId };

    default:
      return state;
  }
};
