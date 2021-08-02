import React, { useEffect } from 'react';
import { Checkbox } from 'semantic-ui-react';

const MangaAvailability = ({ volumeNumber, volumeStatus, initialStatus, availableVolumes, setAvailableVolumes, setAvailableVolumesToZero }) => {
  useEffect(() => {
    console.log('availableVolumes before ToZero', availableVolumes);
    setAvailableVolumesToZero();
    console.log('availableVolumes after ToZero and before initial setting', availableVolumes);
    setAvailableVolumes(initialStatus);
    console.log('availableVolumes after initial setting', availableVolumes);
  }, []);
  return (

    <div>
      <Checkbox
        label={volumeNumber}
        value={volumeNumber}
        defaultChecked={volumeStatus ? true : false}
        onChange={(evt, data) => {
          console.log('availableVolumes before change', data, availableVolumes);
          if (data.checked) {
            setAvailableVolumes(data.value);
            console.log('availableVolumes after change if data.checked===true', availableVolumes);
          }
          else {
            const array = availableVolumes;
            const index = array.indexOf(data.value);
            if (index !== -1) {
              array.splice(index, 1);
              setAvailableVolumesToZero();
              setAvailableVolumes(array);
            }
            console.log('availableVolumes after change if data.checked!==true', availableVolumes);
          }
        }}
      />
    </div>
  );
};

export default MangaAvailability;
