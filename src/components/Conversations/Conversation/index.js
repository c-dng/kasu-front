/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import React from 'react';
import { Card, Image } from 'semantic-ui-react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

const Conversation = ({ pseudo, lastMessage, picture, redirectTo, userId }) => (
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
// Conversation.propTypes = {
//   pseudo: PropTypes.string.isRequired,
// };

export default Conversation;
