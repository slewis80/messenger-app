import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";
import { updateMessageReadStatus } from "../../store/utils/thunkCreators";


const Messages = (props) => {
  const { conversation, messages, otherUser, userId } = props;

  const recentMessage = messages[messages.length -1]
  
  const [sendersRecent, setSendersRecent] = useState(recentMessage)

  const messagesByCurrentUser = [recentMessage]

  useEffect(() => {
    updateMessageReadStatus(conversation);
    setSendersRecent(messagesByCurrentUser[messagesByCurrentUser.length -1]);
  }, [conversation, recentMessage])

  
  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        if (message.read && message.senderId === userId) {
          messagesByCurrentUser.push(message);
        }

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} otherUser={otherUser}
             recentMessage={recentMessage} read={message.read} sendersRecent={sendersRecent} />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} 
            sendersRecent={sendersRecent} />
        );
      })}
    </Box>
  );
};

export default Messages;
