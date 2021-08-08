import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button, Header, Icon, Modal,
} from 'semantic-ui-react';

const NoAccessModal = ({
  trigger,
}) => {
  const [openNotLoggedModal, setOpenNotLoggedModal] = React.useState(false);

  return (
    <Modal
      closeIcon
      basic
      dimmer="blurring"
      onClose={() => setOpenNotLoggedModal(false)}
      onOpen={() => setOpenNotLoggedModal(true)}
      open={openNotLoggedModal}
      size="mini"
      trigger={trigger}
    >
      <Header icon>
        <Icon name="warning circle" />
        Vous n'êtes pas connecté !
      </Header>
      <Modal.Content>
        <p>
          Cette page est reservé aux utilisateurs enregistrés.
          Veuillez vous connecter, ou vous créer un compte afin d'accéder à ce contenu !
        </p>
      </Modal.Content>
      <Modal.Actions>
        <div className="home-buttonWrapper">
          <Button basic inverted as={Link} to="/login">
            <Icon name="sign-in" /> Se connecter
          </Button>
          <div className="home-buttonArtificalMargin" />
          <Button basic inverted as={Link} to="/register">
            <Icon name="signup" />S'inscrire
          </Button>
        </div>
      </Modal.Actions>
    </Modal>
  );
};

NoAccessModal.propTypes = {
  trigger: PropTypes.element.isRequired,
};

export default NoAccessModal;
