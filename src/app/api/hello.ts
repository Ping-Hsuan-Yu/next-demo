// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpJfdnQ8gmOPY5Y2CcjvoYr3KM16yacog",
  authDomain: "next-demo-1949c.firebaseapp.com",
  projectId: "next-demo-1949c",
  storageBucket: "next-demo-1949c.appspot.com",
  messagingSenderId: "526165729475",
  appId: "1:526165729475:web:fc1a7f90d460d06eb74276",
  measurementId: "G-879BHEJ6ZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);