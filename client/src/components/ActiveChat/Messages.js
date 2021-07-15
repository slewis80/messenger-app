import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";
import { updateMessageReadStatus } from "../../store/utils/thunkCreators";


const Messages = (props) => {
  const { conversation, messages, otherUser, userId } = props;

  const recentMessage = messages[messages.length -1]

  useEffect(() => {
    updateMessageReadStatus(conversation);
  }, [conversation, recentMessage])

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} otherUser={otherUser}
             recentMessage={recentMessage} read={message.read} />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      })}
    </Box>
  );
};

export default Messages;
