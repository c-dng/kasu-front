/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Button, Card, Form, Image,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';
import AlreadyAccountBox from './AlreadyAccountBox';

const Register = ({
  zipCode,
  email,
  address,
  firstName,
  lastName,
  pseudo,
  city,
  password,
  changeEmail,
  changeAddress,
  changeZipCode,
  changePassword,
  changeCity,
  changeFirstName,
  changeLastName,
  changePseudo,
  handleRegistering,
}) => {
  const handleChangeEmail = (evt) => {
    changeEmail(evt.target.value);
  };

  const handleChangeAddress = (evt) => {
    changeAddress(evt.target.value);
  };

  const handleChangeZipCode = (evt) => {
    changeZipCode(evt.target.value);
  };

  const handleChangePassword = (evt) => {
    changePassword(evt.target.value);
  };

  const handleChangeCity = (evt) => {
    changeCity(evt.target.value);
  };

  const handleChangeFirstName = (evt) => {
    changeFirstName(evt.target.value);
  };

  const handleChangeLastName = (evt) => {
    changeLastName(evt.target.value);
  };

  const handleChangePseudo = (evt) => {
    changePseudo(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegistering();
  };

  return (
    <div className="registerForm">
      <Image className="registerForm-banner" src={alternativeBanner} />
      <div className="registerForm-globalContentWrapper">
        <Card className="registerForm-card" centered>
          <Card.Content className="registerForm-cardContent">
            <Card.Header text-align="center" className="registerForm-cardHeader">Inscription</Card.Header>
            <Form className="registerForm-form" onSubmit={handleSubmit}>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre email</label>
                <Form.Input onChange={handleChangeEmail} value={email} className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre pseudo</label>
                <Form.Input onChange={handleChangePseudo} value={pseudo} className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre mot de passe</label>
                <Form.Input onChange={handleChangePassword} value={password} className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre prénom</label>
                <Form.Input onChange={handleChangeFirstName} value={firstName} className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre nom de famille</label>
                <Form.Input onChange={handleChangeLastName} value={lastName} className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre adresse</label>
                <Form.Input onChange={handleChangeAddress} value={address} className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre code postal</label>
                <Form.Input type="number" onChange={handleChangeZipCode} value={zipCode} className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre ville</label>
                <Form.Input
                  className="registerForm-fieldInput"
                  onChange={handleChangeCity}
                  value={city}
                />
              </div>
              <div className="registerForm-buttonWrapper"><Button type="submit" className="registerForm-registerButton">S'inscrire</Button></div>
            </Form>
          </Card.Content>
        </Card>
        <AlreadyAccountBox />
      </div>
    </div>
  );
};

Register.propTypes = {
  pseudo: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  changePseudo: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changeFirstName: PropTypes.func.isRequired,
  changeLastName: PropTypes.func.isRequired,
  changeAddress: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired,
  changeZipCode: PropTypes.func.isRequired,
  handleRegistering: PropTypes.func.isRequired,
};
export default Register;
