// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6CXXGCMgRBYPOm-Il9LAWIIiD-gpfkDg",
  authDomain: "tarea-diseno-de-software-f67bb.firebaseapp.com",
  projectId: "tarea-diseno-de-software-f67bb",
  storageBucket: "tarea-diseno-de-software-f67bb.appspot.com",
  messagingSenderId: "621801730704",
  appId: "1:621801730704:web:410960aa83dd9487725e15"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;