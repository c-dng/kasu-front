/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  Header, Divider, Icon, Image, Dropdown, Button, Card,
} from 'semantic-ui-react';
import './style.scss';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';
import AddMangaSearchBar from './AddMangaSearchBar';
import MangaCollectionResult from './MangaCollectionResult';

const ManageMyCollection = ({
  setMangaSearch,
  manageSubmit,
  loading,
  mangaSearch,
  mangaSearchData,
  mangaFilteredDatabase,
  addToMyCollection,
}) => (
  <div className="manageMyCollection">
    <Image className="manageMyCollection-banner" src={alternativeBanner} />
    <div className="manageMyCollection-mainCard">
      <div className="manageMyCollection-mainCardContent">

        <div className="manageMyCollection-firstBlocDesktopVersion">
          <Card.Header className="manageMyCollection-mainCardHeader">Gestion des collections</Card.Header>
          <h3 className="manageMyCollection-subHeader">Cherche un manga à ajouter à ta collection dans notre base de donnée !</h3>
          <div className="manageMyCollection-searchBarWrapper">
            <AddMangaSearchBar setMangaSearch={setMangaSearch} manageSubmit={manageSubmit} loading={loading} mangaSearch={mangaSearch} className="manageMyCollection-searchBar" />
          </div>

          <Divider className="manageMyCollection-divider" />
          <h4 className="manageMyCollection-subtitle">Résultat(s) trouvé(s) :</h4>
          <Divider className="manageMyCollection-divider" />
          {console.log('checking manga filtered', mangaFilteredDatabase)}
          <div className="manageMyCollection-wrapperDesktopVersion">
            {mangaFilteredDatabase.map((result) => (
              <MangaCollectionResult
                key={result.id}
                mangaName={result.title}
                mangaPicture={result.picture}
                mangaVolumes={result.volumes}
                addToMyCollection={addToMyCollection}
              />
            ))}
          </div>


        </div>
        <div className="manageMyCollection-secondBlocDesktopVersion">
          <div className="manageMyCollection-myCollection">
            <Header as="h2">
              <Icon className="manageMyCollection-myCollectionIcon" name="settings" />
              <Header.Content className="manageMyCollection-myCollectionHeaderContent">
                Ma collection
                <Header.Subheader className="manageMyCollection-myCollectionSubHeaderTwo">
                  Gérer la visibilité, l'édition, ou la suppression
                </Header.Subheader>
              </Header.Content>
            </Header>
          </div>

          <Divider className="manageMyCollection-divider-MobileVersion" />

          <div className="manageMyCollection-itemWrapperDesktopVersion">
            <div className="manageMyCollection-itemDesktopVersion">
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

            <Divider className="manageMyCollection-divider-MobileVersion" />

            <div className="manageMyCollection-itemDesktopVersion">
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
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ManageMyCollection;
