// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqK88uxqHkvYttBm8MoHsVz0uN2D7WxZw",
  authDomain: "form-w.firebaseapp.com",
  projectId: "form-w",
  storageBucket: "form-w.appspot.com",
  messagingSenderId: "62485469835",
  appId: "1:62485469835:web:1c39dd60b1e5aa33dc528e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)