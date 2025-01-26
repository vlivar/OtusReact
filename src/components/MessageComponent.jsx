import React from "react";
import "../styles.css";

const MessageComponent = ({ message, isError }) => {
  return (
    <div
      className={`message-card ${isError ? "message-error" : "message-success"}`}
    >
      {message}
    </div>
  );
};

export default MessageComponent;