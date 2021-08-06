import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const MangaAvailability = ({ volumeNumber, checked, onChangeAvailability }) => (
  <div>
    <Checkbox
      label={`Volume ${volumeNumber}`}
      value={volumeNumber}
      checked={checked}
      onChange={() => {
        onChangeAvailability(volumeNumber, !checked);
      }}
    />
  </div>
);

MangaAvailability.propTypes = {
  volumeNumber: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onChangeAvailability: PropTypes.func.isRequired,
};

export default MangaAvailability;
