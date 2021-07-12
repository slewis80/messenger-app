import React from "react";
import { Box, Avatar } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({

  seenBySelf: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  seenByOther: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 41
  },
  receiptPic: {
    height: 15,
    width: 15,
    marginTop: 5
  }
}));


const Messages = (props) => {
  const { user, messages, otherUser, userId } = props;
  const classes = useStyles();


  let sortedMessages = messages.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1)
  let recentMessage = sortedMessages[sortedMessages.length -1]
  console.log(otherUser.photoUrl)
  console.log(user)

  return (
    <Box>
      {sortedMessages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      })}
        { recentMessage.senderId === userId ?
          <Box className={classes.seenBySelf}>
            <Avatar className={classes.receiptPic}
              src={otherUser.photoUrl}></Avatar> 
          </Box> 
          :
          <Box className={classes.seenByOther}>
            <Avatar className={classes.receiptPic}
              src={user.photoUrl}></Avatar>
          </Box>
        }
    </Box>
  );
};

export default Messages;
