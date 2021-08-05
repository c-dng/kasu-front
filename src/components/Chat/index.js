/* eslint-disable no-empty-pattern */
import React, { useEffect } from 'react';
import Messages from '../../containers/Chat/Messages';
import ChatField from '../../containers/Chat/ChatField';

const Chat = ({ picture, users, userId }) => {
  // We filter the chat users to get the one that is not the logged in user 

  console.log(picture);
  let otherUserPicture;

  if (users) {
    console.log(users);

    console.log('object keys Chat', Object.values(users));
    Object.values(users).map((user) => {
      if (user.id !== userId) {
        otherUserPicture = user.picture;
        console.log('other user pic', otherUserPicture);
      }
    });
  }

  return (
    <div className="chat">
      <img src={`https://api.multiavatar.com/${otherUserPicture}.png`} className="picture" />
      <Messages />
      <ChatField />
      <img src={`https://api.multiavatar.com/${picture}.png`} className="picture" />

    </div>
  );
};

Chat.propTypes = {

};
export default Chat;
