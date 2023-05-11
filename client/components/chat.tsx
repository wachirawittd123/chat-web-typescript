import React, { useContext } from "react";
import Messages from "./messages";
import Input from "./input";
import { ChatContext } from "../context/chatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.email}</span>
        <div className="chatIcons">
          <img src="/static/images/cam.png" alt="cam" />
          <img src="/static/images/add.png" alt="add" />
          <img src="/static/images/more.png" alt="more" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;