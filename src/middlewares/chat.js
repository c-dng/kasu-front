/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
  WS_CONNECT,
  SEND_MESSAGE,
  saveReceivedMessage,
  LOAD_SINGLE_CHAT,
  saveLastSingleChat,
  WS_DISCONNECT,
  addMessage,
} from 'src/actions/chat';
import api from 'src/api';
// Ici, on déclare notre variable
import { io } from 'socket.io-client';
import { redirectTo, setLoadingFalse, setLoadingTrue } from '../actions/global';
import { loadUserFullData } from '../actions/user';
import { CREATE_NEW_CHAT, loadSingleChat } from '../actions/chat';

let socket;

const chatMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      if (localStorage.getItem('token')) {
        socket = io(process.env.HOSTNAME_CHAT, { auth: { token: localStorage.getItem('token') } });
        socket.on('send_message', (payload) => {
          const { chatId, userId, message } = payload;
          store.dispatch(addMessage(message, chatId, userId));
        });
      }

      next(action);
      break;
    }
    case WS_DISCONNECT: {
      if (socket) {
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
          (error) => {
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
            // store.dispatch(saveTemporaryLastSingleChat(response.data));
            // store.dispatch(saveLastSingleChat(response.data));
            store.dispatch(loadSingleChat(response.data.id));
            store.dispatch(redirectTo(`/conversation/${response.data.id}`));
          },
        )
        .catch(
          (error) => {
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
  }
};

export default chatMiddleware;
