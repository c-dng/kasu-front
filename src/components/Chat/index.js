/* eslint-disable no-empty-pattern */
import React from 'react';
import Messages from '../../containers/Chat/Messages';
import ChatField from '../../containers/Chat/ChatField';

const Chat = ({ picture, users, userId }) => {

  users = users.filter(user=> {
    return user.id !== userId
  })
  let otherUserPicture = users[0].picture;

  return (
    <div className="chat">
        <img src={`https://api.multiavatar.com/${otherUserPicture}.png`} className="picture"/>
        <Messages />
        <ChatField />
        <img src={`https://api.multiavatar.com/${picture}.png`} className="picture"/>
      
    </div>
  );
} 

Chat.propTypes = {

};
export default Chat;
