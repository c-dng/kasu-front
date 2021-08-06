
import React from 'react';
import {
  Card, Divider, Header, Icon,
} from 'semantic-ui-react';
import ViewOtherProfileCollectionResult from '../ViewOtherProfileCollectionResult';

const DesktopOtherMemberCollection = ({otherUserMangas}) => (
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
            {Object.values(otherUserMangas).map((manga, index) => (
              <ViewOtherProfileCollectionResult
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

export default DesktopOtherMemberCollection;
