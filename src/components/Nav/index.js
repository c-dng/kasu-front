import React from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown, Image, Menu, Segment,
} from 'semantic-ui-react';
import './style.scss';
import { Link } from 'react-router-dom';
import logo from 'src/assets/images/logo.png';
import logoWhite from 'src/assets/images/logo-white.png';
import chatlogo from 'src/assets/images/chatlogo.png';
import chatlogoWhite from 'src/assets/images/chatlogo-white.png';
import logoutlogo from 'src/assets/images/logoutlogo.png';
import loginlogo from 'src/assets/images/loginlogo.png';

const Nav = ({
  changeWebsiteTheme, navIconsColor, isLogged, disconnectUser,
}) => {
  let logoToDisplay;
  let chatlogoToDisplay;

  switch (navIconsColor) {
    case 'black':
      logoToDisplay = logo;
      chatlogoToDisplay = chatlogo;
      break;
    case 'white':
      logoToDisplay = logoWhite;
      chatlogoToDisplay = chatlogoWhite;
      break;
    default:
      logoToDisplay = logo;
      chatlogoToDisplay = chatlogo;
      break;
  }

  const handleLogout = (evt) => {
    disconnectUser();
  };
  const handleTheme1 = (evt) => {
    changeWebsiteTheme('theme1', 'black');
  };

  const handleTheme2 = (evt) => {
    changeWebsiteTheme('theme2', 'white');
  };

  const handleTheme3 = (evt) => {
    changeWebsiteTheme('theme3', 'black');
  };

  const handleTheme4 = (evt) => {
    changeWebsiteTheme('theme4', 'black');
  };

  return (
    <div className="nav">
      <Segment className="nav-segment">
        <Menu className="nav-menu" icon fluid widths={4} borderless fixed="top">
          <Menu.Item className="nav-logoContainer" name="Logo">
            <Link to="/" exact={+true} className="nav-logoLinkContainer">
              <Image className="nav-logo" src={logoToDisplay} alt="logo" />
            </Link>
          </Menu.Item>
          {isLogged && (
            <Menu.Item>
              <Image circular className="navbuttons" id="temporary-avatar" src="https://react.semantic-ui.com/images/avatar/large/steve.jpg" alt="avatar-logo" size="mini" />
              <Dropdown floating icon="dropdown">
                <Dropdown.Menu>
                  <Dropdown.Header>Gestion de profil</Dropdown.Header>
                  <Dropdown.Item as={Link} to="/profil/mes-infos" exact={+true}>Mon Compte</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/profil/collection" exact={+true}>Ma Collection</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <Dropdown text="Mon thème">
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={handleTheme1}>Thème 1</Dropdown.Item>
                        <Dropdown.Item onClick={handleTheme2}>Thème 2</Dropdown.Item>
                        <Dropdown.Item onClick={handleTheme3}>Thème 3</Dropdown.Item>
                        <Dropdown.Item onClick={handleTheme4}>Thème 4</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          )}
          {isLogged && (
            <Menu.Item name="chat">
              <Image as={Link} to="/conversations" exact={+true} className="navbuttons" src={chatlogoToDisplay} alt="logo" size="mini" />
            </Menu.Item>
          )}
          {isLogged && (
            <Menu.Item name="logout">
              <Image onClick={handleLogout} className="navbuttons" src={logoutlogo} alt="logo" size="mini" />
            </Menu.Item>
          )}
          {!isLogged && (
          <Menu.Item position="right" name="login">
            <Image as={Link} to="/login" exact={+true} className="navbuttons nav-loginButton" src={loginlogo} alt="logo" size="mini" />
          </Menu.Item>
          )}
        </Menu>
      </Segment>
    </div>
  );
};

Nav.propTypes = {
  changeWebsiteTheme: PropTypes.func.isRequired,
  navIconsColor: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  disconnectUser: PropTypes.func.isRequired,
};

export default Nav;
