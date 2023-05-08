import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBv9BgJRP26waA1X-J1WeiiQ6qP-TKVEsc",
  authDomain: "chatweb-typescript.firebaseapp.com",
  projectId: "chatweb-typescript",
  storageBucket: "chatweb-typescript.appspot.com",
  messagingSenderId: "241437498789",
  appId: "1:241437498789:web:19a49c89a6e221da865c4c",
  measurementId: "G-XEENFJB30S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const firebaseApp = getApp();
export const auth = getAuth(app);
export const storage = getStorage(firebaseApp, "gs://chatweb-typescript.appspot.com");

