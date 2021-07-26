import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Message from 'src/components/Chat/Messages/Message';

import '../style.scss';

const Messages = ({ messages }) => {
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
