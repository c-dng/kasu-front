import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, FormInput } from 'semantic-ui-react';
import validator from 'validator'; //checking of password
import { Button, Header, Form, Icon, Checkbox, Image, Label, Modal, TextArea } from 'semantic-ui-react';

const DesktopSetIdCard = ({
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
  handleMessage,
  displayUserInfos
}) => {

  useEffect(() => (
    displayUserInfos()
    ),
    []);

    const [open, setOpen] = React.useState(false);//Modal to delete account
    const [avatar, setAvatar] = React.useState(false);//Modal to choose an avatar
    const [errorMessage, setErrorMessage] = React.useState('')//display a message received from API

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Bien soumis!');
    handleUpdate();
    handleMessage();
  };
  const handleChangeEmail = (evt) => {
    changeEmail(evt.target.value);
  };
  const handleChangePassword = (evt) => {
    validate(evt.target.value);//checking password
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
    let checked = data.checked;
    changeHolidayMode(checked);
  }
  //Check password with validator dependencie
  const validate = (value) => {
  
    if (validator.isStrongPassword(value, {
      minLength: 6, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('');
      console.log(errorMessage);
    } else {
      setErrorMessage('Veuillez entrer un mot de passe valide: min-6 caractères, une majuscule, une minuscule, un chiffre et un des caractères suivants: @$%_*|=-');
      console.log(errorMessage);
    }
  }

  return (
    
    <div className="desktopIdCard-MainWrapper">
      <div className="desktopIdCard-leftPartWrapper">
          <Image className="desktopIdCard-leftPartWrapperImage"
              centered
              size="medium"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
          <Modal
            onClose={() => setAvatar(false)}
            onOpen={() => setAvatar(true)}
            open={avatar}
            trigger={<Button size="massive" className="desktopSetProfil-addButton" circular icon='photo' />}
            >
            <Modal.Header>Upload image</Modal.Header>
            <Modal.Content image>
              <Button><Image circular size='mini' src='/images/wireframe/image-square.png' wrapped /></Button>
              <Button><Image circular size='mini' src='/images/wireframe/image-square.png' wrapped /></Button>
              <Button><Image circular size='mini' src='/images/wireframe/image-square.png' wrapped /></Button>
              <Button><Image circular size='mini' src='/images/wireframe/image-square.png' wrapped /></Button>
              <Button><Image circular size='mini' src='/images/wireframe/image-square.png' wrapped /></Button>
              <Button><Image circular size='mini' src='/images/wireframe/image-square.png' wrapped /></Button>
              <Button><Image circular size='mini' src='/images/wireframe/image-square.png' wrapped /></Button>
              <Button><Image circular size='mini' src='/images/wireframe/image-square.png' wrapped /></Button>
              <Button><Image circular size='mini' src='/images/wireframe/image-square.png' wrapped /></Button>
              <Button><Image circular size='mini' src='/images/wireframe/image-square.png' wrapped /></Button>
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

      <div className="desktopIdCard-rightPartWrapper">
        <Label as='a' color='red' ribbon='right'>Mes infos</Label>

        <Form onSubmit={handleSubmit}>
          <Form.Input className="desktopIdCard-holidayWrapper">
            <Label className="setProfilPage-fourthPartHolidayModeLabel">Mode vacances:</Label>
            <Checkbox toggle checked={holiday_mode ? true : false}
            onClick={(evt, data)=>onChangeCheckbox(evt, data)}
            />
          </Form.Input>

          <Label className="desktopIdCard-bioLabel">
            <p className="desktopIdCard-bioP">Description</p>
          </Label>
          <TextArea 
          rows={3}
          onChange={handleChangeDescription}
          value={description}
          className="mobileSetProfil-textArea"
          placeholder='Bio'
          />
          <Form.Input
            placeholder='Pseudo'
            value={pseudo}
            onChange={handleChangePseudo}
          />
          <Form.Group widths='equal'>
            <Form.Input className="desktopIdCard-formInputName"
              icon='user'
              iconPosition='left'
              placeholder='Prénom'
              value={firstName}
              onChange={handleChangeFirstName}
            />
            <Form.Input className="desktopIdCard-formInputLastName"
              icon='user'
              iconPosition='left'
              placeholder='Nom'
              value={lastName}
              onChange={handleChangeLastName}
            />
          </Form.Group>
            <Form.Input
              icon='map marker alternate'
              iconPosition='left'
              placeholder='Adresse'
              value={address}
              onChange={handleChangeAddress}
            />
            <Form.Input
              placeholder='Code Postal'
              value={zipCode}
              type='number'
              onChange={handleChangeZipCode}
            />      
            <Form.Input
              placeholder='Ville'
              value={city}
              onChange={handleChangeCity}
            />
          <Form.Group widths='equal'>
            <Form.Input className="desktopIdCard-formInpuPassword"
              input='password'
              icon='lock'
              iconPosition='left'
              placeholder='Mot de passe'
              value={password}
              onChange={handleChangePassword}
            />
            <Form.Input 
              className="desktopIdCard-formInputEmail"
              icon='mail'
              type='email'
              iconPosition='left'
              placeholder='Email'
              value={email}
              onChange={handleChangeEmail}
            />
          </Form.Group>

          <div className="desktopIdCard-errorMessage">
            {errorMessage}
          </div>
          <div className="desktopIdCard-Bottom3Buttons">
            <ButtonGroup widths='3' >
              <Button icon='erase' color='black' />
                <Modal
                  icon='user delete'
                  open={open}
                  trigger={<Button className="desktopIdCard-memberDelete" color='red'><Icon name='user delete'/></Button>}
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  >      
                  <Header icon='delete' content='Confirmer votre action' />
                  <Modal.Content>
                    <p>Voulez-vous vraiment supprimer votre compte ?</p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='red' onClick={() => setOpen(false)}>
                      <Icon name='remove' /> Non
                    </Button>
                    <Button color='green' onClick={() => setOpen(true)}>
                      <Icon name='checkmark' /> Oui
                    </Button>
                  </Modal.Actions>
                </Modal>
                <Button type="submit" icon='save' color='green' />
              </ButtonGroup>
          </div>
        </Form>
      </div>
    </div>        
  );
}

export default DesktopSetIdCard;
