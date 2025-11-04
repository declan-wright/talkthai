// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider, type Auth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc, collection, query, orderBy, limit, getDocs, where, serverTimestamp, addDoc, Timestamp, writeBatch, onSnapshot, deleteDoc, runTransaction, type Firestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpiGMnLhFPB6vDp_fpn7ZLUfIUw2u8khI",
  authDomain: "talk-thai-nakhonsawan.firebaseapp.com",
  projectId: "talk-thai-nakhonsawan",
  storageBucket: "talk-thai-nakhonsawan.appspot.com",
  messagingSenderId: "42827225301",
  appId: "1:42827225301:web:3760ece8b876d4c3536a5c"
};

// Initialize Firebase App using a singleton pattern
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Eagerly initialize and export services
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

export { app, auth, db };

// Re-export auth APIs from the same module instance to prevent cross-instance mismatches
export { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider };

// Re-export firestore APIs from the same module instance to prevent cross-instance mismatches
export { doc, getDoc, setDoc, updateDoc, collection, query, orderBy, limit, getDocs, where, serverTimestamp, addDoc, Timestamp, writeBatch, onSnapshot, deleteDoc, runTransaction };