// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCKv1Zr7syeJHGaKU-wZQVmwt1n7KFQLKs",
  authDomain: "sciccor-7fdad.firebaseapp.com",
  projectId: "sciccor-7fdad",
  storageBucket: "sciccor-7fdad.appspot.com",
  messagingSenderId: "375503482102",
  appId: "1:375503482102:web:c77c8c5e2a072b26eb50d7",
  measurementId: "G-S0M1MV3406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}