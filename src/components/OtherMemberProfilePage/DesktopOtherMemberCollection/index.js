import uuid from 'react-uuid';
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Divider, Header, Icon,
} from 'semantic-ui-react';
import ViewOtherProfileCollectionResult from '../ViewOtherProfileCollectionResult';

// Desktop component to display another member manga collection
const DesktopOtherMemberCollection = ({ otherUserMangas }) => (
  <div className="DesktopOtherMemberCollection">
    <Card className="DesktopOtherMemberCollection-mainCard">
      <Card.Header className="DesktopOtherMemberCollection-myCollection">
        <Header className="DesktopOtherMemberCollection-header" as="h2">
          <Icon className="DesktopOtherMemberCollection-myCollectionIcon" name="settings" />
          <Header.Content className="DesktopOtherMemberCollection-myCollectionHeaderContent">
            Sa collection
          </Header.Content>
        </Header>
      </Card.Header>
      <Card.Content className="DesktopOtherMemberCollection-myCollectionCardContent">
        {otherUserMangas ? (
          <div className="manageMyCollection-itemWrapperDesktopVersion">
            {Object.values(otherUserMangas).map((manga) => (
              <ViewOtherProfileCollectionResult
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

DesktopOtherMemberCollection.propTypes = {
  otherUserMangas: PropTypes.object.isRequired,
};

export default DesktopOtherMemberCollection;
