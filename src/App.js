import React from 'react';
import './styles/App.css';
import ChatBox from './components/ChatBox';
import ThreeDEnvironment from './components/ThreeDEnvironment';
import GPT3Chatbot from './components/GPT3Chatbot';

function App() {
  return (
    <div className="App">
      <ThreeDEnvironment />
      <ChatBox />
      <GPT3Chatbot />
    </div>
  );
}

export default App;