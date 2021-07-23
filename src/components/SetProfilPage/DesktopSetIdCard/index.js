import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Header, Form, Icon, Image, Label, Modal, Radio, TextArea } from 'semantic-ui-react';

const DesktopSetIdCard = () => {
  const [open, setOpen] = React.useState(false);

  return (
  <div className="desktopIdCard">
    <div className="desktopIdCard-mainCard">
      <Image
        size="small"
        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        className="desktopIdCard-avatar"
      />

      <div className="desktopIdCard-rightPartWrapper">
        <h3 className="desktopIdCard-memberName">Pseudo</h3>
        <div className="desktopIdCard-locationWrapper">
          <Icon size="small" bordered circular name="map marker alternate" />
          <span className="desktopIdCard-memberLocation">Paris - 75000</span>
        </div>
        <div className="desktopIdCard-holidayWrapper">
          <Icon size="small" bordered circular name="globe" />
          <span className="desktopIdCard-memberHolidayMode">Mode vacances : Activé</span>
        </div>
        <Divider />

        <Form className="desktopIdCard-memberDescription">
          <p>Présentation</p>
          <TextArea placeholder="Parle nous un peu de toi..." />
        </Form>

        <Divider />

          <p>email@gmail.com</p>
        <div className="desktopIdCard-memberPartWrapper">
          <Button circular icon>
            <Icon name="camera" />
          </Button>
          <div className="desktopIdCard-changeButtonsWrapper">
            <Link to="/profil/id" exact={+true}>
              <Button size="mini" className="desktopIdCard-changeButtonsLeft" attached="left">Changer e-mail</Button>
            </Link>
            <Link to="/profil/collection" exact={+true}>
              <Button
                size="mini"
                className="desktopIdCard-changeButtonsRight"
                attached="right"
              >Changer le mot de passe
              </Button>
            </Link>

          </div>
        </div>

        <div className="desktopIdCard-fourthPart setProfilPage-padding">
          <Form size="mini">
            <Form.Group unstackable widths={2}>
              <Form.Input placeholder="Nom" />
              <Form.Input placeholder="Prénom" />
            </Form.Group>
            <Form.Group>
              <Form.Input className="setProfilPage-fourthPartAdress" placeholder="Adresse" />
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
            <Button className="setProfilPage-fifthPartCancelButton setProfilPage-fifthPartCancelButton">Annuler les modifications </Button>
            <Button className="setProfilPage-fifthPartValidateButton" positive>Valider les modifications</Button>
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
  </div>
);

}
export default DesktopSetIdCard;
