import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA40SXxr9QZd7ATJtfTFqoeczpao646nKk",
  authDomain: "project-72-job-portal-app.firebaseapp.com",
  projectId: "project-72-job-portal-app",
  storageBucket: "project-72-job-portal-app.appspot.com",
  messagingSenderId: "784509498025",
  appId: "1:784509498025:web:a3628f1381a6b35ebd2fb8"
};

// Initialize Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   