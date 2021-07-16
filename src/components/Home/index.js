import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';
import './style.scss';

const Home = () => (
  <div className="home">
    <Card fluid>
      <Card.Content>
        <Card.Description>
          <strong>Kasu</strong>, qui veut dire "prêter" en japonais, est une plateforme offrant
          la possibilité aux passionnés de s'échanger mutuellement et temporairement leurs mangas.
          <br />
          Cherchez les collections disponibles près de chez vous!
          <br />
          Entrez en contact et définissez ensemble vos conditions d’échange.
          <br />
          Bonne lecture!
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <div className="home-buttonWrapper">

          {/* this is just in case we prefer the dual connect/register button
          <Button.Group>
            <Button negative>Connexion</Button>
            <Button.Or className="home-orButton" text="ou" />
            <Button positive>Inscription</Button>
          </Button.Group> */}
          <Button className="home-button" as={Link} to="/login">Se connecter</Button>
          <Button className="home-button" as={Link} to="/register">S'inscrire</Button>
        </div>
      </Card.Content>
    </Card>
  </div>
);

export default Home;
