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

const chatMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      socket = io('http://localhost:3001');
      console.log('socket defined');
      socket.on('send_message', (message) => {
        console.log('tu viens de recevoir un signal "send_message" de la part de socket.io');
        const token = localStorage.getItem('token');
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
        const payloadId = action.chatId;
        const userId = store.getState().user.data.id;

        // doing an equivalent of LOAD_SINGLE_CHAT action
        axiosInstance
          .get(`api/v1/user/${userId}/chat/${payloadId}`)
          .then(
            (response) => {
              console.log('chain de then en partant de ws-connect pour reload singleChat: ça marche');
              console.log(response);
              store.dispatch(saveLastSingleChat(response.data));
            },
          )
          .catch(
            (error) => {
              console.log('chain de then en partant de ws-connect pour reload singleChat: ça plante');
              console.log(error);
            },
          );
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
      const newMessage = action.content;
      const token = localStorage.getItem('token');
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const messageToSend = {
        message: newMessage,
      };
      const payloadId = action.chatId;
      const userId = store.getState().user.data.id;
      console.log(newMessage);
      axiosInstance
        .post(`api/v1/user/${userId}/chat/${payloadId}/message`, { content: newMessage })
        .then(
          (response) => {
            console.log('message envoyé');
            console.log(response);
          },
        ).then((response) => {
          // doing an equivalent of LOAD_SINGLE_CHAT action
          axiosInstance
            .get(`api/v1/user/${userId}/chat/${payloadId}`)
            .then(
              (responseTwo) => {
                console.log('chain de then en partant de send-message pour reload singleChat: ça marche');
                console.log(responseTwo);
                store.dispatch(saveLastSingleChat(responseTwo.data));
              },
            )
            .catch(
              (errorTwo) => {
                console.log('chain de then en partant de send-message pour reload singleChat: ça plante');
                console.log(errorTwo);
                console.log(axiosInstance);
              },
            );
        })
        .catch(
          (error) => {
            store.dispatch(setLoadingFalse());
            console.log(JSON.stringify(error));
          },
        );
      socket.emit('send_message', messageToSend);

      next(action);
      break;
    }
    case LOAD_SINGLE_CHAT: {
      const payloadId = action.chatId;
      const userId = store.getState().user.data.id;
      const token = localStorage.getItem('token');
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      console.log('log pre-loading-true');
      store.dispatch(setLoadingTrue());
      console.log('log post-loading-true');
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
