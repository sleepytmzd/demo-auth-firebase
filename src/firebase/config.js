import { initializeApp } from "firebase/app";
import 'dotenv/config'

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "test-chat-plugin.firebaseapp.com",
  projectId: "test-chat-plugin",
  storageBucket: "test-chat-plugin.appspot.com",
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
