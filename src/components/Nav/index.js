import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react';
import './style.scss';
import logo from './logo.png';

const Nav = () => (
  <div className="nav">
    <Segment inverted>
      <Menu inverted icon fluid widths={5} borderless fixed="top">
        <Menu.Item name="Logo">
          <img id="nav-logo" src={logo} alt="logo" />
        </Menu.Item>
        <Menu.Item name="gamepad">
          <Icon name="gamepad" />
        </Menu.Item>
        <Menu.Item name="avatar">
          <Icon name="image" />
        </Menu.Item>
        <Dropdown icon="image" pointing className="link item">
          <Dropdown.Menu direction="left">
            <Dropdown.Header>Gestion de profil</Dropdown.Header>
            <Dropdown.Item>Mon Compte</Dropdown.Item>
            <Dropdown.Item>Ma Collection</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Dropdown text="Mon thème">
                <Dropdown.Menu>
                  <Dropdown.Item>Thème 1</Dropdown.Item>
                  <Dropdown.Item>Thème 2</Dropdown.Item>
                  <Dropdown.Item>Thème 3</Dropdown.Item>
                  <Dropdown.Item>Thème 4</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item name="logout">
          <Icon name="logout" />
        </Menu.Item>
      </Menu>
    </Segment>
  </div>
);

export default Nav;
