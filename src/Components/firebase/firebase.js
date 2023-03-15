import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByZDCcltpOau0oIcm_tcDJeB7oSZ3Gtu0",
  authDomain: "project--clone-380116.firebaseapp.com",
  projectId: "project-youtube-clone-380116",
  storageBucket: "project-youtube-clone-380116.appspot.com",
  messagingSenderId: "523562373519",
  appId: "1:523562373519:web:f622f1d1ddef4f7776bbfa",
  measurementId: "G-JFBTEBHX47"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);