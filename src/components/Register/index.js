import React from 'react';
import { Button, Form, Icon, Message, Dropdown} from 'semantic-ui-react'

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
    <Message
      attached
      header='Inscription'
    />

    <div class="ui container" centered>
    <Form className='attached fluid segment' fluid>
      <Form.Input className='register-form-input' label='Saisissez un e-mail' placeholder='E-mail' type='text' />

      <Form.Input className='register-form-input-email' label='Saisissez un pseudo' placeholder='Pseudo' type='text' />

      <Form.Input label='Saisissez un mot de passe' placeholder='Mot de passe' type='text' />

      <Form.Group widths='equal'>
        <Form.Input
          fluid
          label='Prénom'
          placeholder='Prénom'
          type='text'
        />
        <Form.Input
          fluid
          label='Nom de famille'
          placeholder='Nom de famille'
          type='text'
        />
      </Form.Group>
      <Form.Input label='Saisissez votre adresse' placeholder='Adresse' type='text' />
      
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

      <Button color='blue'>S'inscrire</Button>
    </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Déjà un compte?&nbsp;<a href='/login'>Connectez vous</a>&nbsp;ici.
    </Message>
  </div>
  </div>
)

export default Register;
