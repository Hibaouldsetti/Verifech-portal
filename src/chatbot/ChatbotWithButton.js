import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import 'react-chatbot-kit/build/main.css'; // Import Chatbot Kit styles
import './ChatbotWithButton.css'; // Custom CSS for styling

const ChatbotWithButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      {isChatOpen && (
        <div className="chatbot-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}

      <button className="chatbot-toggle-button" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default ChatbotWithButton;
