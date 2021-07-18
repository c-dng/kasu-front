import React from 'react';
import {
  Button, Card, Divider, Form, Icon, Message, Link,
} from 'semantic-ui-react';

import './style.scss';

const Register = () => {
  // fake datas so that the selection of cities can be displayed
  const fakeDatas = [
    {
      key: 'Paris',
      text: 'Paris',
      value: 'Paris',
    },
    {
      key: 'Toulouse',
      text: 'Toulouse',
      value: 'Toulouse',
    },
  ];

  return (
    <div className="registerForm">
      <Card className="registerForm-card" centered>
        <Card.Content>
          <Card.Header text-align="center" className="contactForm-cardHeader">Inscription</Card.Header>
          <Divider />
          <Form className="contactForm-form">
            <Form.Input fluid label="Votre email" width="16" />
            <Form.Input fluid label="Votre pseudo" width="16" />
            <Form.Input fluid label="Votre mot de passe" width="16" />
            <Form.Group widths="equal">
              <Form.Input fluid label="Votre prénom" />
              <Form.Input fluid label="Votre nom de famille" />
            </Form.Group>
            <Form.Input fluid label="Votre adresse" width="16" />
            <Form.Input fluid label="Votre code postal" width="16" />
            <Form.Select
              fluid
              label="Votre ville"
              options={fakeDatas}
            />
            <div className="registerForm-buttonWrapper"><Button className="registerForm-registerButton">S'inscrire</Button></div>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
};
export default Register;
