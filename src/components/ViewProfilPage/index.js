import React from 'react';
import {
  Image, Container, Button, Select, Divider, Form, Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.scss';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';
import logo from 'src/assets/images/logo.png';

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
      <Image className="registerForm-banner" src={alternativeBanner} />
      <div className="viewProfilPage-mainWrapper">
        <div className="viewProfilPage-firstPart">
          <h1 className="setProfilPage-h1">Mon profil</h1>
          <Image className="viewProfilPage-firstPartImage" src={logo} size="tiny" />
          <Button className="viewProfilPage-firstPartAddButton" circular>+</Button>
        </div>

        <div className="viewProfilPage-secondPart">
          <Container textAlign="center">
            <p>Pseudo</p>
          </Container>
          <div className="viewProfilPage-secondPartChangeButtons">
            <Link to="/profil/id" exact={+true}>
              <Button size="mini" className="viewProfilPage-secondPartChangeButtonsLeft" attached="left">Gérer mon profil</Button>
            </Link>
            <Link to="/profil/collection" exact={+true}>
              <Button
                size="mini"
                className="viewProfilPage-secondPartChangeButtonsRight"
                attached="right"
              >Gérer mes collections
              </Button>
            </Link>
          </div>
          <h4>Présentation</h4>
          <Container textAlign="justified">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </Container>
        </div>

        <Divider />

        <div className="viewProfilPage-thirdPart">
          <h4>Localisation</h4>
          <Container className="viewProfilPage-thirdPartLocation">
            <Icon size="large" name="map marker alternate" />
            <p>France</p>
            <p>Ville</p>
            <p>Code Postal</p>
          </Container>
        </div>

        <Divider />

        <Container className="viewProfilPage-fourthPart">
          <p>Mode vacances: Activé/Désactivé</p>
        </Container>

        <Divider />

        <Container className="viewProfilPage-fifthPart">
          <Container>
            <Image className="viewProfilPage-fifthPartImage" src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg" size="tiny" />
          </Container>
          <Container>
            <p>Nom Manga 1</p>
            <Form size="mini">
              <Select placeholder="Sélectionner un tome" options={availableTomes} />
            </Form>
          </Container>
        </Container>

        <Container className="viewProfilPage-fifthPart">
          <Container>
            <Image className="viewProfilPage-fifthPartImage" src="https://images-na.ssl-images-amazon.com/images/I/91GSy4frSdL.jpg" size="tiny" />
          </Container>
          <Container>
            <p>Nom Manga 2</p>
            <Form size="mini">
              <Select placeholder="Sélectionner un tome" options={availableTomes} />
            </Form>
          </Container>
        </Container>

        <Container className="viewProfilPage-fifthPart">
          <Container>
            <Image className="viewProfilPage-fifthPartImage" src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg" size="tiny" />
          </Container>
          <Container>
            <p>Nom Manga 3</p>
            <Form size="mini">
              <Select placeholder="Sélectionner un tome" options={availableTomes} />
            </Form>
          </Container>
        </Container>

        <div className="viewProfilPage-sixthPart">
          <Button className="viewProfilPage-sixthPartDeleteAccountButton" size="mini">Voir plus</Button>
        </div>
      </div>
    </div>
  );
};

export default ViewProfilPage;
