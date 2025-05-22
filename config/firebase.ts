// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIKlrQosFpVEu7coe5M8VW_axin4w8_x8",
  authDomain: "tracciamento-spese-3f7f5.firebaseapp.com",
  projectId: "tracciamento-spese-3f7f5",
  storageBucket: "tracciamento-spese-3f7f5.firebasestorage.app",
  messagingSenderId: "743360075373",
  appId: "1:743360075373:web:450cd81208c09f80b25164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});


export const firestore = getFirestore(app);