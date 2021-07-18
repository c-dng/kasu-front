import { TOGGLE_HIDDEN_BOX } from '../actions/chat';

export const initialState = {
  isBoxHidden: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_HIDDEN_BOX:
      return {
        ...state,
        isBoxHidden: !state.isBoxHidden,
      };

    default:
      return state;
  }
};

export default reducer;
