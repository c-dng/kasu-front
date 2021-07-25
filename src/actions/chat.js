export const TOGGLE_HIDDEN_BOX = 'TOGGLE_HIDDEN_BOX';

export const toggleHiddenBox = () => ({
  type: TOGGLE_HIDDEN_BOX,
});

export const SET_NEW_MESSAGE = 'SET_NEW_MESSAGE';

export const setNewMessage = (newMessage) => ({
  type: SET_NEW_MESSAGE,
  newMessage,
});

export const WS_CONNECT = 'WS_CONNECT';

export const wsConnect = () => ({
  type: WS_CONNECT,
});

export const WS_DISCONNECT = 'WS_DISCONNECT';

export const wsDisconnect = () => ({
  type: WS_DISCONNECT,
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
