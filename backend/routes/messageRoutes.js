import express from "express";
import Message from "../models/messageModel.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.get("/", isAuthenticated, async (req, res) => {
  const { senderId, receiverId } = req.query;

  if (!senderId || !receiverId) {
    return res.status(400).json({ message: "Both senderId and receiverId are required" });
  }

  try {
    const messages = await Message.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId },
      ],
    }).sort({ createdAt: 1 });

    res.status(200).json({ success: true, messages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post("/", isAuthenticated, async (req, res) => {
  const { sender, receiver, content } = req.body;

  if (!sender || !receiver || !content) {
    return res.status(400).json({ message: "Sender, receiver, and content are required" });
  }

  try {
    const newMessage = new Message({
      sender,
      receiver,
      content,
    });

    await newMessage.save();

    res.status(201).json({ success: true, message: newMessage });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
