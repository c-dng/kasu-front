/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Button, Card, Form, Image,
} from 'semantic-ui-react';

import './style.scss';
import alternativeBanner from 'src/assets/alternativeBanner.png';
import AlreadyAccountBox from './AlreadyAccountBox';

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
      <Image className="registerForm-banner" src={alternativeBanner} />
      <div className="registerForm-globalContentWrapper">
        <Card className="registerForm-card" centered>
          <Card.Content className="registerForm-cardContent">
            <Card.Header text-align="center" className="registerForm-cardHeader">Inscription</Card.Header>
            <Form className="registerForm-form">
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre email</label>
                <Form.Input className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre pseudo</label>
                <Form.Input className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre mot de passe</label>
                <Form.Input className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre prénom</label>
                <Form.Input className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre nom de famille</label>
                <Form.Input className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre adresse</label>
                <Form.Input className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre code postal</label>
                <Form.Input className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre ville</label>
                <Form.Select
                  className="registerForm-fieldInput"
                  options={fakeDatas}
                />
              </div>
              <div className="registerForm-buttonWrapper"><Button className="registerForm-registerButton">S'inscrire</Button></div>
            </Form>
          </Card.Content>
        </Card>
        <AlreadyAccountBox />
      </div>
    </div>
  );
};
export default Register;
