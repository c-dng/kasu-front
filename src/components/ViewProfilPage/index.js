import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import {
  Image, Container, Button, Divider, Icon, Header,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.scss';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';
import MediaQuery from 'react-responsive';
import DesktopIdCard from './DesktopIdCard';
import DesktopMyCollectionProfile from './DesktopMyCollectionProfile';
import ViewProfileCollectionResult from './ViewProfileCollectionResult';

const ViewProfilPage = ({
  pseudo, bio, city, zipcode, picture, holidayMode, userMangas,
}) => (
  <div className="viewProfilPage">
    <Image className="registerForm-banner" src={alternativeBanner} />
    <div className="viewProfilPage-mainWrapper">

      <h1 className="setProfilPage-h1">Mon profil</h1>
      <MediaQuery minWidth={1224}>
        <DesktopIdCard
          pseudo={pseudo}
          bio={bio}
          city={city}
          zipcode={zipcode}
          picture={picture}
          holidayMode={holidayMode}
        />
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
          <Container textAlign="center">
            <h4 className="viewProfilPage-infoSubtitles">Présentation</h4>
            <p>
              {bio || 'Vous n\'avez pas encore écrit de présentation, rendez-vous dans "Gérer mon profil" !'}
            </p>
          </Container>
        </div>
        <div className="viewProfilPage-thirdPart">
          <Container textAlign="center" className="viewProfilPage-thirdPartLocation">
            <h4 className="viewProfilPage-infoSubtitles">Localisation</h4>

            <p><Icon size="large" name="map marker alternate" /> {city} - {zipcode}</p>
          </Container>
        </div>
        <div className="viewProfilPage-thirdPart">
          <Container textAlign="center" className="viewProfilPage-thirdPartLocation">
            <h4 className="viewProfilPage-infoSubtitles">Mode Vacances</h4>

            <p><Icon size="large" name="globe" /> {holidayMode ? 'Activé' : 'Désactivé'}</p>
          </Container>
        </div>
        <Divider className="viewProfilPage-divider" />
        <div className="manageMyCollection-myCollection">
          <Header as="h2">
            <Icon className="viewProfilPage-myCollectionIcon" name="settings" />
            <Header.Content className="viewProfilPage-myCollectionHeaderContent">
              Ma collection
            </Header.Content>
          </Header>
        </div>
        <Divider className="viewProfilPage-divider" />
        {userMangas ? (
          <div className="manageMyCollection-itemWrapperDesktopVersion">
            {Object.values(userMangas).map((manga) => (
              <ViewProfileCollectionResult
                key={uuid()}
                mangaName={manga.info.title}
                mangaPicture={manga.info.picture}
                mangaVolumes={manga.volumes}
                mangaAuthor={manga.info.author}
                mangaId={manga.info.id}
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

ViewProfilPage.propTypes = {
  pseudo: PropTypes.string.isRequired,
  bio: PropTypes.string,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  picture: PropTypes.string.isRequired,
  holidayMode: PropTypes.bool,
  userMangas: PropTypes.object.isRequired,
};

ViewProfilPage.defaultProps = {
  holidayMode: false,
  bio: '',
  zipcode: '',
};

export default ViewProfilPage;
