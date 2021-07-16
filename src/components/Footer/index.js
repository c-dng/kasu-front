import React from 'react';
import { Label, Icon } from 'semantic-ui-react'
import './style.scss';

const Footer = () => (
  <div>
    <Label as='a'>
    <Icon disabled name='file alternate outline' />
      Mentions légales
    </Label>
    <Label as='a'>
    <Icon disabled name='users' />
      L'équipe
    </Label>
    <Label as='a'>
      <Icon disabled name='envelope outline' />
      Contactez-nous
    </Label>
  </div>
);

export default Footer;