import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Messages from '../../containers/Chat/Messages';
import ChatField from '../../containers/Chat/ChatField';

const Chat = ({ onChatLoad }) => {
  useEffect(
    onChatLoad,
    [],
  );

  return (
    <div className="chat">
      <Messages />
      <ChatField />
    </div>
  );
};

Chat.propTypes = {
  onChatLoad: PropTypes.func.isRequired,
};
export default Chat;
