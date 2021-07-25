import { SAVE_RECEIVED_MESSAGE, SEND_MESSAGE, SET_NEW_MESSAGE, TOGGLE_HIDDEN_BOX } from '../actions/chat';

export const initialState = {
  isBoxHidden: true,
  email: 'test',
  password: 'a',
  username: '',
  newMessage: '',
  messages: [
    {
      id: 1,
      author: 'Super chien',
      message: 'Salut ça va ?',
    },
    {
      id: 2,
      author: 'Super chat',
      message: 'T\'as pas des super croquettes ?',
    },
    {
      id: 3,
      author: 'Super chien',
      message: 'un peu ouais !',
    },
  ],
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
        messages: [...state.messages, action.receivedMessage],
      };

    default:
      return state;
  }
};

export default reducer;
