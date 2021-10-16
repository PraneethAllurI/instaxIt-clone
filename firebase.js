
import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyByQQWfKkPSBosoJK74T7QsUah6n77lBvM",
    authDomain: "insta-clone-c066e.firebaseapp.com",
    projectId: "insta-clone-c066e",
    storageBucket: "insta-clone-c066e.appspot.com",
    messagingSenderId: "498010693409",
    appId: "1:498010693409:web:4eddfe1cf2c5f726912860",
    measurementId: "G-HGWVM7HK37"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };