import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, content } = req.body;
    const newMessage = new Message({ senderId, receiverId, content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { userId, targetUserId } = req.params;
    const messages = await Message.find({
      $or: [
        { senderId: userId, receiverId: targetUserId },
        { senderId: targetUserId, receiverId: userId },
      ],
    }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
