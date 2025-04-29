import mongoose from 'mongoose';
import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

// Send message functionality
export const sendMessage = async (req, res) => {
  try {
    const { message, senderId, receiverId } = req.body;

    // Validate required fields
    if (!senderId || !receiverId) {
      return res.status(400).json({ error: 'Sender and Receiver IDs are required.' });
    }

    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message cannot be empty.' });
    }

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(senderId) || !mongoose.Types.ObjectId.isValid(receiverId)) {
      return res.status(400).json({ error: 'Invalid senderId or receiverId.' });
    }

    const senderObjectId = new mongoose.Types.ObjectId(senderId);
    const receiverObjectId = new mongoose.Types.ObjectId(receiverId);

    // Find existing conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [senderObjectId, receiverObjectId] },
    });

    // If no conversation, create one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderObjectId, receiverObjectId],
      });
    }

    // Create and save the new message
    const newMessage = await Message.create({
      senderId: senderObjectId,
      receiverId: receiverObjectId,
      message,
    });

    // Update conversation with the new message
    conversation.messages.push(newMessage._id);
    conversation.lastMessage = newMessage._id;
    await conversation.save(); // Save updated conversation

    // Add Socket.IO functionality here for real-time messaging

    // Send response
    res.status(201).json(newMessage);

  } catch (error) {
    console.error('Error in sendMessage controller:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get message functionality
export const getMessage = async (req, res) => {
   try {
      const { id: userTochatId } = req.params;
      const senderId = req.user._id;

      // Trim any extra whitespace/newline from the userTochatId
      const trimmedUserTochatId = userTochatId.trim();

      // Log the values to check if they're correct
      console.log("Sender ID:", senderId);
      console.log("User to Chat ID:", trimmedUserTochatId);

      // Find conversation between the sender and receiver
      const conversation = await Conversation.findOne({
         participants: { $all: [senderId, trimmedUserTochatId] },
      }).populate("messages");

      // Check if the conversation exists
      if (!conversation) {
         console.log("No conversation found between these participants.");
         return res.status(404).json({ error: 'Conversation not found' });
      }

      // Return the messages if the conversation is found
      res.status(200).json(conversation.messages);

   } catch (error) {
      console.error('Error in getMessage controller:', error.message);
      res.status(500).json({ error: 'Internal server error' });
   }
};
