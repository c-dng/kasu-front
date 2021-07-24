import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Message from 'src/containers/Chat/Message.js';

import '../style.scss';

const Messages = ({ messages }) => {
  // on demande au hook useRef de nous créer une référence
  const ref = useRef();

  useEffect(
    () => {
      ref.current.scrollTop = ref.current.scrollHeight;
    },
    [messages],
  );
  return (
    <div className="messages" ref={ref}>
      {
        messages.map(
          (message) => <Message key={message.id} {...message} />,
        )
      }
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Messages;
