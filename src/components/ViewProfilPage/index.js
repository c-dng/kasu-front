import React from 'react';
import {
  Image, Container, Button, Select, Divider, Form,
} from 'semantic-ui-react';
import './style.scss';
import logo from './logo.png';

const ViewProfilPage = () => {
  const availableTomes = [
    { key: 't1', value: 't1', text: 'Tome 1' },
    { key: 't2', value: 't2', text: 'Tome 2' },
    { key: 't3', value: 't3', text: 'Tome 3' },
    { key: 't4', value: 't4', text: 'Tome 4' },
    { key: 't5', value: 't5', text: 'Tome 5' },

  ];

  return (
    <div className="viewProfilPage">

      <div className="viewProfilPage-first-part">
        <h1>Mon profil</h1>
        <Divider />
        <Image className="viewProfilPage-first-part-image" src={logo} size="tiny" />
        <Button className="viewProfilPage-first-part-addButton" circular>+</Button>
      </div>

      <div className="viewProfilPage-second-part">
        <h4>Présentation</h4>
        <Container textAlign="justified">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor.
          </p>
        </Container>
      </div>
      <Divider />
      <div className="viewProfilPage-third-part">
        <h4>Localisation</h4>
        <Container className="viewProfilPage-third-part-localisation" textAlign="center">
          <p>France</p>
          <p>Ville</p>
          <p>Code Postal</p>
        </Container>
      </div>
      <Divider />
      <Container className="viewProfilPage-fourth-part">
        <p>Mode vacances: Activé/Désactivé</p>
      </Container>
      <Divider />
      <Container className="viewProfilPage-fifth-part">
        <Container>
          <Image className="viewProfilPage-fifth-part-image" src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg" size="tiny" />
        </Container>
        <Container>
          <p>Nom Manga 1</p>
          <Form size="mini">
            <Select placeholder="Sélectionner un tome" options={availableTomes} />
          </Form>
        </Container>
      </Container>

      <Container className="viewProfilPage-fifth-part">
        <Container>
          <Image className="viewProfilPage-fifth-part-image" src="https://images-na.ssl-images-amazon.com/images/I/91GSy4frSdL.jpg" size="tiny" />
        </Container>
        <Container>
          <p>Nom Manga 2</p>
          <Form size="mini">
            <Select placeholder="Sélectionner un tome" options={availableTomes} />
          </Form>
        </Container>
      </Container>

      <Container className="viewProfilPage-fifth-part">
        <Container>
          <Image className="viewProfilPage-fifth-part-image" src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg" size="tiny" />
        </Container>
        <Container>
          <p>Nom Manga 3</p>
          <Form size="mini">
            <Select placeholder="Sélectionner un tome" options={availableTomes} />
          </Form>
        </Container>
      </Container>

      <div className="viewProfilPage-sixth-part">
        <Button className="viewProfilPage-sixth-part-deleteAccountButton" size="mini">Voir plus</Button>
      </div>

    </div>
  );
};

export default ViewProfilPage;
