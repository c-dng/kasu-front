import {
  WS_CONNECT,
  SEND_MESSAGE,
  saveReceivedMessage,
  LOAD_SINGLE_CHAT,
  saveLastSingleChat,
  WS_DISCONNECT,
} from 'src/actions/chat';
import axios from 'axios';
// Ici, on déclare notre variable
import { io } from 'socket.io-client';
import { setLoadingFalse, setLoadingTrue } from '../actions/global';

let socket;
const axiosInstance = axios.create(
  {
    baseURL: 'https://api.kasu.laetitia-dev.com/',
  },
);
const token = localStorage.getItem('token');
axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;

const chatMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      socket = io('http://localhost:3001');
      console.log('socket defined');
      socket.on('send_message', (message) => {
        store.dispatch(saveReceivedMessage(message));
      });

      next(action);
      break;
    }
    case WS_DISCONNECT: {
      socket.emit('disconnectAction');
      console.log('socket disconnected');
      next(action);
      break;
    }
    case SEND_MESSAGE: {
      const { newMessage } = store.getState().chat.newMessage;

      const messageToSend = {
        message: newMessage,
      };
      const payloadId = action.chatId;
      const userId = store.getState().user.data.id;
      store.dispatch(setLoadingTrue());
      axiosInstance
        .post(`api/v1/user/${userId}/chat/${payloadId}/message`, { content: newMessage })
        .then(
          (response) => {
            console.log('message envoyé');
            console.log(response);
            store.dispatch(setLoadingFalse());
          },
        )
        .catch(
          (error) => {
            store.dispatch(setLoadingFalse());
            console.log(error);
          },
        );
      socket.emit('send_message', messageToSend);

      next(action);
      break;
    }
    case LOAD_SINGLE_CHAT: {
      const payloadId = action.chatId;
      const userId = store.getState().user.data.id;
      store.dispatch(setLoadingTrue());
      axiosInstance
        .get(`api/v1/user/${userId}/chat/${payloadId}`)
        .then(
          (response) => {
            console.log('ça marche');
            console.log(response);
            store.dispatch(saveLastSingleChat(response.data));
            store.dispatch(setLoadingFalse());
          },
        )
        .catch(
          (error) => {
            store.dispatch(setLoadingFalse());
            console.log('ça plante');
            console.log(error);
            console.log(axiosInstance);
          },
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default chatMiddleware;
