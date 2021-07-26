import {
  SAVE_RECEIVED_MESSAGE, SEND_MESSAGE, SET_NEW_MESSAGE, TOGGLE_HIDDEN_BOX, SAVE_LAST_SINGLE_CHAT,
} from '../actions/chat';
import { LOGOUT_USER } from '../actions/user';

export const initialState = {
  isBoxHidden: true,
  email: '',
  password: '',
  username: '',
  newMessage: '',
  lastSingleChat: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_HIDDEN_BOX:
      return {
        ...state,
        isBoxHidden: !state.isBoxHidden,
      };
    case SET_NEW_MESSAGE:
      return {
        ...state,
        newMessage: action.newMessage,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        newMessage: '',
      };
    case SAVE_RECEIVED_MESSAGE:
      return {
        ...state,
        // A FAIRE
      };
    case SAVE_LAST_SINGLE_CHAT:
      return {
        ...state,
        lastSingleChat: action.singleChat,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isBoxHidden: true,
        email: '',
        password: '',
        username: '',
        newMessage: '',
        lastSingleChat: {},
      };

    default:
      return state;
  }
};

export default reducer;
