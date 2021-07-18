import React from 'react';
import { Card, Icon, Image, Button, Header, Rating} from 'semantic-ui-react'

import './style.scss';

const SearchResultsbyCP = () => (
  <div className="searchResultsbyCP">
    <Card centered>
      <Image src='https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg' wrapped ui={false} />
      <Card.Content>
        <div className="owner">
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
          Propriétaire <Rating icon='star' defaultRating={4} maxRating={5} />
        </div>

        <Card.Meta className='localisation'>
          <Icon disabled name='map marker alternate' />
          Localisation
        </Card.Meta>
        <Card.Description className='availableVolume'>Tomes disponibles</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="contactForm-buttonWrapper"><Button className="contactForm-sendButton">Voir plus</Button></div>
      </Card.Content>
    </Card>
  </div>
);

export default SearchResultsbyCP;
