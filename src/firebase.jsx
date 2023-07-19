import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbCa9B6oEA7GM-oJuYTiEbPOA4MKQw83w",
    authDomain: "instantchat-3d70e.firebaseapp.com",
    projectId: "instantchat-3d70e",
    storageBucket: "instantchat-3d70e.appspot.com",
    messagingSenderId: "503918969450",
    appId: "1:503918969450:web:4d4faeeea0c0945a288013"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);