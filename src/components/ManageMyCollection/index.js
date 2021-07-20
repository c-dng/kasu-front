import React from 'react';
import { Header, Divider, Icon, Image, Dropdown, Button } from 'semantic-ui-react'
import SearchBar from 'src/components/SearchBar';
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

    <h2>Gestion des collections</h2>
      <SearchBar />

      <Header className="manageMyCollection-subtitle" as='h4' attached>
      Résultat de votre recherche
      </Header>

      <Header className="manageMyCollection-titleNameManga" as='h3'>
      Seven Deadly Sins
      </Header>

      <Image className="manageMyCollection-mangaImage"
        src="https://images-na.ssl-images-amazon.com/images/I/91GSy4frSdL.jpg"
        size="small"
        centered
    />

    <div className="manageMyCollection-selectAndAdd">
        <Dropdown className="manageMyCollection-dropdownSelectAndAdd" placeholder='Tome(s) à ajouter' size="5" fluid multiple selection options={options} />
        <div className="manageMyCollection-myCollectionTreeButtons">
          <Button color="red">
            Ajouter à ma collection
          </Button>
        </div>
    </div>

    <div className="manageMyCollection-myCollection">
      <Header as='h2'>
        <Icon name='settings' />
        <Header.Content>
            Ma collection
          <Header.Subheader>
            Gérer la visibilité, l'édition, ou la suppression
          </Header.Subheader>
        </Header.Content>
      </Header>
    </div>

      <Divider></Divider>

      <Header className="manageMyCollection-myCollectionTitleMangaOwner" as='h3'>
            Attaque des Titans
      </Header>

      <Image className="manageMyCollection-myCollectionTitleMangaOwnerImage"
          src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg"
          size="small"
          centered
      />

        <Dropdown
          placeholder='Choisir le(s) tome(s)' size="5" fluid multiple selection options={options} />
          <div className="manageMyCollection-myCollectionTreeButtons">
            <Button color='black'>
                Disponibilité
            </Button>
            <Button color='black'>
                Éditer
            </Button>
            <Button color='red'>
                Supprimer
            </Button>
          </div>
   </div>
);

export default ManageMyCollection;
