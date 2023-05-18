import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/chatContext";
import {
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../server/common/db";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser }:any = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    let oldChat = await getDoc(doc(db, "chats", data.chatId))
    let dataOldChat:any = {...oldChat.data()}
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask:any = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            dataOldChat.messages.push({
              id: uuid(),
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
              img: downloadURL,
            }),
            await setDoc(doc(db, "chats", data.chatId), dataOldChat);
          });
        }
      );
    } else {
      dataOldChat.messages.push({
        id: uuid(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      })
      await setDoc(doc(db, "chats", data.chatId), dataOldChat);
    }
    let currentUserChat = await getDoc(doc(db, "userChats", currentUser.uid));
    let dataCurrentUserChat:any = currentUserChat.data()
    
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId]: {
        ...dataCurrentUserChat[data.chatId],
        lastMessage: text,
        date: serverTimestamp(),
      },
    });

    let userChat = await getDoc(doc(db, "userChats", data.user.uid));
    let dataUserChat:any = userChat.data()

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId]: {
        ...dataUserChat[data.chatId],
        lastMessage: text,
        date: serverTimestamp()
      },
    });

    setText("");
    setImg(null);
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!data.chatId}
      />
      <div className="send">
        <img src="/static/images/attach.png" alt="attach" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e:any) => setImg(e.target.files[0])}
          disabled={!data.chatId}
        />
        <label htmlFor="file">
          <img src="/static/images/img.png" alt="img" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;