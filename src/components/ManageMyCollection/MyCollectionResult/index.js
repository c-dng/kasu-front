
import React from 'react';
import {
  Image, Button, Divider, Modal, Header, Checkbox,
} from 'semantic-ui-react';
import MangaAvailability from 'src/containers/MangaAvailability';

const MyCollectionResult = ({ mangaName,
  mangaPicture,
  mangaVolumes,
  mangaAuthor
}) => {
  const [open, setOpen] = React.useState(false);
  const [checkedVolumes, setCheckedVolumes] = React.useState(
    mangaVolumes
    .filter((volume) => volume.status)
    .map((volume) => volume.number)
  );



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
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
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
                  <Button color="black" onClick={() => setOpen(false)}>
                    Annuler
                  </Button>
                  <Button
                    content="Confirmer"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => {
                      console.log("Envoie des données", checkedVolumes.join(', '));
                      setOpen(false)
                    }}
                    positive
                  />
                </Modal.Actions>
              </Modal>
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
}

export default MyCollectionResult;
