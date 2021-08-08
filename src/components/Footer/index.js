import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';
import './style.scss';

const Footer = () => (
  <div className="footer">
    <Menu compact secondary>
      <Menu.Item as={Link} tabIndex="0" to="/mentions-legales" className="footer-items" exact={+true}>Mentions légales</Menu.Item>
      <Menu.Item as={Link} tabIndex="0" to="/team" className="footer-items" exact={+true}>L'équipe</Menu.Item>
      <Menu.Item as={Link} tabIndex="0" to="/contact" className="footer-items" exact={+true}>Contactez-nous</Menu.Item>
    </Menu>
  </div>
);

export default Footer;
