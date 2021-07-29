import React from 'react';
import {
  Image, Container, Button, Divider, Icon, Header,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.scss';
import alternativeBanner from 'src/assets/images/alternativeBanner.png';

import MediaQuery from 'react-responsive';
import DesktopIdCard from './DesktopIdCard';
import DesktopMyCollectionProfile from './DesktopMyCollectionProfile';

const ViewProfilPage = () => {
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
          <DesktopIdCard />
        </MediaQuery>
        <MediaQuery maxWidth={1223}>
          <Image className="viewProfilPage-firstPartImage" size="tiny" />
          <div className="viewProfilPage-secondPart">
            <Container textAlign="center">
              <h3 className="viewProfilPage-pseudo">Pseudo</h3>
            </Container>
            <div className="viewProfilPage-secondPartChangeButtons">
              <Link to="/profil/id" exact={+true}>
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor.
              </p>
            </Container>
          </div>

          <div className="viewProfilPage-thirdPart">
            <h4 className="viewProfilPage-infoSubtitles">Localisation</h4>
            <Container className="viewProfilPage-thirdPartLocation">
              <Icon size="large" name="map marker alternate" />
              <p>Paris - 75000</p>
            </Container>
          </div>

          <div className="viewProfilPage-thirdPart">
            <h4 className="viewProfilPage-infoSubtitles">Mode Vacances</h4>
            <Container className="viewProfilPage-thirdPartLocation">
              <Icon size="large" name="globe" />
              <p>Désactivé</p>
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
          <div className="viewProfilPage-myCollectionItem">
            <div className="viewProfilPage-itemContentWrapper">
              <Image
                className="viewProfilPage-myCollectionTitleMangaImage"
                src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg"
                size="tiny"
              />
              <div className="viewProfilPage-myCollectionMangaInfoWrapper">
                <h3 className="viewProfilPage-myCollectionTitleManga">Attaque des Titans - <span className="viewProfilPage-myCollectionAuthorManga">Auteur</span></h3>
              </div>
            </div>
            <div className="viewProfilPage-myCollectionThreeButtons">
              <div className="viewProfilPage-myCollectionButtonsSubGroup">
                <Button className="viewProfilPage-myCollectionButtons" fluid>
                  Disponibilité
                </Button>
                <div className="viewProfilPage-artificialMargin" />
                <Button className="viewProfilPage-myCollectionButtons" fluid>
                  Éditer
                </Button>
              </div>
              <Button className="viewProfilPage-myCollectionButtons viewProfilPage-DeleteButton" fluid>
                Supprimer
              </Button>
            </div>
          </div>
          <Divider className="viewProfilPage-divider" />
          <div className="viewProfilPage-myCollectionItem">
            <div className="viewProfilPage-itemContentWrapper">
              <Image
                className="viewProfilPage-myCollectionTitleMangaImage"
                src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/313968/313968._SX1280_QL80_TTD_.jpg"
                size="tiny"
              />
              <div className="viewProfilPage-myCollectionMangaInfoWrapper">
                <h3 className="viewProfilPage-myCollectionTitleManga">Attaque des Titans - <span className="viewProfilPage-myCollectionAuthorManga">Auteur</span></h3>
              </div>
            </div>
            <div className="viewProfilPage-myCollectionThreeButtons">
              <div className="viewProfilPage-myCollectionButtonsSubGroup">
                <Button className="viewProfilPage-myCollectionButtons" fluid>
                  Disponibilité
                </Button>
                <div className="viewProfilPage-artificialMargin" />
                <Button className="viewProfilPage-myCollectionButtons" fluid>
                  Éditer
                </Button>
              </div>
              <Button className="viewProfilPage-myCollectionButtons viewProfilPage-DeleteButton" fluid>
                Supprimer
              </Button>
            </div>
          </div>
          <Divider className="viewProfilPage-divider" />

          <div className="viewProfilPage-sixthPart">
            <Button className="viewProfilPage-sixthPartDeleteAccountButton" size="mini">Voir plus</Button>
          </div>
        </MediaQuery>
      </div>

      <MediaQuery minWidth={1224}>
        <DesktopMyCollectionProfile />
      </MediaQuery>

    </div>
  );
};

export default ViewProfilPage;
