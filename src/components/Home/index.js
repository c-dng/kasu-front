import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';
import './style.scss';

const Home = () => (
  <div className="home">
<<<<<<< HEAD
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Description>
              <strong>Kasu</strong>, qui veut dire "prêter" en japonais, est une plateforme offrant la possibilité aux passionnés de s'échanger mutuellement et temporairement leurs mangas.
              <br></br>
              Cherchez les collections disponibles près de chez vous!
              <br></br>
              Entrez en contact et définissez ensemble vos conditions d’échange.
              <br></br>
              Bonne lecture!
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Form.Button >
                Se connecter
              </Form.Button>
              <Form.Button >
                S'inscrire
              </Form.Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
=======
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

          {/* <Button.Group>
            <Button negative>Connexion</Button>
            <Button.Or className="home-orButton" text="ou" />
            <Button positive>Inscription</Button>
          </Button.Group> */}
          <Button className="home-button" as={Link} to="/login">Se connecter</Button>
          <Button className="home-button" as={Link} to="/register">S'inscrire</Button>
        </div>
      </Card.Content>
    </Card>
>>>>>>> dev
  </div>
);

export default Home;
