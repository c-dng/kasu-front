import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Divider, Icon, Image,
} from 'semantic-ui-react';
import '../style.scss';

const DesktopIdCard = () => (
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
        <p className="desktopIdCard-memberDescription">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam molestiae quaera
          impedit aspernatu  adipisci aliquid commodi optio ipsum numquam doloremque,
          laboriosam, deleniti dolorum assumenda architecto minus odit ab. Facilis, quos.
        </p>
        <Divider />
        <div className="desktopIdCard-memberPartWrapper">
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

export default DesktopIdCard;
