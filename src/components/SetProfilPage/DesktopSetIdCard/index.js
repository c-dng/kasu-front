import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Form, Icon, Image, TextArea } from 'semantic-ui-react';

const DesktopSetIdCard = () => (
  <div className="desktopIdCard">
    <div className="desktopIdCard-mainCard">
      <Image
        size="small"
        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        className="desktopIdCard-avatar"
      />

      <div className="desktopIdCard-rightPartWrapper">
        <h3 className="desktopIdCard-memberName">Steve Sanders</h3>
        <div className="desktopIdCard-locationWrapper">
          <Icon size="small" bordered circular name="map marker alternate" />
          <span className="desktopIdCard-memberLocation">Paris - 75000</span>
        </div>
        <div className="desktopIdCard-holidayWrapper">
          <Icon size="small" bordered circular name="globe" />
          <span className="desktopIdCard-memberHolidayMode">Mode vacances : Activé</span>
        </div>
        <Divider />

        <Form className="desktopIdCard-memberDescription">
          <TextArea placeholder="Parle nous un peu de toi..." />
        </Form>

        <Divider />
        <div className="desktopIdCard-memberPartWrapper">
          <Button circular icon>
            <Icon name="camera" />
          </Button>
          <div className="desktopIdCard-changeButtonsWrapper">
            <Link to="/profil/id" exact={+true}>
              <Button size="mini" className="desktopIdCard-changeButtonsLeft" attached="left">Gérer mon profil</Button>
            </Link>
            <Link to="/profil/collection" exact={+true}>
              <Button
                size="mini"
                className="desktopIdCard-changeButtonsRight"
                attached="right"
              >Gérer mes collections
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DesktopSetIdCard;
