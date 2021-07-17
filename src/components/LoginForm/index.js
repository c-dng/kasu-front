/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Card, Icon, Button, Form, Divider,
} from 'semantic-ui-react';

import './style.scss';

const LoginForm = () => (
  <div className="loginform">
    <Card className="loginform-card" centered>
      <Card.Content className="loginform-cardContent">
        <Card.Header text-align="center">Connexion</Card.Header>
        <Divider />
        <Form className="loginform-form">
          <Form.Field>
            <label htmlFor="e-mail">E-mail
              <Form.Input className="loginform-field" type="text" id="e-mail" name="e-mail" />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="password"> Mot de passe
              <Form.Input className="loginform-field" id="password" name="password" />
            </label>
          </Form.Field>
          <Form.Field>
            <Icon name="question" /> Mot de passe oublié
          </Form.Field>
          <Button className="login-button" type="submit">Se connecter</Button>
        </Form>
      </Card.Content>
    </Card>
  </div>
);

export default LoginForm;
