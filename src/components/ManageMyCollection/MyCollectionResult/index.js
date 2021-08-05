
import React from 'react';
import _ from 'lodash';
import {
  Image, Button, Divider, Modal, Header, Dropdown,
} from 'semantic-ui-react';
import MangaAvailability from 'src/containers/MangaAvailability';

const MyCollectionResult = ({ mangaName,
  mangaPicture,
  mangaVolumes,
  mangaAuthor,
  mangaId,
  modifyVolumeAvailability,
  mangaMaxVolumeNumber,
  addOrRemoveVolumes,
  deleteManga
}) => {
  const [openAvailability, setOpenAvailability] = React.useState(false);
  const [checkedVolumes, setCheckedVolumes] = React.useState(
    mangaVolumes
      .filter((volume) => volume.status)
      .map((volume) => volume.number)
  );
  const [openEdit, setOpenEdit] = React.useState(false);
  const [possessedVolumes, setPossessedVolumes] = React.useState(mangaVolumes.map((volume) => volume.number));
  const maxVolumeArray = _.range(1, mangaMaxVolumeNumber + 1);
  const mangaVolumeOptions = maxVolumeArray.map((volume) => ({
    key: volume,
    text: volume,
    value: volume,
    className: `volume${volume}`,
  }));

  const possessedMangaVolumeOptions = mangaVolumes.map((volume, index) => ({
    key: index,
    text: volume.number,
    value: volume.number,
  }));

  const [selected, setSelected] = React.useState(mangaVolumes.map((volume) => volume.number));

  const handleChange = (e, { value }) => {
    console.log('dropdown change value:', value);
    console.log('select value:', value);
    if (selected.length > value.length) { // an item has been removed
      const difference = selected.filter(
        (x) => !value.includes(x),
      );
      const differenceIndex = value.indexOf(difference);
      if (differenceIndex > -1) {
        value.splice(differenceIndex, 1);
      }
      console.log('difference of selected', difference); // this is the item
      return setSelected(value);
    }
    return setSelected(value);
  };

  const [openDelete, setOpenDelete] = React.useState(false);
  return (
    <>
      <div className="manageMyCollection-itemDesktopVersion">
        <h3 className="manageMyCollection-titleNameManga">{mangaName}</h3>
        <div className="manageMyCollection-mangaImageWrapper">
          <Image
            className="manageMyCollection-mangaImage"
            src={mangaPicture}
            size="small"
          />
        </div>
        <div className="manageMyCollection-selectAndAdd">
          <Dropdown className="manageMyCollection-dropdownSelectAndAdd" placeholder="Mes Tomes" size="5" fluid multiple selection options={possessedMangaVolumeOptions} />
        </div>
        <div className="manageMyCollection-myCollectionThreeButtons">
          <div className="manageMyCollection-myCollectionButtonsSubGroup">
            <Modal
              onClose={() => setOpenAvailability(false)}
              onOpen={() => setOpenAvailability(true)}
              open={openAvailability}
              trigger={<Button className="manageMyCollection-myCollectionButtons" fluid size="mini">Disponibilité</Button>}
            >
              <Modal.Header>Disponibilité</Modal.Header>
              <Modal.Content image>
                <Image size="medium" src={mangaPicture} wrapped />
                <Modal.Description>
                  <Header>{mangaName}</Header>
                  <p>
                    Veuillez définir les disponibilités de vos tomes {mangaName}
                  </p>
                  {mangaVolumes.map((volume) => (
                    <MangaAvailability
                      volumeNumber={volume.number}
                      onChangeAvailability={(volumeNumber, checked) => {
                        console.log("Checked Value", checked);
                        if (!checked) {
                          setCheckedVolumes(checkedVolumes.filter((volume) => volume !== volumeNumber));
                        } else {
                          setCheckedVolumes([
                            ...checkedVolumes,
                            volumeNumber,
                          ]);
                        }

                      }}
                      key={volume.number}
                      checked={checkedVolumes.includes(volume.number)}
                    />
                  ))}
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => setOpenAvailability(false)}>
                  Annuler
                </Button>
                <Button
                  content="Confirmer"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => {
                    console.log("Envoie des données", mangaId, checkedVolumes.join(', '));
                    modifyVolumeAvailability(mangaId, checkedVolumes.join(', '));
                    setOpenAvailability(false);
                  }}
                  positive
                />
              </Modal.Actions>
            </Modal>
            <div className="manageMyCollection-artificialMargin"></div>
            <Modal
              onClose={() => setOpenEdit(false)}
              onOpen={() => setOpenEdit(true)}
              open={openEdit}
              trigger={<Button className="manageMyCollection-myCollectionButtons" fluid size="mini">Éditer</Button>}
            >
              <Modal.Header>Ajout/Retrait de tomes</Modal.Header>
              <Modal.Content image>
                <Image size="medium" src={mangaPicture} wrapped />
                <Modal.Description>
                  <Header>{mangaName}</Header>
                  <p>
                    Veuillez préciser quels tomes {mangaName} vous possédez.
                  </p>

                  <Dropdown
                    defaultValue={possessedVolumes}
                    className="manageMyCollection-dropdownSelectAndAdd"
                    placeholder="Tome(s) à ajouter"
                    size="5"
                    fluid
                    multiple
                    selection
                    options={mangaVolumeOptions}
                    onChange={handleChange}
                  />
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => setOpenEdit(false)}>
                  Annuler
                </Button>
                <Button
                  content="Confirmer"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => {
                    console.log("Envoie des données selected", mangaId, selected.join(', '));
                    addOrRemoveVolumes(mangaId, selected.join(', '));
                    setOpenEdit(false);
                  }}
                  positive
                />
              </Modal.Actions>
            </Modal>

          </div>
          <Modal
            onClose={() => setOpenDelete(false)}
            onOpen={() => setOpenDelete(true)}
            open={openDelete}
            trigger={<Button className="manageMyCollection-myCollectionButtons manageMyCollection-DeleteButton" fluid size="mini">Supprimer</Button>}
          >
            <Modal.Header>Supprimer un manga de ma collection</Modal.Header>
            <Modal.Content image>
              <Image size="medium" src={mangaPicture} wrapped />
              <Modal.Description>
                <Header>{mangaName}</Header>
                <p>
                  Souhaitez-vous vraiment supprimer le manga {mangaName} de votre collection ?
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color="black" onClick={() => setOpenDelete(false)}>
                Annuler
              </Button>
              <Button
                content="Supprimer"
                labelPosition="right"
                icon="cancel"
                onClick={() => {
                  deleteManga(mangaId);
                  setOpenDelete(false);
                }}
                negative
              />
            </Modal.Actions>
          </Modal>
        </div>
      </div>
      <Divider className="manageMyCollection-divider-MobileVersion" />
    </>
  );
}

export default MyCollectionResult;