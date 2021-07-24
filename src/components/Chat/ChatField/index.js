import React from 'react';
import PropTypes from 'prop-types';

import '../style.scss';

const ChatField = ({ name, type, placeholder, value, manageChatFieldChange }) => (
  <input
    className="chatfield"
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={(event) => manageChatFieldChange(event.target.value)}
  />
);

ChatField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  manageChatFieldChange: PropTypes.func.isRequired,
};

// pour les champs non obligatoires,
// on doit donner une valeur par défaut
ChatField.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default ChatField;
