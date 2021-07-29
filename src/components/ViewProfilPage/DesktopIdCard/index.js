/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Divider, Icon, Image,
} from 'semantic-ui-react';
import '../style.scss';

const DesktopIdCard = ({ pseudo, bio, city, zipcode, picture, holidayMode }) => (
  <div className="desktopIdCard">
    <div className="desktopIdCard-mainCard">
      <Image
        size="small"
        src={picture || 'https://api.multiavatar.com/Kasu.svg'}
        className="desktopIdCard-avatar"
      />

      <div className="desktopIdCard-rightPartWrapper">
        <h3 className="desktopIdCard-memberName">{pseudo}</h3>
        <div className="desktopIdCard-locationWrapper">
          <Icon size="small" bordered circular name="map marker alternate" />
          <span className="desktopIdCard-memberLocation">{city} - {zipcode}</span>
        </div>
        <div className="desktopIdCard-holidayWrapper">
          <Icon size="small" bordered circular name="globe" />
          <span className="desktopIdCard-memberHolidayMode">Mode vacances : {holidayMode ? 'Activé' : 'Désactivé'}</span>
        </div>
        <Divider />
        <p className="desktopIdCard-memberDescription">
          {bio || 'Vous n\'avez pas encore écrit de présentation, rendez-vous dans "Gérer mon profil" !'}
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
