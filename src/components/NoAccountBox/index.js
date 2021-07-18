import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Divider } from 'semantic-ui-react';
import './style.scss';

const NoAccountBox = () => (
  <div className="noAccountBox">
    <Card className="noAccountBox-card" centered>
      <Card.Content className="noAccount-cardContent">
        <Card.Header text-align="center">Pas encore de compte ?</Card.Header>
        <Divider />
        {/* the {+true} is used to resolve an error linked to semantic-ui and the "exact"
        attribute from react-router */}
        <div className="noAccountBox-buttonWrapper"><Button className="noAccount-registerButton" as={Link} to="/register" exact={+true}>S'inscrire</Button></div>
      </Card.Content>
    </Card>
  </div>
);

export default NoAccountBox;
