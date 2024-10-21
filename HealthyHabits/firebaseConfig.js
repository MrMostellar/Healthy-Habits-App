// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3BsGQ4XQgTIFUiQRm-XT4A3MaQnOXuLE",
  authDomain: "healthyhabits-a0f43.firebaseapp.com",
  projectId: "healthyhabits-a0f43",
  storageBucket: "healthyhabits-a0f43.appspot.com",
  messagingSenderId: "8099350422",
  appId: "1:8099350422:web:87524820320416993bbfb7",
  measurementId: "G-H8GN45KCPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);