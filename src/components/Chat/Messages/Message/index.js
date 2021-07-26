import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ singleMessage, isMine }) => (
  <div className="message">
    <div className="message-content">{singleMessage}</div>
  </div>
);

Message.propTypes = {
  singleMessage: PropTypes.string.isRequired,
};

export default Message;
