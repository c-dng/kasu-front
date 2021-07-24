export const TOGGLE_HIDDEN_BOX = 'TOGGLE_HIDDEN_BOX';

export const toggleHiddenBox = () => ({
  type: TOGGLE_HIDDEN_BOX,
});

export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

export const addNewMessage = () => ({
  type: ADD_NEW_MESSAGE,
});

export const SET_NEW_MESSAGE = 'SET_NEW_MESSAGE';

export const setNewMessage = (newMessage) => ({
  type: SET_NEW_MESSAGE,
  newMessage,
});

export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';

export const changeFieldValue = (name, value) => ({
  type: CHANGE_FIELD_VALUE,
  name,
  value,
});

export const WS_CONNECT = 'WS_CONNECT';

export const wsConnect = () => ({
  type: WS_CONNECT,
});

export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const SAVE_RECEIVED_MESSAGE = 'SAVE_RECEIVED_MESSAGE';

export const saveReceivedMessage = (receivedMessage) => ({
  type: SAVE_RECEIVED_MESSAGE,
  receivedMessage,
});
