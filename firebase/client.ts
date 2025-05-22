import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfAESiCTtsdXwR1_nMRWeasfLV0d5l_Rw",
  authDomain: "evalyn-interview.firebaseapp.com",
  projectId: "evalyn-interview",
  storageBucket: "evalyn-interview.firebasestorage.app",
  messagingSenderId: "757487449940",
  appId: "1:757487449940:web:0072172a3cf2779e37fac1",
  measurementId: "G-GZP5HBSPGZ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
