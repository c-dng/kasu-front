import React from 'react';
import { Button, Card, Icon, Image, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ResultCard = ({ mangaName, mangaPicture, ownerName, ownerPicture, ownerLocation, mangaSynopsis }) => (
  <div className="resultCard">
    <Card className="searchResultsByLocation-card">
      <Card.Content className="searchResultsByLocation-cardContentImgInfos">
        <Image
          size="medium"
          src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg"
        />

        <div className="searchResultsByLocation-infoscard">
          <Card.Header className="searchResultsByLocation-nameManga">Nom du manga</Card.Header>
          <div className="searchResultsByLocation-owner">
            <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" avatar />
                Propriétaire
              </div>
          <Card.Meta className="searchResultsByLocation-localisation"> <Icon disabled name="map marker alternate" /> Localisation</Card.Meta>

          <Card.Description className="searchResultsByLocation-numberVolume">
            <Select placeholder="Tomes disponibles"  />
          </Card.Description>
        </div>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic className="searchResultsByLocation-showMore" color="black">
            Voir plus
          </Button>
          <Button basic color="blue" className="searchResultsByLocation-contactOwner">
            Contacter le propriétaire
          </Button>
        </div>
        <div className={open ? 'searchResultsByLocation-showMore--active' : 'searchResultsByLocation-showMore--hidden'}>
          <h3>Synopsis</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </Card.Content>
    </Card>
  </div>
);
// ResultCard.propTypes = {
//   pseudo: PropTypes.string.isRequired,
// };

export default ResultCard;
