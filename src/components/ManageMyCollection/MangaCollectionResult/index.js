import React from 'react';
import { Button, Divider, Dropdown, Image } from 'semantic-ui-react';

const MangaCollectionResult = ({ mangaName, mangaPicture, mangaVolumes, addToMyCollection }) => {
  const mangaVolumeOptions = mangaVolumes.map((volume) => ({
    key: volume.number,
    text: volume.number,
    value: volume.number,
    className: `volume${volume.number}`,
  }));

  const [selected, setSelected] = React.useState([]);

  const handleChange = (e, { value }) => {
    if (selected.length > value.length) { // an item has been removed
      const difference = selected.filter(
        (x) => !value.includes(x),
      );
      return false;
    }
    return setSelected(value);
  };
  const mangaTitle = mangaName;
  const volumes = selected.join(', ');

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
          <Dropdown className="manageMyCollection-dropdownSelectAndAdd" placeholder="Tome(s) à ajouter" size="5" fluid multiple selection options={mangaVolumeOptions} onChange={handleChange} />
          <div className="manageMyCollection-addToMyCollection">
            <Button className="manageMyCollection-addToMyCollectionButton" onClick={() => addToMyCollection(mangaTitle, volumes)}>Ajouter à ma collection</Button>
          </div>
        </div>
      </div>

      <Divider className="manageMyCollection-divider-MobileVersion" />
    </>
  )
};

export default MangaCollectionResult;
