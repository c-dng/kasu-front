/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  Header, Divider, Icon, Image, Dropdown, Button, Card,
} from 'semantic-ui-react';
import SearchBar from 'src/components/SearchBar';
import './style.scss';
import alternativeBanner from 'src/assets/alternativeBanner.png';

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
];

const ManageMyCollection = () => (
  <div className="manageMyCollection">
    <Image className="manageMyCollection-banner" src={alternativeBanner} />
    <Card className="manageMyCollection-mainCard">
      <Card.Content className="manageMyCollection-mainCardContent">
        <Card.Header className="manageMyCollection-mainCardHeader">Gestion des collections</Card.Header>
        <h3 className="manageMyCollection-subHeader">Cherche un manga à ajouter à ta collection dans notre base de donnée !</h3>
        <div className="manageMyCollection-searchBarWrapper">
          <SearchBar className="manageMyCollection-searchBar" />
        </div>
        <Divider className="manageMyCollection-divider" />
        <h4 className="manageMyCollection-subtitle">Résultat(s) trouvé(s) :</h4>
        <Divider className="manageMyCollection-divider" />
        <h3 className="manageMyCollection-titleNameManga">Seven Deadly Sins</h3>

        <div className="manageMyCollection-mangaImageWrapper">
          <Image
            className="manageMyCollection-mangaImage"
            src="https://images-na.ssl-images-amazon.com/images/I/91GSy4frSdL.jpg"
            size="small"
          />
        </div>

        <div className="manageMyCollection-selectAndAdd">
          <Dropdown className="manageMyCollection-dropdownSelectAndAdd" placeholder="Tome(s) à ajouter" size="5" fluid multiple selection options={options} />
          <div className="manageMyCollection-addToMyCollection">
            <Button className="manageMyCollection-addToMyCollectionButton">Ajouter à ma collection</Button>
          </div>
        </div>

        <Divider className="manageMyCollection-divider" />

        <h3 className="manageMyCollection-titleNameManga">Seven Deadly Sins: Reloaded, Origins, The beginning, Spin-off</h3>

        <div className="manageMyCollection-mangaImageWrapper">
          <Image
            className="manageMyCollection-mangaImage"
            src="https://images-na.ssl-images-amazon.com/images/I/91GSy4frSdL.jpg"
            size="small"
          />
        </div>

        <div className="manageMyCollection-selectAndAdd">
          <Dropdown className="manageMyCollection-dropdownSelectAndAdd" placeholder="Tome(s) à ajouter" size="5" fluid multiple selection options={options} />
          <div className="manageMyCollection-addToMyCollection">
            <Button className="manageMyCollection-addToMyCollectionButton">Ajouter à ma collection</Button>
          </div>
        </div>

        <Divider className="manageMyCollection-divider" />

        <div className="manageMyCollection-myCollection">
          <Header as="h2">
            <Icon className="manageMyCollection-myCollectionIcon" name="settings" />
            <Header.Content className="manageMyCollection-myCollectionHeaderContent">
              Ma collection
              <Header.Subheader className="manageMyCollection-myCollectionSubHeader">
                Gérer la visibilité, l'édition, ou la suppression
              </Header.Subheader>
            </Header.Content>
          </Header>
        </div>

        <Divider className="manageMyCollection-divider" />

        <div className="manageMyCollection-myCollectionItem">

          <div className="manageMyCollection-itemContentWrapper">
            <Image
              className="manageMyCollection-myCollectionTitleMangaImage"
              src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg"
              size="tiny"
            />
            <div className="manageMyCollection-myCollectionMangaInfoWrapper">
              <h3 className="manageMyCollection-myCollectionTitleManga">Attaque des Titans - <span className="manageMyCollection-myCollectionAuthorManga">Auteur</span></h3>
            </div>
          </div>
          <div className="manageMyCollection-myCollectionThreeButtons">
            <div className="manageMyCollection-myCollectionButtonsSubGroup">
              <Button className="manageMyCollection-myCollectionButtons" fluid>
                Disponibilité
              </Button>
              <div className="manageMyCollection-artificialMargin"></div>
              <Button className="manageMyCollection-myCollectionButtons" fluid>
                Éditer
              </Button>
            </div>
            <Button className="manageMyCollection-myCollectionButtons manageMyCollection-DeleteButton" fluid>
              Supprimer
            </Button>
          </div>
        </div>
        <Divider className="manageMyCollection-divider" />
        <div className="manageMyCollection-myCollectionItems">
          <div className="manageMyCollection-myCollectionItem">

            <div className="manageMyCollection-itemContentWrapper">
              <Image
                className="manageMyCollection-myCollectionTitleMangaImage"
                src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg"
                size="tiny"
              />
              <div className="manageMyCollection-myCollectionMangaInfoWrapper">
                <h3 className="manageMyCollection-myCollectionTitleManga">Attaque des Titans - <span className="manageMyCollection-myCollectionAuthorManga">Auteur</span></h3>
              </div>
            </div>
            <div className="manageMyCollection-myCollectionThreeButtons">
              <div className="manageMyCollection-myCollectionButtonsSubGroup">
                <Button className="manageMyCollection-myCollectionButtons" fluid>
                  Disponibilité
              </Button>
                <div className="manageMyCollection-artificialMargin"></div>
                <Button className="manageMyCollection-myCollectionButtons" fluid>
                  Éditer
              </Button>
              </div>
              <Button className="manageMyCollection-myCollectionButtons manageMyCollection-DeleteButton" fluid>
                Supprimer
            </Button>
            </div>
          </div>
        </div>
      </Card.Content>
    </Card>
  </div>
);

export default ManageMyCollection;
