import React, { useEffect } from 'react';
import { Checkbox } from 'semantic-ui-react';

const MangaAvailability = ({ volumeNumber, checked, onChangeAvailability }) => (
  <div>
    <Checkbox
      label={`Volume ${volumeNumber}`}
      value={volumeNumber}
      checked={checked}
      onChange={(evt) => {
        onChangeAvailability(volumeNumber, !checked);
      }}
    />
  </div>
);

export default MangaAvailability;
