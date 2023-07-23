import React, { useState, useEffect } from 'react';
import { gpt3 } from '../api/gpt3';
import ChatBox from './ChatBox';
import '../styles/GPT3Chatbot.css';

const GPT3Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (userMessage) => {
    setMessages([...messages, { text: userMessage, sender: 'user' }]);
    const botMessage = await gpt3(userMessage);
    setMessages([...messages, { text: botMessage, sender: 'bot' }]);
  };

  useEffect(() => {
    const welcomeMessage = 'Hello! How can I assist you today?';
    setMessages([{ text: welcomeMessage, sender: 'bot' }]);
  }, []);

  return (
    <div className="GPT3Chatbot">
      <ChatBox messages={messages} onSendMessage={sendMessage} />
    </div>
  );
};

export default GPT3Chatbot;