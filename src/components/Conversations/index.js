/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
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

const Conversations = ({
  isBoxHidden, handleHiddenBoxDisplay, conversations, loadSingleChat, userPseudo,
}) => {
  const handleHiddenBox = () => {
    handleHiddenBoxDisplay();
  };

  const buttonClasses = classNames({
    'conversations-buttons': true,
    'conversations-button--hiddenBox': isBoxHidden,
    'conversations-button--notHiddenBox': !isBoxHidden,
  });

  // useEffect(() => {
  //   console.log('App useEffect Conversations');
  //   handleConversationsLoad();
  // });

  // useBeforeunload((event) => {
  //   console.log('action before unload');
  //   handleConversationsLoad();
  // });
  return (
    <div className="conversations">
      <div className="conversations-notHiddenBox">
        {
          // This is a way to iterate over an object items as if it were arrays
          // (therefore being able to use the ".map" declarative function)
          Object.entries(conversations).map((conversation) => {
            console.log(conversation);
            let pseudoToDisplay;
            let picture;
            if (conversation[1].chat.users[1].pseudo === userPseudo) {
              pseudoToDisplay = conversation[1].chat.users[0].pseudo;
              picture = conversation[1].chat.users[0].picture;
            }
            else {
              pseudoToDisplay = conversation[1].chat.users[1].pseudo;
              picture = conversation[1].chat.users[1].picture;
            }
            let lastMessageVariable;
            if (conversation[1].lastmessage) {
              let messageLength = conversation[1].lastmessage.content.length;

              if (messageLength > 75 ){
                lastMessageVariable = conversation[1].lastmessage.content.slice(0,75);
                lastMessageVariable += "...";
              } else {

                lastMessageVariable = conversation[1].lastmessage.content;
              }
              
            }
            else {
              lastMessageVariable = '';
            }
            return (
              <Link
                key={conversation[1].chat.id}
                onClick={() => {
                  console.log(conversation[1].chat.id);
                  loadSingleChat(conversation[1].chat.id);
                }}
                to={`/conversation/${conversation[1].chat.id}`}
                exact={+true}
              >
                <Conversation
                  key={conversation[1].chat.id}
                  lastMessage={lastMessageVariable}
                  pseudo={pseudoToDisplay}
                  picture={picture}
                />
              </Link>
            );
          })
        }

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
