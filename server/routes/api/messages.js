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
      let conversation = await Conversation.findOne(
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

router.put("/:messageId", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const readMessage = await Message.findOne({
      where: {id: req.body.id}
    })
    let date = Date.now()
    await Message.update({
      updatedAt: date
    }, {
      where: {id: req.body.id}
    })
      console.log(readMessage.updatedAt)
  } catch (error) {
    next(error)
  }
});

module.exports = router;
