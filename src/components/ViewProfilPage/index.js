import React, { useEffect } from 'react';
import {
  Image, Container, Button, Divider, Icon, Header,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.scss';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';

import MediaQuery from 'react-responsive';
import DesktopIdCard from './DesktopIdCard';
import DesktopMyCollectionProfile from './DesktopMyCollectionProfile';
import MyCollectionResult from '../ManageMyCollection/MyCollectionResult';
import ViewProfileCollectionResult from './ViewProfileCollectionResult';

const ViewProfilPage = ({
  pseudo, bio, city, zipcode, picture, holidayMode, userMangas
}) => {
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

        <h1 className="setProfilPage-h1">Mon profil</h1>
        <MediaQuery minWidth={1224}>
          <DesktopIdCard pseudo={pseudo} bio={bio} city={city} zipcode={zipcode} picture={picture} holidayMode={holidayMode} />
        </MediaQuery>
        <MediaQuery maxWidth={1223}>
          <Image className="viewProfilPage-firstPartImage" src={`https://api.multiavatar.com/${picture}.png`} size="tiny" />
          <div className="viewProfilPage-secondPart">
            <Container textAlign="center">
              <h3 className="viewProfilPage-pseudo">{pseudo}</h3>
            </Container>
            <div className="viewProfilPage-secondPartChangeButtons">
              <Link to="/profil/mes-infos" exact={+true}>
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
            <h4 className="viewProfilPage-infoSubtitles">Présentation</h4>
            <Container textAlign="justified">
              <p>
                {bio || 'Vous n\'avez pas encore écrit de présentation, rendez-vous dans "Gérer mon profil" !'}
              </p>
            </Container>
          </div>

          <div className="viewProfilPage-thirdPart">
            <h4 className="viewProfilPage-infoSubtitles">Localisation</h4>
            <Container className="viewProfilPage-thirdPartLocation">
              <Icon size="large" name="map marker alternate" />
              <p>{city} - {zipcode}</p>
            </Container>
          </div>

          <div className="viewProfilPage-thirdPart">
            <h4 className="viewProfilPage-infoSubtitles">Mode Vacances</h4>
            <Container className="viewProfilPage-thirdPartLocation">
              <Icon size="large" name="globe" />
              <p>{holidayMode ? 'Activé' : 'Désactivé'}</p>
            </Container>
          </div>

          <Divider className="viewProfilPage-divider" />
          <div className="manageMyCollection-myCollection">
            <Header as="h2">
              <Icon className="viewProfilPage-myCollectionIcon" name="settings" />
              <Header.Content className="viewProfilPage-myCollectionHeaderContent">
                Ma collection
                <Header.Subheader className="viewProfilPage-myCollectionSubHeaderTwo">
                  Gérer la visibilité, l'édition, ou la suppression
                </Header.Subheader>
              </Header.Content>
            </Header>
          </div>
          <Divider className="viewProfilPage-divider" />
          {userMangas ? (
            <div className="manageMyCollection-itemWrapperDesktopVersion">
              {console.log('user mangas', Object.values(userMangas))}
              {Object.values(userMangas).map((manga, index) => (
                <ViewProfileCollectionResult
                  key={index}
                  mangaName={manga.info.title}
                  mangaPicture={manga.info.picture}
                  mangaVolumes={manga.volumes}
                  mangaAuthor={manga.info.author}
                  mangaId={manga.info.id}
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
        </MediaQuery>
      </div>

      <MediaQuery minWidth={1224}>
        <DesktopMyCollectionProfile userMangas={userMangas} />
      </MediaQuery>

    </div>
  );
};

export default ViewProfilPage;
