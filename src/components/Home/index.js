import React from 'react';
import { Button, Card, Image, Form } from 'semantic-ui-react'
import './style.scss';

const Home = () => (
  <div className="home">
      <Card.Group>
    <Card>
      <Card.Content>

        <Card.Description>
          <strong>Kasu</strong>, qui veut dire "prêter" en japonais, estune plateforme offrant la possibilité aux passionnés de s'échanger mutuellement et temporairement leurs mangas.
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
          <Form.Button>
            Se connecter
          </Form.Button>
          <Form.Button>
            S'inscrire
          </Form.Button>

        </div>
      </Card.Content>
    </Card>
    
  </Card.Group>
  </div>
);

export default Home;
