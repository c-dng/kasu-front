import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Divider, Icon, Image,
} from 'semantic-ui-react';

// Desktop component to display another member infos
const DesktopIdCardOther = ({
  pseudo,
  bio,
  city,
  zipcode,
  picture,
  holidayMode,
  userId,
  createNewChat,
}) => (
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
        <Button onClick={() => createNewChat(userId)} className="desktopIdCardOther-contactOwner">
          Contacter le propriétaire
        </Button>

      </div>
    </div>
  </div>
);

DesktopIdCardOther.propTypes = {
  pseudo: PropTypes.string.isRequired,
  bio: PropTypes.string,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  holidayMode: PropTypes.bool,
  userId: PropTypes.number.isRequired,
  createNewChat: PropTypes.func.isRequired,
};

DesktopIdCardOther.defaultProps = {
  bio: '',
  holidayMode: false,
};

export default DesktopIdCardOther;
