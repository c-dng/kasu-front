import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Grid, Image, Transition,
} from 'semantic-ui-react';
import Conversation from './Conversation';
import convButtonWhite from 'src/assets/images/conversations-button-white.png';
import newMessageWhite from 'src/assets/images/new-message-white.png';
import searchWhite from 'src/assets/images/search-white.png';
import helpWhite from 'src/assets/images/help-white.png';
import './style.scss';
import classNames from 'classnames';

const Conversations = ({ isBoxHidden, handleHiddenBoxDisplay }) => {
  const handleHiddenBox = (evt) => {
    handleHiddenBoxDisplay();
  };

  const buttonClasses = classNames({
    'conversations-buttons': true,
    'conversations-button--hiddenBox': isBoxHidden,
    'conversations-button--notHiddenBox': !isBoxHidden,
  });

  return (
    <div className="conversations">
      <div className="conversations-notHiddenBox">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
      <Button className={buttonClasses} onClick={handleHiddenBox}>
        <Image size="tiny" circular src={convButtonWhite} className="conversations-buttonImages conversations-buttonImage" />
      </Button>

      <Transition visible={!isBoxHidden} animation="slide up" duration={500}>

        <Grid centered columns={3} className="conversations-hiddenBox">
          <Grid.Column textAlign="center">
            <Button className="conversations-newMessage conversations-buttons">
              <Image size="tiny" circular src={newMessageWhite} className="conversations-newMessageImage conversations-buttonImages" />
            </Button>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Button className="conversations-search conversations-buttons">
              <Image size="tiny" circular src={searchWhite} className="conversations-searchImage conversations-buttonImages" />
            </Button>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Button className="conversations-help conversations-buttons">
              <Image size="tiny" circular src={helpWhite} className="conversations-helpImage conversations-buttonImages" />
            </Button>
          </Grid.Column>
        </Grid>

      </Transition>
    </div>
  );
};

Conversations.propTypes = {

  handleHiddenBoxDisplay: PropTypes.func.isRequired,
  isBoxHidden: PropTypes.bool.isRequired,
};

export default Conversations;
