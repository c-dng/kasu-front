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
      // adresse serveur prod http://websocket.kasu.laetitia-dev.com/
      socket = io('http://localhost:3001/', { auth: { token: localStorage.getItem('token') } });
      console.log('socket defined');
      socket.on('send_message', (payload) => {
        console.log('tu viens de recevoir un signal "send_message" de la part de socket.io');
        const { chatId, userId, message } = payload;
        store.dispatch(addMessage(message, chatId, userId));
      });

      next(action);
      break;
    }
    case WS_DISCONNECT: {
      if (socket) {
        socket.emit('disconnectAction');
      }
      console.log('socket disconnected');
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

      console.log('Envoie du message suivant en socket :', messageToSend);
      socket.emit('send_message', messageToSend);
      next(action);
      break;
    }
    case LOAD_SINGLE_CHAT: {
      const payloadId = action.chatId;
      const userId = store.getState().user.data.id;
      const token = localStorage.getItem('token');
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      console.log('log pre-loading-true');
      store.dispatch(setLoadingTrue());
      console.log('log post-loading-true');
      api
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
          },
        );
      next(action);
      break;
    }
    case CREATE_NEW_CHAT: {
      const otherUserId = action.chatId;
      const userId = store.getState().user.data.id;
      console.log('creating new chat for otherUserId: ', otherUserId);
      console.log('creating new chat by userId ', userId);
      store.dispatch(setLoadingTrue());
      api
        .post(`api/v1/user/${userId}/chat`, { other_user: otherUserId })
        .then(
          (response) => {
            console.log('la conversation a bien été créée');
            console.log(response);
            console.log('loading single chat');
            console.log('create_new_chat action response.data pre-dispatch: ', response.data)
            // store.dispatch(saveTemporaryLastSingleChat(response.data));
            // store.dispatch(saveLastSingleChat(response.data));
            store.dispatch(loadSingleChat(response.data.id));
            store.dispatch(redirectTo(`/conversation/${response.data.id}`));
          },
        )
        .catch(
          (error) => {
            console.log('la conversation n\'a pas été créée');
            console.log(error);
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
