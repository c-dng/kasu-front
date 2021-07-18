import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Image, Transition } from 'semantic-ui-react';
import Conversation from './Conversation';
import convButton from './conversations-button.png';
import newMessage from './new-message.png';
import search from './search.png';
import help from './help.png';
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
      </div>
      <Button className={buttonClasses} onClick={handleHiddenBox}>
        <Image size="tiny" circular src={convButton} className="conversations-buttonImages conversations-buttonImage" />
      </Button>


      <Transition visible={!isBoxHidden} animation="slide up" duration={500}>

        <Grid centered columns={3} className="conversations-hiddenBox">
          <Grid.Column textAlign="center">
            <Button className="conversations-newMessage conversations-buttons">
              <Image size="tiny" circular src={newMessage} className="conversations-newMessageImage conversations-buttonImages" />
            </Button>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Button className="conversations-search conversations-buttons">
              <Image size="tiny" circular src={search} className="conversations-searchImage conversations-buttonImages" />
            </Button>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Button className="conversations-help conversations-buttons">
              <Image size="tiny" circular src={help} className="conversations-helpImage conversations-buttonImages" />
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
