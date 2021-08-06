import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import {
  Card, Divider, Header,
} from 'semantic-ui-react';
import ViewProfileCollectionResult from '../ViewProfileCollectionResult';

const DesktopMyCollectionProfile = ({ userMangas }) => (
  <div className="DesktopMyCollectionProfile">
    <Card className="DesktopMyCollectionProfile-mainCard">
      <Card.Header className="DesktopMyCollectionProfile-myCollection">
        <Header className="DesktopMyCollectionProfile-header" as="h2">
          <Header.Content className="DesktopMyCollectionProfile-myCollectionHeaderContent">
            Ma collection
          </Header.Content>
        </Header>
      </Card.Header>
      <Card.Content className="DesktopMyCollectionProfile-myCollectionCardContent">
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

DesktopMyCollectionProfile.propTypes = {
  userMangas: PropTypes.object.isRequired,
};

export default DesktopMyCollectionProfile;
