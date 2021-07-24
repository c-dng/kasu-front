import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ author, message, isMine }) => (
  <div className={
    isMine ? 'message message--own' : 'message'
  }
  >
    <div className="message__author">{author}</div>
    <div className="message__content">{message}</div>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
};

export default Message;
