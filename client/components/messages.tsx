import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/chatContext";
import { db } from "../../server/common/db";
import Message from "./message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if(data?.chatId) {
      const unSub = onSnapshot(doc(db, "chats", data?.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      });
  
      return () => {
        unSub();
      };
    }
  }, [data?.chatId]);

  return (
    <div className="messages">
      {messages.map((m:any) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;