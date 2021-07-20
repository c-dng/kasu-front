import React from 'react';
import {
  Image, TextArea, Button, Form, Radio, Container, Modal, Header, Icon, Input } from 'semantic-ui-react';
import './style.scss';
import logo from './logo.png';
import alternativeBanner from 'src/assets/alternativeBanner.png';

const SetProfilPage = () => {

  const [open, setOpen] = React.useState(false)

  return (
  <div className="setProfilPage">
    <Image className="registerForm-banner" src={alternativeBanner} />
    <div className="setProfilPage-mainWrapper">
      <div className="setProfilPage-first-part">
        <h1 className="setProfilPage-h1">Mon profil</h1>
        <Image className="setProfilPage-first-part-image" src={logo} size="tiny" />
        <Button className="setProfilPage-first-part-addButton">+</Button>
        <Container textAlign='center'>
          <p>Pseudo</p>
        </Container>
      </div>
      <div className="setProfilPage-second-part">
        <h3 className="setProfilPage-padding">Présentation</h3>
        <Form className="setProfilPage-padding">
          <TextArea placeholder="Parle nous un peu de toi..." />
        </Form>
      </div>
      <div className="setProfilPage-third-part">
        <p className="setProfilPage-thirdPartParagraphEmail">email@gmail.com</p>
        <Button.Group className="setProfilPage-thirdPartButtonsGroup" size="mini">
          <Modal
          trigger={<Button attached='left' className="setProfilPage-third-part-emailButton" size="mini">Changer email</Button>}
          header='Entrez un nouvel email'
          content={<Input iconPosition='left' placeholder='Email'>
          <Icon name='at' />
          <input />
          </Input>}
          actions={['Annuler', { key: 'valider', content: 'Valider', positive: true }]}
          />
          <Modal
          trigger={<Button attached='right' className="setProfilPage-third-part-passwordButton" size="mini">Changer le mot de passe</Button>}
          header='Entrez un nouveau mot de passe'
          content={<Input iconPosition='left' placeholder='Mot de passe'/ >}
          actions={['Annuler', { key: 'valider', content: 'Valider', positive: true }]}
          />
        </Button.Group>
      </div>
      <div className="setProfilPage-fourth-part setProfilPage-padding">
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
        <Modal
          closeIcon
          open={open}
          trigger={<Button className="setProfilPage-sixth-part-deleteAccountButton" negative>Supprimer mon compte</Button>}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <Header content='ATTENTION' />
          <Modal.Content>
            <p>
            Voulez-vous vraiment supprimer votre compte ?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' onClick={() => setOpen(false)}>
              <Icon name='remove' /> Annuler
            </Button>
            <Button color='green' onClick={() => setOpen(false)}>
              <Icon name='checkmark' /> Confirmer
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </div>
  </div>
  );
};

export default SetProfilPage;
