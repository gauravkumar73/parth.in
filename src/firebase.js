// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 🔥 IMPORTANT

const firebaseConfig = {
  apiKey: "AIzaSyCRk7tKT8JISmyzaZ9253deLkp2d6_ugQ0",
  authDomain: "webnirmaan-project.firebaseapp.com",
  projectId: "webnirmaan-project",
  storageBucket: "webnirmaan-project.firebasestorage.app",
  messagingSenderId: "1026912123352",
  appId: "1:1026912123352:web:c64765d22a6c728e051aad",
};

const app = initializeApp(firebaseConfig);

// 🔥 Database connect
export const db = getFirestore(app);