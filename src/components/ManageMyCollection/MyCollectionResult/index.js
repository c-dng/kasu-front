
import React from 'react';
import {
  Image, Button, Divider,
} from 'semantic-ui-react';

const MyCollectionResult = ({ mangaName,
  mangaPicture,
  mangaVolumes,
  mangaAuthor, }) => (
  <div>
    <div className="manageMyCollection-itemDesktopVersion">
      <div className="manageMyCollection-myCollectionItem">
        <div className="manageMyCollection-itemContentWrapper">
          <Image
            className="manageMyCollection-myCollectionTitleMangaImage"
            src={mangaPicture}
            size="tiny"
          />
          <div className="manageMyCollection-myCollectionMangaInfoWrapper">
            <h3 className="manageMyCollection-myCollectionTitleManga">{mangaName} - <span className="manageMyCollection-myCollectionAuthorManga">{mangaAuthor}</span></h3>
          </div>
        </div>
        <div className="manageMyCollection-myCollectionThreeButtons">
          <div className="manageMyCollection-myCollectionButtonsSubGroup">
            <Button className="manageMyCollection-myCollectionButtons" fluid>
              Disponibilité
            </Button>
            <div className="manageMyCollection-artificialMargin"></div>
            <Button className="manageMyCollection-myCollectionButtons" fluid>
              Éditer
            </Button>
          </div>
          <Button className="manageMyCollection-myCollectionButtons manageMyCollection-DeleteButton" fluid>
            Supprimer
          </Button>
        </div>
      </div>
    </div>
    <Divider className="manageMyCollection-divider-MobileVersion" />
  </div>
);

export default MyCollectionResult;
