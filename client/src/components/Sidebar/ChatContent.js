import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
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
  previewTextNew: {
    fontSize: 12,
    color: "black",
    letterSpacing: -0.17,
    fontWeight: "bold",
  },
  badge: {

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
  console.log(props)

  const { conversation } = props;
  const { latestMessageText, otherUser } = conversation;

  const [unreadMessages, setUnreadMessages] = useState([])

  const countUnreadMessages = (messages) => {
    messages.map(message => {
      if (!message.read && message.senderId === otherUser.id) {
        setUnreadMessages(prevMessages => prevMessages + message.id)
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
      <Box className={classes.root}>
        <Box>
          <Typography className={classes.username}>
            {otherUser.username}
          </Typography>
          <Typography className={unreadMessages.length > 0 ? classes.previewTextNew : classes.previewText}>
            {latestMessageText}
          </Typography>
        </Box>
        { unreadMessages.length > 0 ? 
          <span
            className={classes.notification}
          >{unreadMessages.length}
          </span>
        :
          ""
        }
      </Box>
    </Box>
  );
};

export default ChatContent;
