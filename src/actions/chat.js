// Action used to toggle on/off the chat 'footer'
export const TOGGLE_HIDDEN_BOX = 'TOGGLE_HIDDEN_BOX';

export const toggleHiddenBox = () => ({
  type: TOGGLE_HIDDEN_BOX,
});

// Controlled chatField input
export const SET_NEW_MESSAGE = 'SET_NEW_MESSAGE';

export const setNewMessage = (newMessage) => ({
  type: SET_NEW_MESSAGE,
  newMessage,
});

// Action used to connect the websocket
export const WS_CONNECT = 'WS_CONNECT';

export const wsConnect = () => ({
  type: WS_CONNECT,
});

// Action used to disconnect the websocket
export const WS_DISCONNECT = 'WS_DISCONNECT';

export const wsDisconnect = () => ({
  type: WS_DISCONNECT,
});

// called when submiting a message in the chatfield input
export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = (id, content) => ({
  type: SEND_MESSAGE,
  chatId: id,
  content,
});

// Add the last message sent in state.chat.lastSingleChat
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = (message, chatId, userId) => ({
  type: ADD_MESSAGE,
  message,
  chatId,
  userId,

});

// Store in the state the received message
export const SAVE_RECEIVED_MESSAGE = 'SAVE_RECEIVED_MESSAGE';

export const saveReceivedMessage = (receivedMessage) => ({
  type: SAVE_RECEIVED_MESSAGE,
  receivedMessage,
});

// Load via API chat conversation with another member before displaying it
export const LOAD_SINGLE_CHAT = 'LOAD_SINGLE_CHAT';

export const loadSingleChat = (id) => ({
  type: LOAD_SINGLE_CHAT,
  chatId: id,
});

// Store in the state the lastSingleChat loaded
export const SAVE_LAST_SINGLE_CHAT = 'SAVE_LAST_SINGLE_CHAT';

export const saveLastSingleChat = (singleChat) => ({
  type: SAVE_LAST_SINGLE_CHAT,
  singleChat,
});

// This action triggers when trying to contact a user. Will either create a chat instance,
// or just redirect to an existing conversation thanks to API appropriate response.
export const CREATE_NEW_CHAT = 'CREATE_NEW_CHAT';

export const createNewChat = (id) => ({
  type: CREATE_NEW_CHAT,
  chatId: id,
});
