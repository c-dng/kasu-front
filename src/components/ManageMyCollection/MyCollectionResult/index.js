
import React from 'react';
import {
  Image, Button, Divider, Modal, Header, Checkbox,
} from 'semantic-ui-react';
import MangaAvailability from 'src/containers/MangaAvailability';

const MyCollectionResult = ({ mangaName,
  mangaPicture,
  mangaVolumes,
  mangaAuthor,
  mangaId,
  modifyVolumeAvailability,
}) => {
  const [openAvailability, setOpenAvailability] = React.useState(false);
  const [checkedVolumes, setCheckedVolumes] = React.useState(
    mangaVolumes
      .filter((volume) => volume.status)
      .map((volume) => volume.number)
  );
  const [openEdit, setOpenEdit] = React.useState(false);



  // { console.log(mangaVolumes) };
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
          <div className="manageMyCollection-myCollectionThreeButtons">
            <div className="manageMyCollection-myCollectionButtonsSubGroup">
              <Modal
                onClose={() => setOpenAvailability(false)}
                onOpen={() => setOpenAvailability(true)}
                open={openAvailability}
                trigger={<Button className="manageMyCollection-myCollectionButtons" fluid>Disponibilité</Button>}
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
                      setOpen(false);
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
                trigger={<Button className="manageMyCollection-myCollectionButtons" fluid>Éditer</Button>}
              >
                <Modal.Header>Ajout/Retrait de tomes</Modal.Header>
                <Modal.Content image>
                  <Image size="medium" src={mangaPicture} wrapped />
                  <Modal.Description>
                    <Header>{mangaName}</Header>
                    <p>
                      Veuillez préciser quels tomes {mangaName} vous possédez.
                    </p>
                    {/* {mangaVolumes.map((volume) => (
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
                    ))} */}
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
                      console.log("Envoie des données", mangaId, checkedVolumes.join(', '));

                      setOpenEdit(false);
                    }}
                    positive
                  />
                </Modal.Actions>
              </Modal>

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
}

export default MyCollectionResult;
