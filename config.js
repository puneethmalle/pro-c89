import firebase from 'firebase';
import 'firebase/auth'
import'firebase/database'
import 'firebase/app'


// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyD8glv6hd6Rzg5Xcs5JX7EqWsq2NXZV7kQ",
    authDomain: "spectagram-app-7d258.firebaseapp.com",
    projectId: "spectagram-app-7d258",
    storageBucket: "spectagram-app-7d258.appspot.com",
    messagingSenderId: "435795143781",
    appId: "1:435795143781:web:2f73a211c31a75a517ea8c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);