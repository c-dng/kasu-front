import React from 'react';
import { Card, Icon, Input, Button} from 'semantic-ui-react'

import './style.scss';

const Login = () => (
  <Card fluid>
    <Card.Content header='Connexion' />
    <Card.Content text /> E-mail
    <Input iconPosition='left' placeholder='Email'>
      <Icon name='at' />
      <input />
    </Input>

    <Card.Content text /> Mot de passe

    <Input placeholder='Password...' />

    <Button fluid>Se connecter</Button>

    <Card.Content extra>
      <Icon name='question' /> Mot de passe oublié
    </Card.Content>
    
  </Card>
);

export default Login;
