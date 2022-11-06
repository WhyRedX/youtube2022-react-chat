import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClwkpgqumiOFORZL3REv0wBAa8NsawEh4",
  authDomain: "chatapp-3c5b5.firebaseapp.com",
  projectId: "chatapp-3c5b5",
  storageBucket: "chatapp-3c5b5.appspot.com",
  messagingSenderId: "251979948182",
  appId: "1:251979948182:web:16f4c3a067d73fb0c8e2b7",
  measurementId: "G-P318SXPZLW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
