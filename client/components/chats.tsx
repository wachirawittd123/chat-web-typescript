import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/chatContext";
import { db } from "../../server/common/db";

const Chats = () => {
  const [chats, setChats] = useState<any>([]);
  const { currentUser }:any = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc:any) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser?.uid && getChats();
  }, [currentUser?.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  return (
    <div className="chats">
      {chats && Object.entries(chats)?.length > 0 && Object.entries(chats)?.sort((a:any,b:any)=>b[1]?.date - a[1]?.date).map((chat:any) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo?.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo?.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;