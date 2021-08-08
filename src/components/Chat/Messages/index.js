/* eslint-disable linebreak-style */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import Message from 'src/containers/Chat/Message';

import '../style.scss';

const Messages = ({ messages }) => {
  // using reference to do an auto-scroll to the bottom of the conversation
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="messages">

      {
        // mapping through messages to display every Message components
        messages.map(
          (message) => (
            <Message
              // using uuid-react to assign a universal unique identifier for every key attributes
              key={uuid()}
              messageUserId={message.author.id}
              singleMessage={message.content}
            />
          ),
        )

      }
      <div ref={messagesEndRef} />
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Messages.defaultProps = {
  messages: [],
};
export default Messages;
