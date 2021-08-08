import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Conversation = ({ pseudo, lastMessage, picture }) => (
  <div className="conversation">
    <Card centered className="conversation-card">
      <Card.Content className="conversation-cardContent">
        <Image
          floated="left"
          size="mini"
          circular
          src={`https://api.multiavatar.com/${picture}.png`}
        />
        <Card.Header className="conversation-cardHeader">{pseudo}</Card.Header>
        <Card.Meta className="conversation-cardMeta">{lastMessage}</Card.Meta>
      </Card.Content>
    </Card>
  </div>
);

Conversation.propTypes = {
  pseudo: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Conversation;
