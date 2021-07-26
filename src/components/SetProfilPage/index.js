import React from 'react';
import {
  Image, TextArea, Button, Form, Radio, Container, Modal, Header, Icon, Input, Label,
} from 'semantic-ui-react';
import './style.scss';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';
import MediaQuery from 'react-responsive';
import logo from 'src/assets/images/logo.png';
import DesktopSetIdCard from './DesktopSetIdCard';
import { Divider } from 'semantic-ui-react';

const SetProfilPage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="setProfilPage">

      <Image className="registerForm-banner" src={alternativeBanner} />
      <div className="viewProfilPage">
        <div className="viewProfilPage-mainWrapper">

          <h1 className="setProfilPage-title">Gérer mon profil</h1>
          <MediaQuery minWidth={1224}>
            <DesktopSetIdCard />
          </MediaQuery>

          <MediaQuery maxWidth={1223}>
          <div className="mobileSetProfilPage">

          <Image className="mobileSetProfil-image" 
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
              size='tiny'
              circular
          />
          <Button className="mobileSetProfil-changeImage" circular>+</Button>

          <h3 className="mobileSetProfil-h3">Mon pseudo</h3>

          <Form>
              <TextArea rows={2} placeholder='Bio' />
          </Form>
          
          </div>

          <Form>
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
            
                <Form.Input className="mobileSetProfil-formInputPassword"
                  action='Modifier'
                  placeholder='Mot de passe' 
                />

                <Form.Input className="mobileSetProfil-formInputEmail"
                  action='Modifier'
                  placeholder='E-mail' 
                />
            </Form.Group>
          </Form>

            <p className="mobileSetProfil-deleteMyAccount">X Supprimer mon compte</p>
            <div className="mobileSetProfil-groupTwoButtons">
                <Button size='large' className="mobileSetProfil-buttonCancel">Annuler</Button>
                <Button size='large' className="mobileSetProfil-buttonValidate">Valider</Button>
            </div>

          </MediaQuery>

        </div>
      </div>
    </div>
  );
};

export default SetProfilPage;
