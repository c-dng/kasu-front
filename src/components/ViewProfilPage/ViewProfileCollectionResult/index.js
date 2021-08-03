
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
  <>
    <div className="manageMyCollection-cardDesktopVersion">
        <h3 className="manageMyCollection-titleNameManga">{mangaName}</h3>
        <div className="manageMyCollection-mangaImageWrapper">
          <Image
            className="manageMyCollection-mangaImage"
            src={mangaPicture}
            size="small"
          />
        </div>
        <div className="manageMyCollection-selectAndAdd">
          <Dropdown className="manageMyCollection-dropdownSelectAndAdd" placeholder="Mes Tomes" size="5" fluid multiple selection options={mangaVolumeOptions}/>
        </div>
      </div>

      <Divider className="manageMyCollection-divider-MobileVersion" />
  </>
  );
}

export default ViewProfileCollectionResult;
