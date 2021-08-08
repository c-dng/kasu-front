import React, { useState } from 'react';
import {
  Button, Card, Icon, Image, Select,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import NoAccessModal from '../../NoAccessModal';

const ResultCard = ({
  mangaName,
  mangaPicture,
  ownerName,
  ownerPicture,
  ownerCity,
  ownerZipCode,
  mangaSynopsis,
  mangaVolumes,
  ownerId,
  handleLoadUser,
  createNewChat,
  isLogged,
}) => {
  const mangaVolumeOptions = mangaVolumes.map((volume, index) => ({
    key: index,
    text: volume.volume.number,
    value: volume.volume.number,
    className: `resultCard-volume${volume.status}`,
    disabled: true,
  }));

  const [open, setOpen] = useState(false);

  return (
    <div className="resultCard">
      <Card className="searchResultsByLocation-card">
        <Card.Content className="searchResultsByLocation-cardContentImgInfos">
          <Image
            size="medium"
            src={mangaPicture}
          />

          <div className="searchResultsByLocation-infoscard">
            <Card.Header className="searchResultsByLocation-nameManga">{mangaName}</Card.Header>
            {isLogged
              ? (
                <a className="searchResultsByLocation-owner" onClick={() => handleLoadUser(ownerId)}>
                  <Image src={`https://api.multiavatar.com/${ownerPicture}.png`} avatar />
                  {ownerName}
                </a>
              ) : (
                <NoAccessModal
                  trigger={(
                    <a className="searchResultsByLocation-owner">
                      <Image src={`https://api.multiavatar.com/${ownerPicture}.png`} avatar />
                      {ownerName}
                    </a>
                  )}
                />
              )}

            <Card.Meta className="searchResultsByLocation-localisation"> <Icon disabled name="map marker alternate" />{ownerCity} - {ownerZipCode}</Card.Meta>

            <Card.Description className="searchResultsByLocation-numberVolume">
              <Select placeholder="Tomes disponibles" options={mangaVolumeOptions} />
            </Card.Description>
          </div>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic className="searchResultsByLocation-showMore" color="black" onClick={() => setOpen(!open)}>
              Voir plus
            </Button>
            {isLogged
              ? (
                <Button onClick={() => createNewChat(ownerId)} basic color="blue" className="searchResultsByLocation-contactOwner">
                  Contacter le propriétaire
                </Button>
              ) : (
                <NoAccessModal
                  trigger={(
                    <Button basic color="blue" className="searchResultsByLocation-contactOwner">
                      Contacter le propriétaire
                    </Button>
                  )}
                />
              )}

          </div>
          {open && (
            <div className={open ? 'searchResultsByLocation-showMore--active' : 'searchResultsByLocation-showMore--hidden'}>
              <h3>Synopsis</h3>
              <p>{mangaSynopsis}</p>
            </div>
          )}
        </Card.Content>
      </Card>
    </div>
  );
};
ResultCard.propTypes = {
  mangaName: PropTypes.string.isRequired,
  mangaPicture: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  ownerPicture: PropTypes.string.isRequired,
  ownerCity: PropTypes.string.isRequired,
  ownerZipCode: PropTypes.number.isRequired,
  mangaSynopsis: PropTypes.string.isRequired,
  mangaVolumes: PropTypes.array.isRequired,
  ownerId: PropTypes.number.isRequired,
  handleLoadUser: PropTypes.func.isRequired,
  createNewChat: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default ResultCard;
