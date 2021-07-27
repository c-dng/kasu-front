import React from 'react';
import {
  Image, TextArea, Button, Form, Radio, Container, Modal, Header, Icon, Input, Label,
} from 'semantic-ui-react';
import './style.scss';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';
import MediaQuery from 'react-responsive';
import DesktopSetIdCard from './DesktopSetIdCard';

const SetProfilPage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="setProfilPage">

      <Image className="registerForm-banner" src={alternativeBanner} />
        <div className="setProfilPage-mainWrapper">

          <h1 className="setProfilPage-title">Gérer mon profil</h1>
          <MediaQuery minWidth={1224}>
            <DesktopSetIdCard />
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
          <h3 className="mobileSetProfil-h3">Mon pseudo</h3>
          <span className="desktopIdCard-holidayWrapper">
              <Label className="setProfilPage-fourthPartHolidayModeLabel">Mode vacances: </Label>
              <Radio size="medium" toggle />
            </span>

          <Form>
             <TextArea className="mobileSetProfil-textArea" rows={2} placeholder='Bio' />

             <Form.Group widths='equal'>
                <Form.Input className="mobileSetProfil-formInputName"
                  icon='user'
                  iconPosition='left'
                  placeholder='Prénom'
                />

                <Form.Input className="mobileSetProfil-formInputLastName"
                  icon='user'
                  iconPosition='left'
                  placeholder='Nom'
                />

                <Form.Input
                  icon='map marker alternate'
                  iconPosition='left'
                  placeholder='Adresse'
                />

                <Form.Input
                  icon='map'
                  iconPosition='left'
                  placeholder='Code Postal'
                />
                    
                <Form.Input
                  icon='map'
                  iconPosition='left'
                  placeholder='Ville'
                />

                <Form.Input
                  input='password'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Mot de passe'
                  fluid
                />

                <Form.Input
                  input='password'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Confirmer mot de passe'
                  fluid
                />

                <Form.Input
                  input='email'
                  icon='mail'
                  iconPosition='left'
                  placeholder='Email'
                  fluid
                />

                <Form.Input
                  input='email'
                  icon='mail'
                  iconPosition='left'
                  placeholder='Confirmer email'
                  fluid
                />

            </Form.Group>
          </Form>
              <div className="mobileSetProfil-divDeleteMyAccount">
                  <Button size='small' className="mobileSetProfil-deleteMyAccount" negative>Supprimer mon compte</Button>
              </div>   
              <div className="mobileSetProfil-groupTwoButtons">
                  <Button size='small' className="mobileSetProfil-buttonCancel">Annuler</Button>
                  <Button size='small' className="mobileSetProfil-buttonValidate">Valider</Button>
              </div>
            </div>
          </MediaQuery>

        </div>  
    </div>
  );
};

export default SetProfilPage;
