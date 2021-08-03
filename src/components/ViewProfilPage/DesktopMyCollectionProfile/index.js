/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  Button, Card, Divider, Grid, Header, Icon, Image,
} from 'semantic-ui-react';
import ViewProfileCollectionResult from '../ViewProfileCollectionResult';

const DesktopMyCollectionProfile = ({ userMangas }) => (
  <div className="DesktopMyCollectionProfile">
    <Card className="DesktopMyCollectionProfile-mainCard">
      <Card.Header className="DesktopMyCollectionProfile-myCollection">
        <Header className="DesktopMyCollectionProfile-header" as="h2">
          {/* <Icon className="DesktopMyCollectionProfile-myCollectionIcon" name="settings" /> */}
          <Header.Content className="DesktopMyCollectionProfile-myCollectionHeaderContent">
            Ma collection
            {/* <Header.Subheader className="DesktopMyCollectionProfile-myCollectionSubHeaderTwo">
              Gérer la visibilité, l'édition, ou la suppression
            </Header.Subheader> */}
          </Header.Content>
        </Header>
      </Card.Header>
      <Card.Content className="DesktopMyCollectionProfile-myCollectionCardContent">
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

      </Card.Content>
    </Card>
  </div>
);

export default DesktopMyCollectionProfile;
