import { TOGGLE_HIDDEN_BOX } from '../actions/chat';

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

    default:
      return state;
  }
};

export default reducer;
