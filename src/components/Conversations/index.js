import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Grid, Image, Transition,
} from 'semantic-ui-react';
import convButtonWhite from 'src/assets/images/conversations-button-white.png';
import newMessageWhite from 'src/assets/images/new-message-white.png';
import searchWhite from 'src/assets/images/search-white.png';
import helpWhite from 'src/assets/images/help-white.png';
import './style.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Conversation from './Conversation';

const Conversations = ({ isBoxHidden, handleHiddenBoxDisplay, conversations, loadSingleChat }) => {
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
        {/* <Link to="/conversation/:id" exact={+true}>
          <Conversation />
        </Link> */}
        {console.log(Object.entries(conversations))}
        {console.log(conversations)}
        {
          // This is a way to iterate over an object items as if it were arrays (therefore being able to use the ".map" declarative function)
          Object.entries(conversations).map((conversation) => (
            <Link key={conversation[1].chat.id} onClick={() => {
              console.log(conversation[1].chat.id)
              loadSingleChat(conversation[1].chat.id)
            }} to={`/conversation/${conversation[1].chat.id}`} exact={+true}><Conversation key={conversation[1].chat.id} /></Link>
          ))}
        {/* <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation /> */}
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
