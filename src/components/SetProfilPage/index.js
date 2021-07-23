import React from 'react';
import {
  Image, TextArea, Button, Form, Radio, Container, Modal, Header, Icon, Input, Label,
} from 'semantic-ui-react';
import './style.scss';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';
import logo from 'src/assets/images/logo2.png';
import DesktopSetIdCard from './DesktopSetIdCard';


const SetProfilPage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="setProfilPage">

      <Image className="registerForm-banner" src={alternativeBanner} />
      <div className="viewProfilPage">
        <Image className="registerForm-banner" src={alternativeBanner} />
        <div className="viewProfilPage-mainWrapper">

          <h1 className="setProfilPage-h1">Mon profil</h1>
          <DesktopSetIdCard />
        </div>
      </div>

      <div className="setProfilPage-mainWrapper">
        <div className="setProfilPage-firstPart">
          <h1 className="setProfilPage-h1">Mon profil</h1>
          <Image className="setProfilPageFirstPartImage" src={logo} size="tiny" />
          <Button className="setProfilPage-firstPartAddButton">+</Button>
          <Container textAlign="center">
            <p>Pseudo</p>
          </Container>
        </div>
        <div className="setProfilPage-secondPart">
          <h3 className="setProfilPage-padding">Présentation</h3>
          <Form className="setProfilPage-padding">
            <TextArea placeholder="Parle nous un peu de toi..." />
          </Form>
        </div>
        <div className="setProfilPage-thirdPart">
          <p className="setProfilPage-thirdPartParagraphEmail">email@gmail.com</p>
          <Button.Group className="setProfilPage-thirdPartButtonsGroup" size="mini">
            <Modal
              className="setProfilPage-thirdPartModalEmail"
              trigger={<Button attached="left" className="setProfilPage-thirdPartEmailButton" size="mini">Changer email</Button>}
              header="Entrez un nouvel email"
              content={(
                <Input iconPosition="left" placeholder="Email">
                  <Icon name="at" />
                  <input />
                </Input>
              )}
              actions={['Annuler', { key: 'valider', content: 'Valider', positive: true }]}
            />
            <Modal
              className="setProfilPage-thirdPartModalPassword"
              trigger={<Button attached="right" className="setProfilPage-thirdPartPasswordButton" size="mini">Changer le mot de passe</Button>}
              header="Entrez un nouveau mot de passe"
              content={<Input iconPosition="left" placeholder="Mot de passe" />}
              actions={['Annuler', { key: 'valider', content: 'Valider', positive: true }]}
            />
          </Button.Group>
        </div>
        <div className="setProfilPage-fourthPart setProfilPage-padding">
          <Form size="mini">
            <Form.Group unstackable widths={2}>
              <Form.Input placeholder="Nom" />
              <Form.Input placeholder="Prénom" />
            </Form.Group>
            <Form.Group>
              <Form.Input className="setProfilPage-fourthPartAdress" placeholder="Address" />
            </Form.Group>
            <Form.Group unstackable widths={2}>
              <Form.Input placeholder="Code Postal" />
              <Form.Input placeholder="Ville" />
            </Form.Group>
            <Form.Group className="setProfilPage-fourthPartHolidayMode">
              <Label className="setProfilPage-fourthPartHolidayModeLabel">Mode vacances: </Label>
              <Radio size="mini" toggle />
            </Form.Group>
          </Form>
        </div>
        <div className="setProfilPage-fifthPart">
          <Button.Group size="tiny">
            <Button className="setProfilPage-fifthPartCancelButton setProfilPage-fifthPartCancelButton">Annuler</Button>
            <Button className="setProfilPage-fifthPartValidateButton" positive>Valider</Button>
          </Button.Group>
        </div>
        <div className="setProfilPage-sixthPart">
          <Modal
            className="setProfilPage-sixthPartModalDeleteAccount"
            closeIcon
            open={open}
            trigger={<Button size="tiny" className="setProfilPage-sixthPartDeleteAccountButton" negative>Supprimer mon compte</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          >
            <Header content="ATTENTION" />
            <Modal.Content>
              <p>
                Voulez-vous vraiment supprimer votre compte ?
              </p>
            </Modal.Content>
            <Modal.Actions>
              <Button color="red" onClick={() => setOpen(false)}>
                <Icon name="remove" /> Annuler
              </Button>
              <Button color="green" onClick={() => setOpen(false)}>
                <Icon name="checkmark" /> Confirmer
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SetProfilPage;
