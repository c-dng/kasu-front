import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ author, message, isMine }) => (
  <div className="message"
  >
    <div className="message-content">{message}</div>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
