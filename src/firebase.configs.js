// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB28Wc3xo1zF1n-bldaR3UgO7jONNaxmI8",
  authDomain: "quiz-app-dc869.firebaseapp.com",
  projectId: "quiz-app-dc869",
  storageBucket: "quiz-app-dc869.appspot.com",
  messagingSenderId: "516875907855",
  appId: "1:516875907855:web:f9ca354e4398ae0f9e447a",
  measurementId: "G-Y08SE0TL5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
