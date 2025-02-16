import React, { useEffect, useState } from 'react';
import './Chat.css';

function FarmerChat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const senderEmail = 'rajesh.verma@example.com'; // Hardcoded sender email
  const receiverEmail = 'amit.sharma@example.com'; // Hardcoded receiver email

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`http://localhost:5000/get-messages?senderEmail=${encodeURIComponent(senderEmail)}&receiverEmail=${encodeURIComponent(receiverEmail)}`);
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        } else {
          console.error('Failed to fetch messages');
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [senderEmail, receiverEmail]);

  const handleSendMessage = async () => {
    if (!newMessage) return;

    try {
      const response = await fetch('http://localhost:5000/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          senderEmail,
          receiverEmail,
          message: newMessage,
        }),
      });

      if (response.ok) {
        setMessages([...messages, { senderEmail, receiverEmail, message: newMessage, timestamp: new Date() }]);
        setNewMessage('');
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat with Contractor</h2>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.senderEmail === senderEmail ? 'sent' : 'received'}`}>
            <strong>{msg.senderEmail}</strong> {/* Display sender's email */}
            <p>{msg.message}</p>
            <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default FarmerChat;
