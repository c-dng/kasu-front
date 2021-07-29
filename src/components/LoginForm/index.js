/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Icon, Button, Form, Image,
} from 'semantic-ui-react';

import './style.scss';

import alternativeBanner from 'src/assets/images/alternativeBanner.png';
import { Redirect, Link } from 'react-router-dom';
import NoAccountBox from './NoAccountBox';

const LoginForm = ({
  pseudo,
  password,
  changePseudo,
  changePassword,
  handleLogin,
  isLogged,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  const handleChangePseudo = (evt) => {
    changePseudo(evt.target.value);
  };
  const handleChangePassword = (evt) => {
    changePassword(evt.target.value);
  };

  if (isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <div className="loginform">
      <Image className="loginform-banner" src={alternativeBanner} />
      <div className="loginform-ImageAndGlobalWrapper">
        <div className="loginform-desktopImage"></div>
        <div className="loginform-globalContentWrapper">
          <Card className="loginform-card" centered>
            <Card.Content className="loginform-cardContent">
              <Card.Header className="loginform-cardHeader" text-align="center">Connexion</Card.Header>
              <Form className="loginform-form" onSubmit={handleSubmit}>
                <Form.Field>
                  <label htmlFor="pseudo" className="loginform-fieldLabel">Pseudo</label>
                  <Form.Input className="loginform-field" type="text" id="pseudo" name="pseudo" onChange={handleChangePseudo} value={pseudo} />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="password" className="loginform-fieldLabel">Mot de passe</label>
                  <Form.Input className="loginform-field" id="password" name="password" onChange={handleChangePassword} value={password} />
                </Form.Field>
                <Form.Field>
                  <Icon name="question" /> <Link className="loginform-passwordforgot" to="/contact" exact={+true}>Mot de passe oublié </Link>
                </Form.Field>
                <Button className="login-button" type="submit">Se connecter</Button>
              </Form>
            </Card.Content>
          </Card>
          <NoAccountBox />
        </div>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  pseudo: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changePseudo: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default LoginForm;
