import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Grid, Header, Form, Icon, Input, Image, Label, Modal, Radio, Segment, TextArea } from 'semantic-ui-react';

const DesktopSetIdCard = () => {

  const [open, setOpen] = React.useState(false);

  return (
  <div className="desktopIdCard">
    <div className="desktopIdCard-mainCard">

    <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>

      <Grid.Column>
        <Image
            size="small"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            className="desktopIdCard-avatar"
        />
        <Button circular icon='camera' size='big' />
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>

      <div className="desktopIdCard-rightPartWrapper">
        <h3 className="desktopIdCard-memberName">Pseudo</h3>
      </div>
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

          <div className="desktopIdCard-changeButtonsWrapper">

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
        </div>
      <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Prénom'
            placeholder=''
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />
          <Form.Input
            icon='map'
            iconPosition='left'
            label='Adresse'
            placeholder=''
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Code Postal'
            placeholder=''
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Ville'
            placeholder=''
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Form.Group className="setProfilPage-fourthPartHolidayMode">
            <Label className="setProfilPage-fourthPartHolidayModeLabel">Mode vacances: </Label>
            <Radio size="mini" toggle />
          </Form.Group>

          <Button content='Sauvegarder les modifications' primary />
          <Button content='Annuler' secondary />
        </Form>
      
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

      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Segment>


      {/* <div className="desktopIdCard-rightPartWrapper"> */}
        {/* <h3 className="desktopIdCard-memberName">Pseudo</h3> */}
        {/* <div className="desktopIdCard-locationWrapper">
          <Icon size="small" bordered circular name="map marker alternate" />
          <span className="desktopIdCard-memberLocation">Paris - 75000</span>
        </div> */}
        {/* <div className="desktopIdCard-holidayWrapper">
          <Icon size="small" bordered circular name="globe" />
          <span className="desktopIdCard-memberHolidayMode">Mode vacances : Activé</span>
        </div> */}
{/* 
        <Divider /> */}

        {/* <Form className="desktopIdCard-memberDescription"> */}
          {/* <p>Présentation</p> */}
          {/* <TextArea placeholder="Parle nous un peu de toi..." />
        </Form> */}

        {/* <Divider /> */}



          {/* <p>email@gmail.com</p> */}
        {/* <div className="desktopIdCard-memberPartWrapper">

          <div className="desktopIdCard-changeButtonsWrapper"> */}

          {/* <Button.Group className="setProfilPage-thirdPartButtonsGroup" size="mini">
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
          </Button.Group> */}

          {/* </div>
        </div> */}

        {/* <Divider /> */}

        {/* <div className="desktopIdCard-fourthPart setProfilPage-padding"> */}
          {/* <Form size="mini">
            <Form.Group unstackable widths={2}>
              <Form.Input placeholder="Prénom" />
              <Form.Input placeholder="Nom" />
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
          </Form> */}
        {/* </div>
        <div className="setProfilPage-fifthPart"> */}
          {/* <Button.Group size="tiny">
            <Button className="setProfilPage-fifthPartCancelButton setProfilPage-fifthPartCancelButton">Annuler les modifications </Button>
            <Button className="setProfilPage-fifthPartValidateButton" positive>Valider les modifications</Button>
          </Button.Group> */}
        {/* </div> */}
        {/* <div className="setProfilPage-sixthPart">
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
        </div> */}
      {/* </div> */}
    </div>
  </div>
);

}
export default DesktopSetIdCard;
