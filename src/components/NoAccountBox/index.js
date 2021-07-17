import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Divider } from 'semantic-ui-react';
import './style.scss';

const NoAccountBox = () => (
  <div className="noAccountBox">
    <Card className="loginform-card" centered>
      <Card.Content className="loginform-cardContent">
        <Card.Header text-align="center">Pas encore de compte ?</Card.Header>
        <Divider />
        {/* the {+true} is used to resolve an error linked to semantic-ui and the "exact"
        attribute from react-router */}
        <Button className="register-button" as={Link} to="/register" exact={+true}>S'inscrire</Button>
      </Card.Content>
    </Card>
  </div>
);

export default NoAccountBox;
