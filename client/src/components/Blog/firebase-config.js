import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkXIxKqfHsvwx9KbsI7w9JIp4t8JGEkgg",
  authDomain: "blogproject-cf3d7.firebaseapp.com",
  projectId: "blogproject-cf3d7",
  storageBucket: "blogproject-cf3d7.appspot.com",
  messagingSenderId: "545075613915",
  appId: "1:545075613915:web:b156a3bd8e600d9a9f3cfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbs = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();