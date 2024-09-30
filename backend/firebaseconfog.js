// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjwLqHZUpGBDbRBNpXTj84ibdlmhyi3CQ",
  authDomain: "login-authentication-268f9.firebaseapp.com",
  databaseURL: "https://login-authentication-268f9-default-rtdb.firebaseio.com",
  projectId: "login-authentication-268f9",
  storageBucket: "login-authentication-268f9.appspot.com",
  messagingSenderId: "126430208193",
  appId: "1:126430208193:web:a833f9c61888f6ee75f440",
  measurementId: "G-FXSD0XYQRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);