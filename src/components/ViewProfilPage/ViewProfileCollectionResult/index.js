
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
  mangaMaxVolumeNumber,
}) => {
  console.log('manga volumes', mangaVolumes);
  const mangaVolumeOptions = mangaVolumes.map((volume, index) => ({
    key: index,
    text: volume.number,
    value: volume.number,
    className: `volume${volume.status}`,
    disabled: true,
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
          <Dropdown className="manageMyCollection-dropdownSelectAndAdd" placeholder="Mes Tomes" size="5" fluid multiple selection options={mangaVolumeOptions} />
        </div>
      </div>

      <Divider className="manageMyCollection-divider-MobileVersion" />
    </>
  );
}

export default ViewProfileCollectionResult;
