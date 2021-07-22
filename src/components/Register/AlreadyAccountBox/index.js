import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';
import './style.scss';

const AlreadyAccountBox = () => (
  <div className="alreadyAccountBox">
    <Card className="alreadyAccountBox-card">
      <Card.Content className="alreadyAccountBox-cardContent">
        <Card.Header className="alreadyAccountBox-cardHeader" text-align="center">Vous possédez déjà un compte ?</Card.Header>
        {/* the {+true} is used to resolve an error linked to semantic-ui and the "exact"
        attribute from react-router */}
        <div className="alreadyAccountBox-buttonWrapper"><Button className="alreadyAccountBox-loginButton" as={Link} to="/login" exact={+true}>Se connecter</Button></div>
      </Card.Content>
    </Card>
  </div>
);

export default AlreadyAccountBox;
