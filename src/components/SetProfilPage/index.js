import React from 'react';
import {
  Image, TextArea, Button, Form, Radio, Divider,
} from 'semantic-ui-react';
import './styles.scss';
import logo from './logo.png';

const SetProfilPage = () => (
  <div className="setProfilPage">

    <div className="setProfilPage-first-part">
      <h1>Mon profil</h1>
      <Divider />
      <Image className="setProfilPage-first-part-image" src={logo} size="tiny" />
      <Button className="setProfilPage-first-part-addButton" circular>+</Button>
      <p>A propos de moi</p>
    </div>

    <div className="setProfilPage-second-part">
      <h3>Présentation</h3>
      <Form>
        <TextArea placeholder="Parle nous un peu de toi..." />
      </Form>
    </div>

    <div className="setProfilPage-third-part">
      <p>email@gmail.com</p>
      <Button.Group size="tiny">
        <Button className="setProfilPage-third-part-emailButton" size="mini">Changer email</Button>
        <Button className="setProfilPage-third-part-passwordButton" size="mini">Changer le mot de passe</Button>
      </Button.Group>
    </div>

    <div className="setProfilPage-fourth-part">
      <Form size="mini">
        <Form.Group unstackable widths={2}>
          <Form.Input placeholder="Nom" />
          <Form.Input placeholder="Prénom" />
        </Form.Group>
        <Form.Group>
          <Form.Input className="setProfilPage-fourth-part-adress" placeholder="Address" />
        </Form.Group>
        <Form.Group unstackable widths={2}>
          <Form.Input placeholder="Code Postal" />
          <Form.Input placeholder="Ville" />
        </Form.Group>
        <Form.Group className="setProfilPage-fourth-part-holiday-mode">
          <div>Mode vacances</div>
          <Radio toggle />
        </Form.Group>
      </Form>
    </div>

    <div className="setProfilPage-fifth-part">
      <Button.Group size="tiny">
        <Button className="setProfilPage-fifth-part-cancelButton setProfilPage-fifth-part-cancelButton">Annuler</Button>
        <Button className="setProfilPage-fifth-part-validateButton" positive>Valider</Button>
      </Button.Group>
    </div>
    <div className="setProfilPage-sixth-part">
      <Button className="setProfilPage-sixth-part-deleteAccountButton" negative>Supprimer mon compte</Button>
    </div>
  </div>
);

export default SetProfilPage;
