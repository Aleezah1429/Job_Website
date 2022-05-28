// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiOyy2rkvwPsO_Ho12fg6KnFcFj0ntulw",
  authDomain: "olxclonereact.firebaseapp.com",
  databaseURL: "https://olxclonereact.firebaseio.com",
  projectId: "olxclonereact",
  storageBucket: "olxclonereact.appspot.com",
  messagingSenderId: "134390291782",
  appId: "1:134390291782:web:212893d43d6b9bb79a1947",
  measurementId: "G-7JKJPZY7R2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);