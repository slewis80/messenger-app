import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";
import { updateMessageReadStatus } from "../../store/utils/thunkCreators";


const Messages = (props) => {
  const { conversation, messages, otherUser, userId } = props;

  const recentMessage = messages[messages.length -1]
  
  const [sendersRecent, setSendersRecent] = useState(recentMessage)

  const messagesBySCurrentUser = []

  useEffect(() => {
    updateMessageReadStatus(conversation);
    setSendersRecent(messagesBySCurrentUser[messagesBySCurrentUser.length -1]);
  }, [conversation, recentMessage])

  
  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        if (message.read && message.senderId === userId) {
          messagesBySCurrentUser.push(message);
        }
        // messagesBySCurrentUser.sort((a,b) => a.id > b.id ? 1 : -1)

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} otherUser={otherUser}
             recentMessage={recentMessage} read={message.read} sendersRecent={sendersRecent} />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      })}
    </Box>
  );
};

export default Messages;
