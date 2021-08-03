
import React from 'react';
import _ from 'lodash';
import {
  Image, Button, Divider, Modal, Header, Dropdown,
} from 'semantic-ui-react';

const ViewProfileCollectionResult = ({ mangaName,
  mangaPicture,
  mangaVolumes,
  mangaAuthor,
  mangaId,
  modifyVolumeAvailability,
  mangaMaxVolumeNumber,
  addOrRemoveVolumes,
  deleteManga
}) => {

  const maxVolumeArray = _.range(1, mangaMaxVolumeNumber + 1);
  const mangaVolumeOptions = maxVolumeArray.map((volume) => ({
    key: volume,
    text: volume,
    value: volume,
    className: `volume${volume}`,
  }));

  return (
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
        </div>
      </div>
      <Divider className="manageMyCollection-divider-MobileVersion" />
    </div>
  );
}

export default ViewProfileCollectionResult;
