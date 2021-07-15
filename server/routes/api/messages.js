const router = require("express").Router();
const { Conversation, Message } = require("../../db/models");
const { Op } = require("sequelize");
const onlineUsers = require("../../onlineUsers");

// expects {recipientId, text, conversationId } in body (conversationId will be null if no conversation exists yet)
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const senderId = req.user.id;
    const { recipientId, text, conversationId, sender } = req.body;

    // if we already know conversation id, we can save time and just add it to message and return
    if (conversationId) {
      const conversation = await Conversation.findByPk(
        conversationId
      )
      // error if trying to post to someone else's conversation
      if (conversation.user1Id != senderId && conversation.user2Id != senderId){
        const error = new Error("You cannot post to a private conversation.")
        res.status(403)
        return next(error)
      } else {
        const message = await Message.create({ senderId, text, conversationId });
        return res.json({ message, sender });  
      }
      
    }
    // if we don't have conversation id, find a conversation to make sure it doesn't already exist
    let conversation = await Conversation.findConversation(
      senderId,
      recipientId
    );

    if (!conversation) {
      // create conversation
      conversation = await Conversation.create({
        user1Id: senderId,
        user2Id: recipientId,
      });
      if (onlineUsers.includes(sender.id)) {
        sender.online = true;
      }
    }
    const message = await Message.create({
      senderId,
      text,
      conversationId: conversation.id,
    });
    res.json({ message, sender });
  } catch (error) {
    next(error);
  }
});


// updating the message read status in a conversation
router.put("/:conversationId", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const senderId = req.user.id;
    const conversationId = req.params.conversationId;
    const messagesToUpdate = req.body;
    const conversation = await Conversation.findByPk(conversationId)

    // error if trying to post to someone else's conversation
    if (conversation.user1Id != senderId && conversation.user2Id != senderId){
      const error = new Error("Cannot update message read status for this conversation.")
      res.status(403)
      return next(error)
    } else {
      await messagesToUpdate.forEach(message => {
        const messageId = message.id
        Message.update(
          {read: true},
          {where: {id: messageId}}
        ).then(res =>
          console.log("Updated messages read")
        ).catch(error =>
          console.log(error)
        ) 
      })
    }
  } catch (error) {
    next(error)
  }
});

module.exports = router;
