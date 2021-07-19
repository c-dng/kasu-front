import React from 'react';
import { Header, Icon, Image, Segment, Dropdown, Button } from 'semantic-ui-react'

import './style.scss';

const options = [
  { key: 't1', value: 'T1', text: 'Tome 1' },
  { key: 't2', value: 'T2', text: 'Tome 2' },
  { key: 't3', value: 'T3', text: 'Tome 3' },
  { key: 't4', value: 'T4', text: 'Tome 4' },
  { key: 't5', value: 'T5', text: 'Tome 5' },
]

const ManageMyCollection = () => (
  <div className="manageMyCollection">

    {/* <h1>Gestion des collections</h1> */}
    <Header as='h4' attached='top'>
      Résultat de votre recherche
    </Header>

    <Image className="Manga-image"
           src="https://images-na.ssl-images-amazon.com/images/I/91GSy4frSdL.jpg"
    />

    <Header className="titleNameManga " as='h4'>
    Seven Deadly Sins
    </Header>
    
    <Segment attached="premier">
      <Dropdown placeholder='Tome(s) à ajouter' fluid multiple selection options={options} />
      <Button className="add-to-my-collection" color="red">
        Ajouter à ma collection
      </Button>
    </Segment>

    <Header className="myCollection" as='h2'>
    <Icon name='settings' />
    <Header.Content>
        Ma collection
      <Header.Subheader>Gérer la visibilité, éditer, supprimer</Header.Subheader>
    </Header.Content>
    </Header>

    <Header as='h4' attached='top'>
    <Image className="Manga-image"
           src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg"
    />
        Nom du manga
    </Header>
    <Segment attached="deuxieme">
      <Dropdown placeholder='Tome(s) à éditer' fluid multiple selection options={options} />
    <div>
    <Button color='black'>
        Disponiblité
    </Button>
    <Button color='black'>
        Éditer
    </Button>
    <Button color='red'>
        Supprimer
    </Button>
    </div>

    </Segment>




  </div>
);

export default ManageMyCollection;
