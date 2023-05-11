import { initializeApp, getApp } from "firebase/app";
import {initializeAuth, browserLocalPersistence, browserSessionPersistence, indexedDBLocalPersistence} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { firebaseConfig } from "../../firebase.config";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const firebaseApp = getApp();
export const auth = 
initializeAuth(
    app, 
    {
        persistence: browserLocalPersistence
    }
)
export const storage = getStorage(firebaseApp, "gs://chatbot-typescript-c02a7.appspot.com");
export const db = getFirestore()
