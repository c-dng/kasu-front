/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Button, Card, Form, Image,
} from 'semantic-ui-react';
import validator from 'validator'; // checking of password
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
  confirmPassword,
  errors,
  changeEmail,
  changeAddress,
  changeZipCode,
  changePassword,
  changeConfirmPassword,
  changeCity,
  changeFirstName,
  changeLastName,
  changePseudo,
  handleRegistering,
  eraseErrorMessage,
}) => {
  
  const [errorMessage, setErrorMessage] = React.useState('');// display a message received from API
  const [errorMessagePassword, setErrorMessagePassword] = React.useState('');// display a message with errors
  const errorsTab = [errors];

  const handleChangeEmail = (evt) => {
    changeEmail(evt.target.value);
    eraseErrorMessage();
  };

  const handleChangeAddress = (evt) => {
    changeAddress(evt.target.value);
    eraseErrorMessage();
  };

  const handleChangeZipCode = (evt) => {
    changeZipCode(evt.target.value);
    eraseErrorMessage();
  };

  const handleChangeConfirmPassword = (evt) => {
    changeConfirmPassword(evt.target.value);
    eraseErrorMessage();
  };

  const handleChangePassword = (evt) => {
    validatePassword(evt.target.value);// checking password
    changePassword(evt.target.value);
    eraseErrorMessage();
  };

  const handleChangeCity = (evt) => {
    changeCity(evt.target.value);
    eraseErrorMessage();
  };

  const handleChangeFirstName = (evt) => {
    changeFirstName(evt.target.value);
    eraseErrorMessage();
  };

  const handleChangeLastName = (evt) => {
    changeLastName(evt.target.value);
    eraseErrorMessage();
  };

  const handleChangePseudo = (evt) => {
    changePseudo(evt.target.value);
    eraseErrorMessage();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault(evt);
      if ( confirmPassword  !=  password) {
        setErrorMessagePassword('Les mots de passe ne sont pas identiques!');
        console.log('ERROR mots de passe inégaux');

    }
    else if (email === '') {
      setErrorMessagePassword('Veuillez saisir un email');
      console.log('ERROR Veuillez saisir un email');
    }
    else if (pseudo === '') {
      setErrorMessagePassword('Veuillez saisir un pseudo');
      console.log('ERROR Veuillez saisir un pseudo');
    }
    else if (password === '') {
      setErrorMessagePassword('Veuillez saisir un mot de passe');
      console.log('ERROR Veuillez saisir un mot de passe');
    }
    else if (firstName === '') {
      setErrorMessagePassword('Veuillez saisir votre prénom');
      console.log('ERROR Veuillez saisir votre prénom');
    }
    else if (lastName === '') {
      setErrorMessagePassword('Veuillez saisir votre nom de famille');
      console.log('ERROR Veuillez saisir votre nom de famille');
    }
    else if (address === '') {
      setErrorMessagePassword('Veuillez saisir une adresse valide');
      console.log('ERROR Veuillez saisir une adresse');
    }
    else if (zipCode === '') {
      setErrorMessagePassword('Veuillez saisir un code postal valide');
      console.log('ERROR Veuillez saisir un code postal valide');
    }
    else if (city === '') {
      setErrorMessagePassword('Veuillez saisir une ville');
      console.log('ERROR Veuillez saisir une ville');
    }
    else {
        setErrorMessagePassword('');
        console.log('Bien soumis! mots de passe identiques', errorsTab);
        handleRegistering();

    window.scrollTo(0, 0);  
    }
  };

  const validatePassword = (value) => {
    if (validator.isStrongPassword(value, {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })) {
      setErrorMessage('');
      console.log(errorMessage);
    }
    else {
      setErrorMessage('Veuillez entrer un mot de passe valide: min-6 caractères, une majuscule, une minuscule, un chiffre et un des caractères suivants: @$%_*|=-');
      console.log(errorMessage);
    }
  };

  return (
    <div className="registerForm">
      <Image className="registerForm-banner" src={alternativeBanner} />
      <div className="registerForm-errorsFromAPI">
        {
          Object.keys(errors).map((oneKey, i)=>{
            return (
                <li key={i}>{errors[oneKey]}</li>
              )
            })
        } 
        <div className="registerForm-divErrorMessagePasswordNotEqual">
          <span className="registerForm-errorMessagePasswordNotEqual">{errorMessagePassword}</span>
        </div>
      </div>  
      <div className="registerForm-globalContentWrapper">
        <Card className="registerForm-card" centered>
          <Card.Content className="registerForm-cardContent">
            <Card.Header text-align="center" className="registerForm-cardHeader">Inscription</Card.Header>
            <Form className="registerForm-form" onSubmit={handleSubmit}>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre email</label>
                <Form.Input type='mail' onChange={handleChangeEmail} value={email} className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre pseudo</label>
                <Form.Input onChange={handleChangePseudo} value={pseudo} className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Votre mot de passe</label>
                <Form.Input onChange={handleChangePassword} type="password" value={password} className="registerForm-fieldInput" />
              </div>
              <div className="registerForm-field">
                <label className="registerForm-fieldLabel">Confirmez mot de passe</label>
                <Form.Input onChange={handleChangeConfirmPassword} type="password" value={confirmPassword} className="registerForm-fieldInput" />
              </div>
              <span className="registerForm-errorMessagePassword">{errorMessage}</span>
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
