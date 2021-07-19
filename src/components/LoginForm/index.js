/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Icon, Button, Form, Divider, Image,
} from 'semantic-ui-react';

import './style.scss';

import alternativeBanner from 'src/assets/alternativeBanner.png';

const LoginForm = ({
  email,
  password,
  changeEmail,
  changePassword,
  handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  const handleChangeEmail = (evt) => {
    changeEmail(evt.target.value);
  };
  const handleChangePassword = (evt) => {
    changePassword(evt.target.value);
  };

  return (
    <div className="loginform">
      <Image className="contactForm-banner" src={alternativeBanner} />
      <Card className="loginform-card" centered>
        <Card.Content className="loginform-cardContent">
          <Card.Header className="loginform-cardHeader" text-align="center">Connexion</Card.Header>
          <Form className="loginform-form" onSubmit={handleSubmit}>
            <Form.Field>
              <label htmlFor="e-mail">E-mail
                <Form.Input className="loginform-field" type="text" id="e-mail" name="e-mail" onChange={handleChangeEmail} value={email} />
              </label>
            </Form.Field>
            <Form.Field>
              <label htmlFor="password"> Mot de passe
                <Form.Input className="loginform-field" id="password" name="password" onChange={handleChangePassword} value={password} />
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
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
