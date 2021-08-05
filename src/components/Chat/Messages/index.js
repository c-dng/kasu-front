/* eslint-disable linebreak-style */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Message from 'src/containers/Chat/Message';

import '../style.scss';

const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="messages">

      {

        messages.map(
          (message, index) => {
            {/* console.log('messages log : ', messages);
            console.log('message log : ', message); */}
            return (
              <Message
                key={index}
                messageUserId={message.author.id}
                singleMessage={message.content}
              />
            );
          },
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
