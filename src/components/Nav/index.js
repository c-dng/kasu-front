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
  changeWebsiteTheme,
  navIconsColor,
  isLogged,
  disconnectUser,
  handleConversationsLoad,
  loadUserInfos,
  picture,
}) => {
  let logoToDisplay;
  let chatlogoToDisplay;
  // the icons can't change colors directly via css, so had to import icons both in white and black.
  // This switch allows to specify what image file to take in function of the chosen theme.
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
  // sends a LOGOUT_USER action type to every reducer to re-init states
  // and removes the jwt token from localstorage
  const handleLogout = () => {
    disconnectUser();
  };
  const handleTheme1 = () => {
    changeWebsiteTheme('theme1', 'black');
  };

  const handleTheme2 = () => {
    changeWebsiteTheme('theme2', 'white');
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
          {/* conditional rendering if the user is logged or not */}
          {isLogged && (
            <Menu.Item className="nav-myProfilButton">
              <Image circular className="navbuttons" id="temporary-avatar" src={`https://api.multiavatar.com/${picture}.png`} alt="avatar-logo" size="mini" />
              <Dropdown floating icon="dropdown">
                <Dropdown.Menu>
                  <Dropdown.Header>Gestion de profil</Dropdown.Header>
                  <Dropdown.Item as={Link} to="/profil/mon-profil" onClick={() => loadUserInfos()} exact={+true} className="nav-dropdownlinkMyProfil">Mon Compte</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/profil/collection" exact={+true} className="nav-dropdownlinkMyCollection">Ma Collection</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="nav-dropdownTheme">
                    <Dropdown text="Mon thème">
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={handleTheme1}>Bright mode</Dropdown.Item>
                        <Dropdown.Item onClick={handleTheme2}>Dark mode</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          )}
          {isLogged && (
            <Menu.Item as="div" onClick={() => handleConversationsLoad()} name="chat" className="nav-myConversationsButton">
              <Image as={Link} to="/conversations" exact={+true} className="navbuttons" src={chatlogoToDisplay} alt="logo" size="mini" />
            </Menu.Item>
          )}
          {isLogged && (
            <Menu.Item name="logout" className="nav-logoutButton">
              <Image as={Link} to="/" exact={+true} onClick={handleLogout} className="navbuttons" src={logoutlogo} alt="logo" size="mini" />
            </Menu.Item>
          )}
          {!isLogged && (
            <Menu.Item position="right" name="login" className="nav-loginButton">
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
  handleConversationsLoad: PropTypes.func.isRequired,
  loadUserInfos: PropTypes.func.isRequired,
  picture: PropTypes.string,
};

Nav.defaultProps = {
  picture: '',
};

export default Nav;
