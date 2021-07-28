import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Messages from '../../containers/Chat/Messages';
import ChatField from '../../containers/Chat/ChatField';

const Chat = ({ }) => (
  <div className="chat">
    <Messages />
    <ChatField />
  </div>
);

Chat.propTypes = {

};
export default Chat;
