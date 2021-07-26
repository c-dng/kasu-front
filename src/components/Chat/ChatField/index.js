import React from 'react';
import PropTypes from 'prop-types';

import '../style.scss';
import { Button, Image, Input } from 'semantic-ui-react';
import sendIcon from 'src/assets/images/sendMessage.png';

const ChatField = ({ manageSubmit, newMessage, setNewMessage, userId }) => (
  <div className="chatField">
    <form
      className="chatField-form"
      onSubmit={(event) => {
        event.preventDefault();
        manageSubmit(userId);
      }}
    >
      <div className="chatField-inputAndSubmit">
        <Input
          fluid
          type="text"
          className="chatField-input"
          placeholder="Saisissez votre message"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
        />
        <Button type="submit" className="chatField-submit" icon>
          <Image size="mini" src={sendIcon} className="chatField-image" />
        </Button>

      </div>
    </form>
  </div>
);

ChatField.propTypes = {
  manageSubmit: PropTypes.func.isRequired,
  newMessage: PropTypes.string.isRequired,
  setNewMessage: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

export default ChatField;
