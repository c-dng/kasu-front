/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
import React from 'react';
import { Button, Card, Icon, Image, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ResultCard = ({ mangaName, mangaPicture, ownerName, ownerPicture, ownerLocation, mangaSynopsis }) => (
  <div className="resultCard">
    <Card className="searchResultsByLocation-card">
      <Card.Content className="searchResultsByLocation-cardContentImgInfos">
        <Image
          size="medium"
          src={mangaPicture}
        />

        <div className="searchResultsByLocation-infoscard">
          <Card.Header className="searchResultsByLocation-nameManga">{mangaName}</Card.Header>
          <div className="searchResultsByLocation-owner">
            <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" avatar />
            Propriétaire
          </div>
          <Card.Meta className="searchResultsByLocation-localisation"> <Icon disabled name="map marker alternate" /> Localisation</Card.Meta>

          <Card.Description className="searchResultsByLocation-numberVolume">
            <Select placeholder="Tomes disponibles" />
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
          <p>{mangaSynopsis}</p>
        </div>
      </Card.Content>
    </Card>
  </div>
);
// ResultCard.propTypes = {
//   pseudo: PropTypes.string.isRequired,
// };

export default ResultCard;
