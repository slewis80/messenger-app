import React, { useState, useEffect } from "react";
import { Box, Typography, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  notification: {
    height: 20,
    width: 20,
    backgroundColor: "#3F92FF",
    marginRight: 10,
    color: "white",
    fontSize: 10,
    letterSpacing: -0.5,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser } = conversation;

  const [unreadMessages, setUnreadMessages] = useState([])

  const countUnreadMessages = (messages) => {
    messages.map(message => {
      if (message.messageRead === false && message.senderId === otherUser.id) {
        setUnreadMessages(unreadMessages.push(message.id))
      } else {
        setUnreadMessages(unreadMessages)
      } return unreadMessages
    })
  }

  const resetUnreadMessagesCount = () => {
    setUnreadMessages([])
  }

 
  useEffect(() => {
    countUnreadMessages(conversation.messages);
  }, [latestMessageText])


  return (
    <Box className={classes.root}
      onClick={resetUnreadMessagesCount}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
        <Badge
          color="primary" 
          style={{marginLeft: "200px"}}
          badgeContent={unreadMessages.length}
        />
      </Box>
    </Box>
  );
};

export default ChatContent;
