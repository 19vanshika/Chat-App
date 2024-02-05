// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf5y9-9BYtQ2tgja3X8eHrFV9ZrGQX_sY",
  authDomain: "chatapp-4776a.firebaseapp.com",
  projectId: "chatapp-4776a",
  storageBucket: "chatapp-4776a.appspot.com",
  messagingSenderId: "776021541103",
  appId: "1:776021541103:web:247e22fe6ed642ca525b1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db= getFirestore(app);