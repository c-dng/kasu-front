import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Divider, Icon, Image,
} from 'semantic-ui-react';

const DesktopIdCardOther = ({ pseudo, bio, city, zipcode, picture, holidayMode, userId, createNewChat }) => (
  <div className="desktopIdCardOther">
    <div className="desktopIdCardOther-mainCard">
      <Image
        size="medium"
        src={`https://api.multiavatar.com/${picture}.png`}
        className="desktopIdCardOther-avatar"
      />

      <div className="desktopIdCardOther-rightPartWrapper">
        <h3 className="desktopIdCardOther-memberName">{pseudo}</h3>
        <div className="desktopIdCardOther-locationWrapper">
          <Icon size="small" bordered circular name="map marker alternate" />
          <span className="desktopIdCardOther-memberLocation">{city} - {zipcode}</span>
        </div>
        <div className="desktopIdCardOther-holidayWrapper">
          <Icon size="small" bordered circular name="globe" />
          <span className="desktopIdCardOther-memberHolidayMode">Mode vacances : {holidayMode ? 'Activé' : 'Désactivé'}</span>
        </div>
        <Divider />
        <p className="desktopIdCardOther-memberDescription">
          {bio || 'Cet utilisateur n\'a pas de description !'}
        </p>
        <Divider />
        <Button onClick={() => createNewChat(userId)} basic color="blue" className="desktopIdCardOther-contactOwner">
          Contacter le propriétaire
        </Button>

      </div>
    </div>
  </div>
);

export default DesktopIdCardOther;
