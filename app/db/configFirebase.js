import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwKoY1IGdMgtrF19lq0ya6vMfIP4pEDGc",
  authDomain: "activity-app-3a0fe.firebaseapp.com",
  projectId: "activity-app-3a0fe",
  storageBucket: "activity-app-3a0fe.appspot.com",
  messagingSenderId: "644387625403",
  appId: "1:644387625403:web:e52b191471b5eed0414c9e"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);