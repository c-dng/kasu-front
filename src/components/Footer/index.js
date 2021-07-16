import React from 'react';
import { Menu } from 'semantic-ui-react'
import './style.scss';

const Footer = () => (
  <div className="footer">
<Menu fluid widths={3}>
        <Menu.Item
          name='Mentions légales'
        />

        <Menu.Item
          name='L/équipe'
        />

        <Menu.Item
          name='Contactez-nous'
        />
      </Menu>
  </div>
);

export default Footer;
