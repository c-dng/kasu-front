import React from 'react';
import { Header, Divider, Icon, Image, Segment, Dropdown, Button } from 'semantic-ui-react'

import './style.scss';

const options = [
  { key: 't1', value: 'T1', text: '1' },
  { key: 't2', value: 'T2', text: '2' },
  { key: 't3', value: 'T3', text: '3' },
  { key: 't4', value: 'T4', text: '4' },
  { key: 't5', value: 'T5', text: '5' },
  { key: 't6', value: 'T6', text: '6' },
  { key: 't7', value: 'T7', text: '7' },
  { key: 't8', value: 'T8', text: '8' },
  { key: 't9', value: 'T9', text: '9' },
]

const ManageMyCollection = () => (
  <div className="manageMyCollection">

    <h1>Gestion des collections</h1>
    <Header as='h4' attached='centered'>
      Résultat de votre recherche
    </Header>

    <Header className="titleNameManga " as='h3'>
    Seven Deadly Sins
    </Header>
    <Image className="Manga-image"
        src="https://images-na.ssl-images-amazon.com/images/I/91GSy4frSdL.jpg"
        size="small"
        centered
    />

    <div className="LineVolumeToAdd">
      <Dropdown className="dropdownChooseManga" placeholder='Tome(s) à ajouter' size="5" fluid multiple selection options={options} />
      <div className="ButtonAddToMyCollection">
      <Button className="add-to-my-collection" color="red">
        Ajouter à ma collection
      </Button>
      </div>
    </div>

    <Header className="myCollection" as='h2'>
    <Icon name='settings' />
    <Header.Content>
        Ma collection
      <Header.Subheader>Gérer la visibilité, éditer, supprimer</Header.Subheader>
    </Header.Content>
    </Header>

    <Divider></Divider>

    <div className="globalCardManga">
    
      <div className="myMangas">
    <Header className="titleNameManga " as='h3'>
        Attaque des Titans
    </Header>

    <Image className="Manga-image"
        src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg"
        size="small"
        centered
    />

    <div className="tree-buttons">
    <Segment>
      <Dropdown placeholder='Choisir le(s) tome(s)' size="5" fluid multiple selection options={options} />
      <Button color='black'>
          Disponibilité
      </Button>
      <Button color='black'>
          Éditer
      </Button>
      <Button color='red'>
          Supprimer
      </Button>
      </Segment>
    </div>

    
    </div>


    





</div>
</div>


);

export default ManageMyCollection;
