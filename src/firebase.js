import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqCt5a1ofnYQv49xdeJDPnVSLfDX3g1so",
  authDomain: "disneyplus-clone-cf436.firebaseapp.com",
  projectId: "disneyplus-clone-cf436",
  storageBucket: "disneyplus-clone-cf436.appspot.com",
  messagingSenderId: "274857697222",
  appId: "1:274857697222:web:525319d681b55f70ff5cc7",
  measurementId: "G-NR15QX23C6",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
