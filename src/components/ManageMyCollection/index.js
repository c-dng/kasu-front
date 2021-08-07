import React from 'react';
import uuid from 'react-uuid';
import {
  Header, Divider, Icon, Image, Button,
} from 'semantic-ui-react';
import './style.scss';
import PropTypes from 'prop-types';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';
import { Link } from 'react-router-dom';
import AddMangaSearchBar from './AddMangaSearchBar';
import MangaCollectionResult from './MangaCollectionResult';
import MyCollectionResult from './MyCollectionResult';

const ManageMyCollection = ({
  setMangaSearch,
  manageSubmit,
  loading,
  mangaSearch,
  mangaFilteredDatabase,
  addToMyCollection,
  userMangas,
  modifyVolumeAvailability,
  addOrRemoveVolumes,
  deleteManga,
}) => (
  <div className="manageMyCollection">
    <Image className="manageMyCollection-banner" src={alternativeBanner} />
    <div className="manageMyCollection-mainCard">
      <div className="manageMyCollection-mainCardContent">
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

          {userMangas ? (
            <div className="manageMyCollection-itemWrapperDesktopVersion">
              {Object.values(userMangas).map((manga) => (
                <MyCollectionResult
                  key={uuid()}
                  mangaName={manga.info.title}
                  mangaPicture={manga.info.picture}
                  mangaVolumes={manga.volumes}
                  mangaAuthor={manga.info.author}
                  mangaId={manga.info.id}
                  modifyVolumeAvailability={modifyVolumeAvailability}
                  addOrRemoveVolumes={addOrRemoveVolumes}
                  deleteManga={deleteManga}
                  mangaMaxVolumeNumber={manga.info.volume_number}
                />
              ))}

            </div>
          ) : (
            <div>
              <Divider className="manageMyCollection-divider" />
              <h4 className="manageMyCollection-subtitle">Vous n'avez pas de mangas dans votre collection</h4>
              <Divider className="manageMyCollection-divider" />
            </div>
          )}

        </div>
        <div className="manageMyCollection-firstBlocDesktopVersion">
          <h3 className="manageMyCollection-subHeader">Cherche un manga à ajouter à ta collection dans notre base de données !</h3>
          <div className="manageMyCollection-searchBarWrapper">
            <AddMangaSearchBar setMangaSearch={setMangaSearch} manageSubmit={manageSubmit} loading={loading} mangaSearch={mangaSearch} className="manageMyCollection-searchBar" />
          </div>
          <Divider className="manageMyCollection-divider" />
          {mangaFilteredDatabase.length ? <h4 className="manageMyCollection-subtitle">Résultat(s) trouvé(s) : {mangaFilteredDatabase.length}</h4>
            : (
              <>
                <h4 className="manageMyCollection-subtitle">Pas de résultats</h4>
                <div className="manageMyCollection-addMangaLinkWrapper">
                  <Link className="manageMyCollection-addMangaLink" to="/contact" exact={+true}>
                    <Button className="manageMyCollection-addMangaButton">Demander l'ajout d'un manga</Button>
                  </Link>
                </div>
              </>
            )}
          <Divider className="manageMyCollection-divider" />
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

      </div>
    </div>
  </div>
);

ManageMyCollection.propTypes = {
  setMangaSearch: PropTypes.func.isRequired,
  manageSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  mangaSearch: PropTypes.string.isRequired,
  mangaFilteredDatabase: PropTypes.array.isRequired,
  addToMyCollection: PropTypes.func.isRequired,
  userMangas: PropTypes.object.isRequired,
  modifyVolumeAvailability: PropTypes.func.isRequired,
  addOrRemoveVolumes: PropTypes.func.isRequired,
  deleteManga: PropTypes.func.isRequired,
};

export default ManageMyCollection;
