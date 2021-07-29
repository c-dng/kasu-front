import React, { useEffect } from 'react';
import {
  Image, TextArea, Button, Form, Label, Checkbox, Modal, Icon, Header,
} from 'semantic-ui-react';
import validator from 'validator'; // checking of password
import './style.scss';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';
import MediaQuery from 'react-responsive';
import DesktopSetIdCard from './DesktopSetIdCard';

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
  message,
  changeEmail,
  changePassword,
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
  onSetProfilPageUnmount,
}) => {
  useEffect(() => {
    displayUserInfos();
    return (
      function cleanup() {
        onSetProfilPageUnmount();
      });
  }, []);

  const [open, setOpen] = React.useState(false);// Modal to delete account
  const [avatar, setAvatar] = React.useState(false);// Modal to choose an avatar
  const [errorMessage, setErrorMessage] = React.useState('');// display a message received from API

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Bien soumis!');
    handleUpdate();
  };
  const handleChangeEmail = (evt) => {
    changeEmail(evt.target.value);
  };
  const handleChangePassword = (evt) => {
    validate(evt.target.value);// checking password
    changePassword(evt.target.value);
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

  // Check password with validator dependencie
  const validate = (value) => {
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

  // console.log(holiday_mode);

  return (
    <div className="setProfilPage">

      <Image className="registerForm-banner" src={alternativeBanner} />
      <div className="setProfilPage-mainWrapper">
        <h1 className="setProfilPage-title">Gérer mon profil</h1>
        <div className="contactForm-message">{message}</div>
        <MediaQuery minWidth={1224}>
          <DesktopSetIdCard
            email={email}
            password={password}
            pseudo={pseudo}
            address={address}
            zipCode={zipCode}
            city={city}
            firstName={firstName}
            lastName={lastName}
            holiday_mode={holiday_mode}
            description={description}
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
          />
        </MediaQuery>

        <MediaQuery maxWidth={1223}>
          <div className="mobileSetProfilPage">

            <div className="mobileSetProfil-ButtonAddAndImage">
              <Image
                className="mobileSetProfil-image"
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                size="tiny"
                circular
              />
              <Modal
                onClose={() => setAvatar(false)}
                onOpen={() => setAvatar(true)}
                open={avatar}
                trigger={<Button className="mobileSetProfil-addButton" circular icon="photo" />}
              >
                <Modal.Header>Upload image</Modal.Header>
                <Modal.Content image>
                  <Button><Image circular size="mini" src="/images/wireframe/image-square.png" wrapped /></Button>
                  <Button><Image circular size="mini" src="/images/wireframe/image-square.png" wrapped /></Button>
                  <Button><Image circular size="mini" src="/images/wireframe/image-square.png" wrapped /></Button>
                  <Button><Image circular size="mini" src="/images/wireframe/image-square.png" wrapped /></Button>
                  <Button><Image circular size="mini" src="/images/wireframe/image-square.png" wrapped /></Button>
                  <Button><Image circular size="mini" src="/images/wireframe/image-square.png" wrapped /></Button>
                  <Button><Image circular size="mini" src="/images/wireframe/image-square.png" wrapped /></Button>
                  <Button><Image circular size="mini" src="/images/wireframe/image-square.png" wrapped /></Button>
                  <Button><Image circular size="mini" src="/images/wireframe/image-square.png" wrapped /></Button>
                  <Button><Image circular size="mini" src="/images/wireframe/image-square.png" wrapped /></Button>
                  <Modal.Description>
                    <p>Veuillez choisir un avatar</p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={() => setAvatar(false)}>Cancel</Button>
                  <Button onClick={() => setAvatar(false)} positive>
                    Ok
                  </Button>
                </Modal.Actions>
              </Modal>
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
                  icon="lock"
                  iconPosition="left"
                  placeholder="Mot de passe"
                  fluid
                  value={password}
                  onChange={handleChangePassword}
                />

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

              <div className="mobileSetProfil-divDeleteMyAccount">
                <Modal
                  icon="user delete"
                  open={open}
                  trigger={<Button size="small" className="mobileSetProfil-deleteMyAccount" negative>Supprimer mon compte</Button>}
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
                    <Button color="green" onClick={() => setOpen(true)}>
                      <Icon name="checkmark" /> Oui
                    </Button>
                  </Modal.Actions>
                </Modal>
              </div>
              <div className="mobileSetProfil-groupTwoButtons">
                <Button size="small" className="mobileSetProfil-buttonCancel">Annuler</Button>
                <Button type="submit" size="small" className="mobileSetProfil-buttonValidate">Valider</Button>
              </div>
            </Form>
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

export default SetProfilPage;
