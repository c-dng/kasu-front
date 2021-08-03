/* eslint-disable no-empty-pattern */
import React from 'react';
import Messages from '../../containers/Chat/Messages';
import ChatField from '../../containers/Chat/ChatField';

const Chat = ({ picture, users, userId }) => {
// We filter the chat users to get the one that is not the logged in user
  users = users.filter((user) => user.id !== userId);
  const otherUserPicture = users[0].picture;

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
