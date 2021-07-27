import {
  SAVE_RECEIVED_MESSAGE, SEND_MESSAGE, SET_NEW_MESSAGE, TOGGLE_HIDDEN_BOX, SAVE_LAST_SINGLE_CHAT, ADD_MESSAGE,
} from '../actions/chat';
import { LOGOUT_USER } from '../actions/user';

export const initialState = {
  isBoxHidden: true,
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
    case ADD_MESSAGE:
      if (state.lastSingleChat.id !== action.chatId) {
        return state;
      }
      return {
        ...state,
        lastSingleChat: {
          ...state.lastSingleChat,
          messages: [
            ...state.lastSingleChat.messages,
            action.message,
          ],
        },
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
        isBoxHidden: true,
        newMessage: '',
        lastSingleChat: {},
      };

    default:
      return state;
  }
};

export default reducer;
