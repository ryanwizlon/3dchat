import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ChatMessage.css';

const ChatMessage = ({ message, isUser }) => {
  const messageClass = isUser ? styles.userMessage : styles.botMessage;

  return (
    <div className={`${styles.chatMessage} ${messageClass}`}>
      <p>{message}</p>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.string.isRequired,
  isUser: PropTypes.bool.isRequired,
};

export default ChatMessage;