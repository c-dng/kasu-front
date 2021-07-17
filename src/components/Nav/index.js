import React from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown, Icon, Image, Menu, Segment,
} from 'semantic-ui-react';
import './style.scss';
import logo from './logo.png';
import chatlogo from './chatlogo.png';
import dropdownlogo from './dropdownlogo.png';
import logoutlogo from './logoutlogo.png';

const Nav = () => (
  <div className="nav">
    <Segment className="nav-segment">
      <Menu className="nav-menu" icon fluid widths={5} borderless fixed="top">
        <Menu.Item className="nav-logoContainer" name="Logo">
          <Image className="nav-logo" src={logo} alt="logo" />
        </Menu.Item>
        <Menu.Item name="chat">
          <Image circular className="navbuttons" src={chatlogo} alt="logo" size="mini" />
        </Menu.Item>
        <Menu.Item name="avatar">
          <Image circular className="navbuttons" src={chatlogo} alt="logo" size="mini" />
        </Menu.Item>
        <Menu.Item>
          <Image circular className="navbuttons" src={dropdownlogo} alt="dropdown-logo" size="mini" />
          <Dropdown floating icon="dropdown" >
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
        </Menu.Item>
        <Menu.Item name="logout">
          <Image circular className="navbuttons" src={logoutlogo} alt="logo" size="mini" />
        </Menu.Item>
      </Menu>
    </Segment>
  </div>
);

export default Nav;
