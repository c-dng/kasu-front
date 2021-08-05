/* eslint-disable space-infix-ops */
/* eslint-disable linebreak-style */
/* lint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable eqeqeq */
/* eslint-disable linebreak-style */
/* eslint-disable no-constant-condition */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
// eslint-disable-next-line linebreak-style
import {
  Image, TextArea, Button, Form, Label, Checkbox, Modal, Icon, Header,
} from 'semantic-ui-react';
// eslint-disable-next-line linebreak-style
import validator from 'validator'; // checking of password
import './style.scss';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';
import MediaQuery from 'react-responsive';
import DesktopSetIdCard from './DesktopSetIdCard';
import Loading from '../App/Loading';

const SetProfilPage = ({
  email,
  password,
  pseudo,
  address,
  zipCode,
  city,
  firstName,
  lastName,
  holiday_mode,
  description,
  picture,
  confirmPassword,
  changeEmail,
  changePassword,
  changeConfirmPassword,
  changePseudo,
  changeAddress,
  changeZipCode,
  changeCity,
  changeFirstName,
  changeLastName,
  changeHolidayMode,
  changeDescription,
  handleUpdate,
  displayUserInfos,
  redirectTo,
}) => {
  useEffect(() => {
    displayUserInfos();
  }, []);

  const [open, setOpen] = React.useState(false);// Modal to delete account
  const [errorMessage, setErrorMessage] = React.useState('');// display a message with errors
  const [errorMessagePassword, setErrorMessagePassword] = React.useState('');// display a message with errors

  const validate = (value) => {
    if (validator.isStrongPassword(value, {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })) {
      setErrorMessage('');
    }
    else {
      setErrorMessage('Veuillez entrer un mot de passe valide: min-6 caractères, une majuscule, une minuscule, un chiffre et un des caractères suivants: @$%_*|=-');
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault(evt);
    if (confirmPassword === password) {
      setErrorMessagePassword('');
      console.log('Bien soumis! Mots de passe identiques');
      handleUpdate();
    }
    else {
      setErrorMessagePassword('Les mots de passe ne sont pas identiques!');
      console.log('ERROR mots de passe inégaux');
    }
  };

  const handleChangeEmail = (evt) => {
    changeEmail(evt.target.value);
  };
  const handleChangePassword = (evt) => {
    validate(evt.target.value);// checking password
    changePassword(evt.target.value);
  };
  const handleChangeConfirmPassword = (evt) => {
    changeConfirmPassword(evt.target.value);
  };
  const handleChangePseudo = (evt) => {
    changePseudo(evt.target.value);
  };
  const handleChangeAddress = (evt) => {
    changeAddress(evt.target.value);
  };
  const handleChangeZipCode = (evt) => {
    changeZipCode(evt.target.value);
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
  const handleChangeDescription = (evt) => {
    changeDescription(evt.target.value);
  };
  // toggle function
  const onChangeCheckbox = (evt, data) => {
    const { checked } = data;
    changeHolidayMode(checked);
  };
  // Delete Account => Redirect to contactForm
  const handleDeleteMyAccount = () => {
    setOpen(false);
    redirectTo('/contact');
  };
  // Cancel => Redirect to profil
  const handleCancel = () => {
    setOpen(false);
    redirectTo('/profil/mon-profil');
  };

  return (
    <div className="setProfilPage">
      <Image className="registerForm-banner" src={alternativeBanner} />
      <div className="setProfilPage-mainWrapper">
        <h1 className="setProfilPage-title">Gérer mon profil</h1>
        <MediaQuery minWidth={1224}>
          <DesktopSetIdCard
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            pseudo={pseudo}
            address={address}
            zipCode={zipCode}
            city={city}
            firstName={firstName}
            lastName={lastName}
            holiday_mode={holiday_mode}
            description={description}
            picture={picture}
            changeEmail={changeEmail}
            changePassword={changePassword}
            changePseudo={changePseudo}
            changeAddress={changeAddress}
            changeZipCode={changeZipCode}
            changeCity={changeCity}
            changeFirstName={changeFirstName}
            changeDescription={changeDescription}
            changeLastName={changeLastName}
            changeHolidayMode={changeHolidayMode}
            handleUpdate={handleUpdate}
            displayUserInfos={displayUserInfos}
            onChangeCheckbox={onChangeCheckbox}
            changeConfirmPassword={changeConfirmPassword}
            redirectTo={redirectTo}
          />
        </MediaQuery>

        <MediaQuery maxWidth={1223}>
          <div className="mobileSetProfilPage">
            <div className="mobileSetProfil-ButtonAddAndImage">
              <Image
                className="mobileSetProfil-image"
                src={`https://api.multiavatar.com/${picture}.png`}
                size="tiny"
                circular
              />
            </div>
            <h3 className="mobileSetProfil-h3">{pseudo}</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Input className="mobileIdCard-holidayWrapper">
                <Label className="setProfilPage-fourthPartHolidayModeLabel">Mode vacances:</Label>
                <Checkbox
                  toggle
                  checked={!!holiday_mode}
                  onClick={(evt, data) => onChangeCheckbox(evt, data)}
                />
              </Form.Input>
              <TextArea
                rows={2}
                onChange={handleChangeDescription}
                value={description}
                className="mobileSetProfil-textArea"
                placeholder="Bio"
              />
              <Form.Group widths="equal">
                <Form.Input
                  className="mobileSetProfil-formInputName"
                  icon="user"
                  iconPosition="left"
                  placeholder="Pseudo"
                  value={pseudo}
                  onChange={handleChangePseudo}
                />
                <Form.Input
                  className="mobileSetProfil-formInputName"
                  icon="user"
                  iconPosition="left"
                  placeholder="Prénom"
                  value={firstName}
                  onChange={handleChangeFirstName}
                />
                <Form.Input
                  className="mobileSetProfil-formInputLastName"
                  icon="user"
                  iconPosition="left"
                  placeholder="Nom"
                  value={lastName}
                  onChange={handleChangeLastName}
                />
                <Form.Input
                  icon="map marker alternate"
                  iconPosition="left"
                  placeholder="Adresse"
                  value={address}
                  onChange={handleChangeAddress}
                />
                <Form.Input
                  icon="map"
                  iconPosition="left"
                  placeholder="Code Postal"
                  type="number"
                  value={zipCode}
                  onChange={handleChangeZipCode}
                />
                <Form.Input
                  icon="map"
                  iconPosition="left"
                  placeholder="Ville"
                  value={city}
                  onChange={handleChangeCity}
                />
                <Form.Input
                  input="password"
                  id="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={handleChangePassword}
                  fluid
                />
                <Form.Input
                  input="password"
                  id="confirmPassword"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirmer le mot de passe"
                  value={confirmPassword}
                  onChange={handleChangeConfirmPassword}
                  fluid
                />
                <div className="desktopIdCard-errorMessage">
                  {errorMessagePassword}
                </div>
                <Form.Input
                  input="email"
                  icon="mail"
                  iconPosition="left"
                  placeholder="Email"
                  fluid
                  value={email}
                  onChange={handleChangeEmail}
                />
              </Form.Group>
              <div className="desktopIdCard-errorMessage">
                {errorMessage}
              </div>
              <div className="mobileSetProfil-groupTwoButtons">
                <Button size="small" onClick={handleCancel} className="mobileSetProfil-buttonCancel">Annuler</Button>
                <Button type="submit" size="small" className="mobileSetProfil-buttonValidate">Valider</Button>
              </div>
            </Form>
            <div className="mobileSetProfil-divDeleteMyAccount">
              <Modal
                icon="user delete"
                open={open}
                trigger={<Button size="mini" className="mobileSetProfil-deleteMyAccount" negative>Supprimer mon compte</Button>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
              >
                <Header icon="delete" content="Confirmer votre action" />
                <Modal.Content>
                  <p>Voulez-vous vraiment supprimer votre compte ?</p>
                </Modal.Content>
                <Modal.Actions>
                  <Button color="red" onClick={() => setOpen(false)}>
                    <Icon name="remove" /> Non
                  </Button>
                  <Button color="green" onClick={handleDeleteMyAccount}>
                    <Icon name="checkmark" /> Oui
                  </Button>
                </Modal.Actions>
              </Modal>
            </div>
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

export default SetProfilPage;
