import React from 'react';
import { Card, Divider, Image } from 'semantic-ui-react';
import SearchBar from '../../SearchBar';
import homeCardLogo from '../home-card-logo.jpg';

const SearchExplained = () => (
  <div className="searchExplained">
    <Card className="home-card" centered>
      <Card.Content>
        <Card.Header>Découvrez les collections près de chez vous</Card.Header>
        <Divider />
        <Card.Description>
          Cherchez les collections disponibles près de chez vous, entrez en contact
          et définissez ensemble vos conditions d’échange.
          Pour commencer, tapez le nom de votre ville dans la barre de recherche.
          Bonne lecture !
        </Card.Description>
      </Card.Content>
      <Card.Content className="home-cardImageContent">
        {/* <Image className="home-cardImage" src={homeCardLogo} /> */}
        <SearchBar />
      </Card.Content>
    </Card>
  </div>
);

export default SearchExplained;
