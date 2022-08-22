// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAewoEFcH0MnpTGGEc8-DRtZ_hTNxvLSIQ",
  authDomain: "clone-17cf7.firebaseapp.com",
  projectId: "clone-17cf7",
  storageBucket: "clone-17cf7.appspot.com",
  messagingSenderId: "713708418100",
  appId: "1:713708418100:web:dc522a0edb21d9ea78c661",
  measurementId: "G-XC8D8TN77C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);