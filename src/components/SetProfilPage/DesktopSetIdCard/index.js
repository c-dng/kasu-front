import React from 'react';
import { Link } from 'react-router-dom';
import { LabelDetail } from 'semantic-ui-react';
import { ButtonGroup } from 'semantic-ui-react';
import { Button, Divider, Grid, Header, Form, Icon, Input, Image, Label, Modal, Radio, Segment, TextArea } from 'semantic-ui-react';

const DesktopSetIdCard = () => {

  const [open, setOpen] = React.useState(false);

  return (
    
    <Segment className="desktopIdCard-MainWrapper">
    <Grid columns={2}>
      <Grid.Column className="desktopIdCard-leftPartWrapper">
      <Label as='a' color='red' ribbon>
          Mes infos
        </Label>

      <Form>
       <Form.Group widths='equal'>
          <Form.Input
            icon='user'
            iconPosition='left'
            placeholder='Prénom'
          />
          <Form.Input
            icon='user'
            iconPosition='left'
            placeholder='Nom'
          />

          </Form.Group>

          <Form.Input
            icon='map marker alternate'
            iconPosition='left'
            placeholder='Adresse'
          />

          <Form.Input
            placeholder='Code Postal'
          />
                    
          <Form.Input
            placeholder='Ville'
          />

          <Form.Group widths='equal'>

          <Form.Input
            input='password'
            icon='lock'
            iconPosition='left'
            placeholder='Mot de passe'
          />
          <Form.Input
            input='password'
            icon='lock'
            iconPosition='left'
            placeholder='Confirmer mot de passe'
          />

        </Form.Group>
  
      <ButtonGroup widths='2' >
          <Button icon='save' primary />
          <Button icon='erase' secondary />
      </ButtonGroup>

      <Button.Group className="desktopIdCard-ButtonMemberDelete">
              <Modal
                    Icon='user delete'
                    open={open}
                    trigger={<Button className="desktopIdCard-memberDelete"><Icon name='user delete'/></Button>}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                  >
                    <Header icon='delete' content='Confirmer votre action' />
                    <Modal.Content>
                      <p>
                        Voulez-vous vraiment supprimer votre compte ?
                      </p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color='red' onClick={() => setOpen(false)}>
                        <Icon name='remove' /> Non
                      </Button>
                      <Button color='green' onClick={() => setOpen(false)}>
                        <Icon name='checkmark' /> Oui
                      </Button>
                    </Modal.Actions>
                  </Modal>

              </Button.Group>
       </Form>
      
      </Grid.Column>

      <Grid.Column className="desktopIdCard-rightPartWrapper">

    <Label className="desktopIdCard-rightPartWrapperLoginAndPic">
        <Header as='h3'>Pseudo</Header>
    </Label>

    <Image
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
    />
        <div>
    <Label as='a' size={'small'}>
        <Icon name="camera" />
        Modifier l'avatar
    </Label>
        </div>

      <span className="desktopIdCard-holidayWrapper">
            <Label className="setProfilPage-fourthPartHolidayModeLabel">Mode vacances: </Label>
            <Radio size="medium" toggle />
      </span>

      <Label>
        <p>Bio</p>
      </Label>
      <Form className="desktopIdCard-memberDescription">
            <TextArea placeholder="Parle nous un peu de toi..." />
       </Form>
        
      </Grid.Column>
    </Grid>


    {/* <Divider vertical ></Divider> */}
  </Segment>        

  );
}

export default DesktopSetIdCard;
