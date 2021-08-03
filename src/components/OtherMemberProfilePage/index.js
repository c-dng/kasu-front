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

const OtherMemberProfilePage = ({
  pseudo, bio, city, zipcode, picture, holidayMode,
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
          <DesktopIdCardOther pseudo={pseudo} bio={bio} city={city} zipcode={zipcode} picture={picture} holidayMode={holidayMode} />
        </MediaQuery>
        <MediaQuery maxWidth={1223}>
          <Image className="otherMemberProfilePage-firstPartImage" src={`https://api.multiavatar.com/${picture}.png`} size="tiny" />
          <div className="otherMemberProfilePage-secondPart">
            <Container textAlign="center">
              <h3 className="otherMemberProfilePage-pseudo">{pseudo}</h3>
            </Container>
            <h4 className="otherMemberProfilePage-infoSubtitles">Présentation</h4>
            <Container textAlign="justified">
              <p>
                {bio || 'Cet utilisateur n\'a pas de description !'}
              </p>
            </Container>
          </div>

          <div className="otherMemberProfilePage-thirdPart">
            <h4 className="otherMemberProfilePage-infoSubtitles">Localisation</h4>
            <Container className="otherMemberProfilePage-thirdPartLocation">
              <Icon size="large" name="map marker alternate" />
              <p>{city} - {zipcode}</p>
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
          <div className="otherMemberProfilePage-myCollectionItem">
            <div className="otherMemberProfilePage-itemContentWrapper">
              <Image
                className="otherMemberProfilePage-myCollectionTitleMangaImage"
                src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg"
                size="tiny"
              />
              <div className="otherMemberProfilePage-myCollectionMangaInfoWrapper">
                <h3 className="otherMemberProfilePage-myCollectionTitleManga">Attaque des Titans - <span className="otherMemberProfilePage-myCollectionAuthorManga">Auteur</span></h3>
              </div>
            </div>
            <div className="otherMemberProfilePage-myCollectionThreeButtons">
              <div className="otherMemberProfilePage-myCollectionButtonsSubGroup">
                <Button className="otherMemberProfilePage-myCollectionButtons" fluid>
                  Disponibilité
                </Button>
                <div className="otherMemberProfilePage-artificialMargin" />
                <Button className="otherMemberProfilePage-myCollectionButtons" fluid>
                  Éditer
                </Button>
              </div>
              <Button className="otherMemberProfilePage-myCollectionButtons otherMemberProfilePage-DeleteButton" fluid>
                Supprimer
              </Button>
            </div>
          </div>
          <Divider className="otherMemberProfilePage-divider" />
          <div className="otherMemberProfilePage-myCollectionItem">
            <div className="otherMemberProfilePage-itemContentWrapper">
              <Image
                className="otherMemberProfilePage-myCollectionTitleMangaImage"
                src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg"
                size="tiny"
              />
              <div className="otherMemberProfilePage-myCollectionMangaInfoWrapper">
                <h3 className="otherMemberProfilePage-myCollectionTitleManga">Attaque des Titans - <span className="otherMemberProfilePage-myCollectionAuthorManga">Auteur</span></h3>
              </div>
            </div>
            <div className="otherMemberProfilePage-myCollectionThreeButtons">
              <div className="otherMemberProfilePage-myCollectionButtonsSubGroup">
                <Button className="otherMemberProfilePage-myCollectionButtons" fluid>
                  Disponibilité
                </Button>
                <div className="otherMemberProfilePage-artificialMargin" />
                <Button className="otherMemberProfilePage-myCollectionButtons" fluid>
                  Éditer
                </Button>
              </div>
              <Button className="otherMemberProfilePage-myCollectionButtons otherMemberProfilePage-DeleteButton" fluid>
                Supprimer
              </Button>
            </div>
          </div>
          <Divider className="otherMemberProfilePage-divider" />

          <div className="otherMemberProfilePage-sixthPart">
            <Button className="otherMemberProfilePage-sixthPartDeleteAccountButton" size="mini">Voir plus</Button>
          </div>
        </MediaQuery>
      </div>

      <MediaQuery minWidth={1224}>
        <DesktopOtherMemberCollection />
      </MediaQuery>

    </div>
  );
};

export default OtherMemberProfilePage;
