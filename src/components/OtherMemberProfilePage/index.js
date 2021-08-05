import React, { useEffect } from 'react';
import {
  Image, Container, Button, Divider, Icon, Header,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.scss';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';

import MediaQuery from 'react-responsive';
import DesktopIdCardOther from './DesktopIdCardOther';
import DesktopOtherMemberCollection from './DesktopOtherMemberCollection';
import ViewOtherProfileCollectionResult from './ViewOtherProfileCollectionResult';

const OtherMemberProfilePage = ({
  pseudo, bio, city, zipcode, picture, holidayMode, otherUserMangas, userId, createNewChat
}) => {
  const availableTomes = [
    { key: 't1', value: 't1', text: 'Tome 1' },
    { key: 't2', value: 't2', text: 'Tome 2' },
    { key: 't3', value: 't3', text: 'Tome 3' },
    { key: 't4', value: 't4', text: 'Tome 4' },
    { key: 't5', value: 't5', text: 'Tome 5' },

  ];

  return (
    <div className="otherMemberProfilePage">
      <Image className="registerForm-banner" src={alternativeBanner} />
      <div className="otherMemberProfilePage-mainWrapper">

        <h1 className="setProfilPage-h1">Profil de {pseudo} </h1>
        <MediaQuery minWidth={1224}>
          <DesktopIdCardOther pseudo={pseudo} bio={bio} city={city} zipcode={zipcode} picture={picture} holidayMode={holidayMode} userId={userId} createNewChat={createNewChat} />
        </MediaQuery>
        <MediaQuery maxWidth={1223}>
          <Image className="otherMemberProfilePage-firstPartImage" src={`https://api.multiavatar.com/${picture}.png`} size="tiny" />
          <div className="otherMemberProfilePage-secondPart">
            <Container textAlign="center">
              <h3 className="otherMemberProfilePage-pseudo">{pseudo}</h3>
            <Button onClick={() => createNewChat(userId)}  className="otherMemberProfilePage-contactOwner">
              Contacter le propriétaire
            </Button>
            </Container>
            <Container textAlign="center">
            <h4 className="otherMemberProfilePage-infoSubtitles">Présentation</h4>
              <p>
                {bio || 'Cet utilisateur n\'a pas de description !'}
              </p>
            </Container>
          </div>

          <div className="otherMemberProfilePage-thirdPart">
            <Container className="otherMemberProfilePage-thirdPartLocation">
            <h4 className="otherMemberProfilePage-infoSubtitles">Localisation</h4>
              
              <p><Icon size="large" name="map marker alternate" /> {city} - {zipcode}</p>
            </Container>
          </div>

          <div className="otherMemberProfilePage-thirdPart">
            <h4 className="otherMemberProfilePage-infoSubtitles">Mode Vacances</h4>
            <Container className="otherMemberProfilePage-thirdPartLocation">
              <Icon size="large" name="globe" />
              <p>{holidayMode ? 'Activé' : 'Désactivé'}</p>
            </Container>
          </div>

          <Divider className="otherMemberProfilePage-divider" />
          <div className="manageMyCollection-myCollection">
            <Header as="h2">
              <Icon className="otherMemberProfilePage-myCollectionIcon" name="settings" />
              <Header.Content className="otherMemberProfilePage-myCollectionHeaderContent">
                Sa collection
              </Header.Content>
            </Header>
          </div>
          <Divider className="otherMemberProfilePage-divider" />
          {otherUserMangas ? (
            <div className="manageMyCollection-itemWrapperDesktopVersion">
              {console.log('other user mangas', Object.values(otherUserMangas))}
              {Object.values(otherUserMangas).map((manga, index) => (
                <ViewOtherProfileCollectionResult
                  key={index}
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
        <DesktopOtherMemberCollection otherUserMangas={otherUserMangas} />
      </MediaQuery>

    </div>
  );
};

export default OtherMemberProfilePage;
