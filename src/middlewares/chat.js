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

      const { username, newMessage } = store.getState().chat;

      const messageToSend = {
        author: 'toto',
        message: newMessage,
      };

      socket.emit('send_message', messageToSend);

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default chatMiddleware;
