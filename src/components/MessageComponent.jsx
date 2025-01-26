import React from "react";

const MessageCard = ({ message, isError }) => {
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "12px",
        fontSize: "18px",
        color: "white",
        backgroundColor: isError ? "red" : "green",
        marginTop: "16px",
        textAlign: "center",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      {message}
    </div>
  );
};

export default MessageCard;