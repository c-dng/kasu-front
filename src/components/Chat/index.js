import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Messages from '../../containers/Chat/Messages';
import ChatField from '../../containers/Chat/ChatField';

const Chat = ({
  picture, users, userId, handleLoadUser, redirectTo,
}) => {
  // We filter the chat users to get the one that is not the logged in user
  let otherUserPicture;
  let otherUserId;
  let otherUserPseudo;
  if (users) {
    // Object.values/entries/keys allows to iterate with array functions like .map or .filter 
    // through objects
    Object.values(users).map((user) => {
      if (user.id !== userId) {
        otherUserPicture = user.picture;
        otherUserId = user.id;
        otherUserPseudo = user.pseudo;
      }
      return null;
    });
  }

  return (
    <div className="chat">
      {/* button reserved for mobile view. Load other user data + redirect to its profile page */}
      <Button className="chat-otherUserProfilLink" onClick={() => handleLoadUser(otherUserId)}>Voir le profil de {otherUserPseudo}</Button>
      {/* image reserved for desktop view. Load other user data + redirect to its profile page */}
      <img onClick={() => handleLoadUser(otherUserId)} src={`https://api.multiavatar.com/${otherUserPicture}.png`} alt="other user" className="picture" />
      <Messages />
      <ChatField />
      {/* image reserved for desktop view. redirect to connected user profile page */}
      <img onClick={() => redirectTo('/profil/mon-profil')} src={`https://api.multiavatar.com/${picture}.png`} alt="user" className="picture" />
    </div>
  );
};

Chat.propTypes = {
  picture: PropTypes.string.isRequired,
  users: PropTypes.array,
  userId: PropTypes.number.isRequired,
  handleLoadUser: PropTypes.func.isRequired,
  redirectTo: PropTypes.func.isRequired,
};

Chat.defaultProps = {
  users: [],
};
export default Chat;
