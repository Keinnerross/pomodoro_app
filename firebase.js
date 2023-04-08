import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_Pxv8PozyeWnuMH2sPEvizIQDPMggH8c",
  authDomain: "pomodoro-28395.firebaseapp.com",
  databaseURL: "https://pomodoro-28395-default-rtdb.firebaseio.com",
  projectId: "pomodoro-28395",
  storageBucket: "pomodoro-28395.appspot.com",
  messagingSenderId: "637753755178",
  appId: "1:637753755178:web:6f8cb4d51a8b1db1136553",
  measurementId: "G-9MSL8PVB84",
};

const firebase = initializeApp(firebaseConfig);
export const db = firebase.firestore();
