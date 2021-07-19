import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Conversation = () => (
  <div className="conversation">
    <Card centered className="conversation-card">
      <Card.Content className="conversation-cardContent">
        <Image
          floated="left"
          size="mini"
          circular
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta className="">Lorem ipsum dolor sit amet consec tetur adipisicing elit </Card.Meta>
      </Card.Content>
    </Card>
  </div>
);

export default Conversation;
