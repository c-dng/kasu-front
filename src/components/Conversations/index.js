import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Dropdown, Grid, Header, Icon, Image, Modal, Transition,
} from 'semantic-ui-react';
import convButtonWhite from 'src/assets/images/conversations-button-white.png';
import searchWhite from 'src/assets/images/search-white.png';
import paletteWhite from 'src/assets/images/palette-white.png';
import detectiveConan from 'src/assets/images/detective-conan.jpg';
import helpWhite from 'src/assets/images/help-white.png';
import './style.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Conversation from './Conversation';

const Conversations = ({
  isBoxHidden,
  handleHiddenBoxDisplay,
  conversations,
  loadSingleChat,
  userPseudo,
  userId,
  redirectTo,
  changeWebsiteTheme,
  loadOtherUserFullData,
}) => {
  // Toggler to display or not the additional chat bar
  const handleHiddenBox = () => {
    handleHiddenBoxDisplay();
  };

  // using classnames library to manage classes instead of a complicated ternary operator.
  const buttonClasses = classNames({
    'conversations-buttons': true,
    'conversations-button--hiddenBox': isBoxHidden,
    'conversations-button--notHiddenBox': !isBoxHidden,
  });

  const userOptions = [];
  if (conversations) {
    // iterating through an object in a declarative manner
    Object.values(conversations).map((conversation) => {
      const conversationUsers = conversation.chat.users;
      conversationUsers.map((user) => {
        let otherUserPseudo;
        let otherUserPicture;
        let otherUserId;
        if (user.pseudo !== userPseudo) {
          otherUserPseudo = user.pseudo;
          otherUserPicture = user.picture;
          otherUserId = user.id;
          userOptions.push({
            key: user.id, value: otherUserId, image: `https://api.multiavatar.com/${otherUserPicture}.png`, text: otherUserPseudo,
          });
        }
        return null;
      });
      return null;
    });
  }

  const [open, setOpen] = React.useState(false);
  const [userValue, setUserValue] = React.useState(0);
  const [theme, setTheme] = React.useState(false);

  const handleTheme1 = () => {
    changeWebsiteTheme('theme1', 'black');
  };

  const handleTheme2 = () => {
    changeWebsiteTheme('theme2', 'white');
  };

  // allows to change theme in a toggling manner
  const changeTheming = () => {
    setTheme(!theme);
    if (theme === true) {
      handleTheme1();
    }
    else {
      handleTheme2();
    }
  };

  const getUserValue = (event, { value }) => {
    setUserValue(value);
  };

  // loads the necessary other user infos in state for display, then redirects to its profile page.
  const handleConfirmClick = () => {
    setOpen(false);
    loadOtherUserFullData(userValue);
  };

  return (
    <div className="conversations">
      <div className="conversations-notHiddenBox">
        {
          // This is a way to iterate over an object items as if it were arrays
          // (therefore being able to use the ".map" declarative function)
          Object.entries(conversations).map((conversation) => {
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
            // limits the displaying of last message to 75 characters
            if (conversation[1].lastmessage) {
              const messageLength = conversation[1].lastmessage.content.length;

              if (messageLength > 75) {
                lastMessageVariable = conversation[1].lastmessage.content.slice(0, 75);
                lastMessageVariable += '...';
              }
              else {
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
                  redirectTo={redirectTo}
                  userId={userId}
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
          <Grid.Column className="conversations-footerDivIcon" textAlign="center">
            <Modal
              size="tiny"
              closeIcon
              dimmer="blurring"
              open={open}
              trigger={<Image size="tiny" circular src={searchWhite} className="conversations-searchImage conversations-buttonImages" />}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
            >
              <Header icon="user" content="Recherche d'utilisateur" />
              <Modal.Content image className="conversations-modalContent">
                <Image size="medium" className="conversations-modalContentImage" src={detectiveConan} wrapped />
                <Modal.Description className="conversations-modalDescription">
                  <Dropdown
                    placeholder="Sélectionner un utilisateur"
                    search
                    clearable
                    selection
                    className="conversations-userSearchBar"
                    options={userOptions}
                    onChange={getUserValue}
                  />
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="red" onClick={() => setOpen(false)}>
                  <Icon name="cancel" /> Annuler
                </Button>
                <Button color="green" onClick={() => handleConfirmClick()}>
                  <Icon name="eye" /> Voir le profil
                </Button>
              </Modal.Actions>
            </Modal>
          </Grid.Column>
          <Grid.Column className="conversations-footerDivIcon" textAlign="center">
            <Button onClick={changeTheming} className="conversations-themingButton">
              <Image size="tiny" circular src={paletteWhite} className="conversations-paletteImage conversations-buttonImages" />
            </Button>
          </Grid.Column>
          <Grid.Column className="conversations-footerDivIcon" textAlign="center">
            <Link to="/contact" exact={+true}>
              <Button className="conversations-help conversations-buttons">
                <Image size="tiny" circular src={helpWhite} className="conversations-helpImage conversations-buttonImages" />
              </Button>
            </Link>
          </Grid.Column>
        </Grid>
      </Transition>
    </div>
  );
};

Conversations.propTypes = {
  handleHiddenBoxDisplay: PropTypes.func.isRequired,
  isBoxHidden: PropTypes.bool.isRequired,
  conversations: PropTypes.object.isRequired,
  loadSingleChat: PropTypes.func.isRequired,
  userPseudo: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  redirectTo: PropTypes.func.isRequired,
  changeWebsiteTheme: PropTypes.func.isRequired,
  loadOtherUserFullData: PropTypes.func.isRequired,
};

export default Conversations;
