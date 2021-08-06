import React from 'react';
import {
  Image, Divider, Dropdown,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ViewOtherProfileCollectionResult = ({
  mangaName,
  mangaPicture,
  mangaVolumes,
}) => {
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
};

ViewOtherProfileCollectionResult.propTypes = {
  mangaName: PropTypes.string.isRequired,
  mangaPicture: PropTypes.string.isRequired,
  mangaVolumes: PropTypes.array.isRequired,
};

export default ViewOtherProfileCollectionResult;
