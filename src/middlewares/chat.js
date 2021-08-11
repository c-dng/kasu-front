import {
  WS_CONNECT,
  SEND_MESSAGE,
  LOAD_SINGLE_CHAT,
  saveLastSingleChat,
  WS_DISCONNECT,
  addMessage,
  CREATE_NEW_CHAT,
  loadSingleChat,
} from 'src/actions/chat';
import api from 'src/api';
import { io } from 'socket.io-client';
import { redirectTo, setLoadingFalse, setLoadingTrue } from '../actions/global';

let socket;

const chatMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      // connects the websocket only if user's connected
      if (localStorage.getItem('token')) {
        // creating the connection to socket, with env variable. will be localhost if in development
        // and will be the hosted server in production. See env.development or env.production files.
        socket = io(process.env.HOSTNAME_CHAT, { auth: { token: localStorage.getItem('token') } });
        // when a message is sent by someone, the socket will emit a 'send_message' to every other
        // connected user. With this signal is transported a payload containing
        // necessary infos to add it in state, ready to be displayed.
        socket.on('send_message', (payload) => {
          const { chatId, userId, message } = payload;
          store.dispatch(addMessage(message, chatId, userId));
        });
      }
      next(action);
      break;
    }
    case WS_DISCONNECT: {
      // disconnects the websocket only if it was previsouly defined in the WS_CONNECT action
      if (socket) {
        // emit a special kind of signal intepreted by the node server that will disconnect 
        // the websocket.
        socket.emit('disconnectAction');
      }
      next(action);
      break;
    }
    case SEND_MESSAGE: {
      const newMessage = action.content;
      const messageToSend = {
        message: newMessage,
        chatId: action.chatId,
        userId: store.getState().user.data.id,
      };
      socket.emit('send_message', messageToSend);
      next(action);
      break;
    }
    case LOAD_SINGLE_CHAT: {
      const payloadId = action.chatId;
      const userId = store.getState().user.data.id;
      const token = localStorage.getItem('token');
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      store.dispatch(setLoadingTrue());
      api
        .get(`api/v1/user/${userId}/chat/${payloadId}`)
        .then(
          (response) => {
            store.dispatch(saveLastSingleChat(response.data));

            store.dispatch(setLoadingFalse());
          },
        )
        .catch(
          () => {
            store.dispatch(setLoadingFalse());
          },
        );
      next(action);
      break;
    }
    case CREATE_NEW_CHAT: {
      const otherUserId = action.chatId;
      const userId = store.getState().user.data.id;
      store.dispatch(setLoadingTrue());
      api
        .post(`api/v1/user/${userId}/chat`, { other_user: otherUserId })
        .then(
          (response) => {
            store.dispatch(loadSingleChat(response.data.id));
            store.dispatch(redirectTo(`/conversation/${response.data.id}`));
          },
        )
        .catch(
          () => {
          },
        )
        .finally(() => {
          store.dispatch(setLoadingFalse());
        });
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default chatMiddleware;
