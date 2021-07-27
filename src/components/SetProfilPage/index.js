import React from 'react';
import {
  Image, TextArea, Button, Form, Radio, Label,
} from 'semantic-ui-react';
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
  changeEmail,
  changePassword,
  changePseudo,
  changeAddress,
  changeZipCode,
  changeCity,
  changeFirstName,
  changeLastName,
  changeHoliday_mode,
  handleUpdate,
  displayUserInfos
}) => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Bien soumis!');
    handleUpdate();
  };
  const handleChangeEmail = (evt) => {
    changeEmail(evt.target.value);
  };
  const handleChangePassword = (evt) => {
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
  const changeHolidayMode = (evt) => {
    changeHolidayMode(evt.target.value);
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
            pseudo={pseudo}
            address={address}
            zipCode={zipCode}
            city={city}
            firstName={firstName}
            lastName={lastName}
            holiday_mode={holiday_mode}
            changeEmail={changeEmail}
            changePassword={changePassword}
            changePseudo={changePseudo}
            changeAddress={changeAddress}
            changeZipCode={changeZipCode}
            changeCity={changeCity}
            changeFirstName={changeFirstName}
            changeLastName={changeLastName}
            changeHolidayMode={changeHolidayMode}
            handleUpdate={handleUpdate}
            displayUserInfos={displayUserInfos}
            />
          </MediaQuery>

          <MediaQuery maxWidth={1223}>
          <div className="mobileSetProfilPage">
          <div className="mobileSetProfil-ButtonAddAndImage">
            <Image className="mobileSetProfil-image" 
                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                size='tiny'
                circular
            />
            <Button className="mobileSetProfil-changeImage" circular>+</Button>
          </div>
          <h3 className="mobileSetProfil-h3">{pseudo}</h3>
          <span className="desktopIdCard-holidayWrapper">
              <Label className="setProfilPage-fourthPartHolidayModeLabel">Mode vacances: </Label>
              <Radio size="medium" toggle />
            </span>

          <Form  onSubmit={handleSubmit}>
             <TextArea className="mobileSetProfil-textArea" rows={2} placeholder='Bio' />

             <Form.Group widths='equal'>

             <Form.Input className="mobileSetProfil-formInputName"
                  icon='user'
                  iconPosition='left'
                  placeholder='Pseudo'
                  value={pseudo}
                  onChange={handleChangePseudo}
                />

                <Form.Input className="mobileSetProfil-formInputName"
                  icon='user'
                  iconPosition='left'
                  placeholder='Prénom'
                  value={firstName}
                  onChange={handleChangeFirstName}
                />

                <Form.Input className="mobileSetProfil-formInputLastName"
                  icon='user'
                  iconPosition='left'
                  placeholder='Nom'
                  value={lastName}
                  onChange={handleChangeLastName}
                />

                <Form.Input
                  icon='map marker alternate'
                  iconPosition='left'
                  placeholder='Adresse'
                  value={address}
                  onChange={handleChangeAddress}
                />

                <Form.Input
                  icon='map'
                  iconPosition='left'
                  placeholder='Code Postal'
                  type='number'
                  value={zipCode}
                  onChange={handleChangeZipCode}
                />
                    
                <Form.Input
                  icon='map'
                  iconPosition='left'
                  placeholder='Ville'
                  value={city}
                  onChange={handleChangeCity}
                />

                <Form.Input
                  input='password'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Mot de passe'
                  fluid
                  value={password}
                  onChange={handleChangePassword}
                />

                <Form.Input
                  input='email'
                  icon='mail'
                  iconPosition='left'
                  placeholder='Email'
                  fluid
                  value={email}
                  onChange={handleChangeEmail}
                />

            </Form.Group>
          </Form>
              <div className="mobileSetProfil-divDeleteMyAccount">
                  <Button size='small' className="mobileSetProfil-deleteMyAccount" negative>Supprimer mon compte</Button>
              </div>   
              <div className="mobileSetProfil-groupTwoButtons">
                  <Button size='small' className="mobileSetProfil-buttonCancel">Annuler</Button>
                  <Button type="submit" size='small' className="mobileSetProfil-buttonValidate">Valider</Button>
              </div>
            </div>
          </MediaQuery>

        </div>  
    </div>
  );
};

export default SetProfilPage;
