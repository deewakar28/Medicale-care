import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA2KY2bnMBjRlUOM-187zWSTrsXSM5Mezo",
  authDomain: "visionaries-united.firebaseapp.com",
  projectId: "visionaries-united",
  storageBucket: "visionaries-united.appspot.com",
  messagingSenderId: "510962415693",
  appId: "1:510962415693:web:8404cedab82530ddd60404",
  measurementId: "G-4CE0ZGMN35"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);