/* eslint-disable no-empty-pattern */
import React, { useEffect } from 'react';
import Messages from '../../containers/Chat/Messages';
import ChatField from '../../containers/Chat/ChatField';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Chat = ({ picture, users, userId, handleLoadUser, redirectTo }) => {
  // We filter the chat users to get the one that is not the logged in user 

  console.log(picture);
  let otherUserPicture;
  let otherUserId;
  let otherUserPseudo;
  if (users) {
    console.log(users);

    console.log('object keys Chat', Object.values(users));
    Object.values(users).map((user) => {
      if (user.id !== userId) {
        otherUserPicture = user.picture;
        otherUserId = user.id;
        otherUserPseudo = user.pseudo;
        console.log('other user pic', otherUserPicture);
      }
    });
  }

  return (
    <div className="chat">
      <Button className="chat-otherUserProfilLink" onClick={() => handleLoadUser(otherUserId)}>Voir le profil de {otherUserPseudo}</Button>
      <img onClick={() => handleLoadUser(otherUserId)} src={`https://api.multiavatar.com/${otherUserPicture}.png`} className="picture" />
      <Messages />
      <ChatField />
      <img onClick={() => redirectTo('/profil/mon-profil')} src={`https://api.multiavatar.com/${picture}.png`} className="picture" />
    </div>
  );
};

Chat.propTypes = {

};
export default Chat;
