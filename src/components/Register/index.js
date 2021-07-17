import React from 'react';
import { Button, Form, Icon, Message, Link} from 'semantic-ui-react'

import './style.scss';

// fake data so that the selection of cities can be displayed
const fakeDatas = [
  {
    key: 'Paris',
    text: 'Paris',
    value: 'Paris',
  },
  {
    key: 'Toulouse',
    text: 'Toulouse',
    value: 'Toulouse',
  },
]

const Register = () => (

  <div className="register" >

    <h1>Inscription</h1>
    
    <div className="ui container">
    <Form className='attached fluid segment register-form' >
      <Form.Input className='register-form-input' label='Saisissez un e-mail' placeholder='E-mail' type='text' />

      <Form.Input className='register-form-input-email' label='Saisissez un pseudo' placeholder='Pseudo' type='text' />

      <Form.Input className='register-form-input-password' label='Saisissez un mot de passe' placeholder='Mot de passe' type='text' />

      <Form.Group widths='equal'>
        <Form.Input className='register-form-input-firstname'
          fluid
          label='Prénom'
          placeholder='Prénom'
          type='text'
        />
        <Form.Input className='register-form-input-lastname'
          fluid
          label='Nom de famille'
          placeholder='Nom de famille'
          type='text'
        />
      </Form.Group>
      <Form.Input className='register-form-input-adress' label='Saisissez votre adresse' placeholder='Adresse' type='text' />
      
      <Form.Group widths='equal'>
        <Form.Input
          fluid
          label='Saisissez un code postal'
          placeholder='Votre code postal'
          type='text'
        />
        <Form.Dropdown
          label='Saisissez votre ville'
          placeholder='Votre ville'
          fluid
          selection
          options={fakeDatas}
        />
    
      </Form.Group>
        {/* the {+true} is used to resolve an error linked to semantic-ui and the "exact"
        attribute from react-router */}
      <Button className="register-button" as={Link} to="/register" exact={+true}>S'inscrire</Button>
    </Form>
        <Icon name='help' />
          Déjà un compte?&nbsp;<a href='/login'>Connectez vous</a>&nbsp;ici.

    </div>
  </div>
);

export default Register;
