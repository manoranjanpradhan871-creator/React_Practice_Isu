import React, { useState, useRef, useEffect } from "react";

const MessagesList = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Add new message
  const addMessage = () => {
    const newMessage = `Message ${messages.length + 1}`;
    setMessages(prev => [...prev, newMessage]);
  };

  // Auto scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={styles.container}>
      <h2>Messages</h2>

      <div style={styles.messageBox}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.message}>
            {msg}
          </div>
        ))}

        {/* Invisible div to scroll into view */}
        <div ref={messagesEndRef} />
      </div>

      <button style={styles.button} onClick={addMessage}>
        Add Message
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "40px auto",
    textAlign: "center",
    fontFamily: "Arial"
  },
  messageBox: {
    height: "200px",
    overflowY: "auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "15px",
    backgroundColor: "#f9f9f9"
  },
  message: {
    padding: "8px",
    margin: "5px 0",
    backgroundColor: "#e6f7ff",
    borderRadius: "5px",
    textAlign: "left"
  },
  button: {
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff"
  }
};

export default MessagesList;