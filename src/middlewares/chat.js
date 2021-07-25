import { WS_CONNECT, SEND_MESSAGE, saveReceivedMessage } from 'src/actions/chat';

// Ici, on déclare notre variable
import { io } from 'socket.io-client';
import { WS_DISCONNECT } from '../actions/chat';

let socket;

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
      // on extrait du state (accessible depuis le store avec la méthode getState)
      // le nom de l'utilisateur courant et le message à envoyer
      const { username, newMessage } = store.getState().chat;

      // on prépare le message à envoyer
      const messageToSend = {
        author: 'toto',
        message: newMessage,
      };

      // on emet un évènement send_message sur le websocket accompagné du message
      socket.emit('send_message', messageToSend);

      // Ici, on peut stopper l'action ou la laisser aller plus loin.
      // Cela ne change pas grand chose, on ne traite pas pour l'instant
      // cette action dans le middleware
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default chatMiddleware;
