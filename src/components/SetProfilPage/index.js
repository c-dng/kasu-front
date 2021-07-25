import React from 'react';
import {
  Image, TextArea, Button, Form, Radio, Container, Modal, Header, Icon, Input, Label,
} from 'semantic-ui-react';
import './style.scss';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';
import logo from 'src/assets/images/logo2.png';
import DesktopSetIdCard from './DesktopSetIdCard';

const SetProfilPage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="setProfilPage">

      <Image className="registerForm-banner" src={alternativeBanner} />
      <div className="viewProfilPage">
        <Image className="registerForm-banner" src={alternativeBanner} />
        <div className="viewProfilPage-mainWrapper">

          <h1 className="setProfilPage-h1">Gérer mon profil</h1>
          <DesktopSetIdCard />

        </div>
      </div>

    </div>
  );
};

export default SetProfilPage;
