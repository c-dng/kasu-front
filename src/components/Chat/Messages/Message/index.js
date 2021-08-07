import React from 'react';
import PropTypes from 'prop-types';
// isMine allows us to determine what css rules to use to 
// display messages in a different color and position
const Message = ({ singleMessage, isMine }) => (
  <div className={isMine ? 'message message--own' : 'message'}>
    <div className={isMine ? 'message-content message-content--own' : 'message-content'}>{singleMessage}</div>
  </div>
);

Message.propTypes = {
  singleMessage: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
};

export default Message;
