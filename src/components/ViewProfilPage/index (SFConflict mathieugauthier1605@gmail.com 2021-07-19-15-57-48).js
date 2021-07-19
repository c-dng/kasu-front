import React from 'react';
import {
  Image, Container, Button, Select, Divider, Form } from 'semantic-ui-react';
import './styles.scss';
import logo from './logo.png';

const ViewProfilPage = () => {

  const availableTomes = [
    { key: 't1', value: 't1', text: 'Tome 1' },
    { key: 't2', value: 't2', text: 'Tome 2' },
    { key: 't3', value: 't3', text: 'Tome 3' },
    { key: 't4', value: 't4', text: 'Tome 4' },
    { key: 't5', value: 't5', text: 'Tome 5' },
    
  ]

  return (
      <div className="viewProfilPage">
        
        <div className="viewProfilPage-first-part">
          <h1>Mon profil</h1>
          <Divider />
          <Image className="viewProfilPage-first-part-image" src={logo} size="tiny" />
          <Button className="viewProfilPage-first-part-addButton" circular>+</Button>
        </div>

        <div className="viewProfilPage-second-part">
          <h3>Présentation</h3>
          <Container textAlign='justified'>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </Container>
        </div>

        <div className="viewProfilPage-third-part">
          <h3>Localisation</h3>
          <Container className="viewProfilPage-third-part-localisation" textAlign='center'>
            <p>France</p>
            <p>Ville</p>
            <p>Code Postal</p>
          </Container>
        </div>

        <Container className="viewProfilPage-fourth-part">
          <p>Mode vacances: Activé/Désactivé</p>
        </Container>

        <Container className="viewProfilPage-fifth-part" width='8'>
          <Container>
            <Image src={logo} size='mini' />
          </Container>
          <Container>
            <p>Nom Manga 1</p>
            <Form size='4'>
              <Select placeholder='Sélectionner un tome' options={availableTomes} />
            </Form>
          </Container>
        </Container>

        <div className="viewProfilPage-sixth-part">
          <Button className="viewProfilPage-sixth-part-deleteAccountButton" size='mini'>Voir plus</Button>
        </div>

      </div>
    );
};


export default ViewProfilPage;
