// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAIfeW2IPl2pTjeoJQFvUT9VpdfK-ouZOI",
  authDomain: "react-3d449.firebaseapp.com",
  projectId: "react-3d449",
  storageBucket: "react-3d449.appspot.com",
  messagingSenderId: "777960037112",
  appId: "1:777960037112:web:7bdad484beb42a2935f90d",
  measurementId: "G-C1WJYWJH75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// creamos una instancia en la base de datos

export const db = getFirestore(app);