import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import '../styles/ChatBox.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="chatBox">
      <div className="chatMessages">
        {messages.map((message, index) => (
          <ChatMessage key={index} text={message.text} sender={message.sender} />
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          className="chatInput"
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;