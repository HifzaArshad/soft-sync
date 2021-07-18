import firebase from 'firebase/app'; 
import "firebase/database";
import 'firebase/auth';
 

const firebaseConfigEmp = {
    apiKey: "AIzaSyAhpA1Cm-dlsIAhqPk3tBxwNei6lvd_FTQ",
    authDomain: "emplogin-408a5.firebaseapp.com",
    projectId: "emplogin-408a5",
    storageBucket: "emplogin-408a5.appspot.com",
    messagingSenderId: "192972052815",
    appId: "1:192972052815:web:550a926de1fe48f49dcd3a",
    measurementId: "G-9ZMFVPJQGG"
  };

 firebase.initializeApp(firebaseConfigEmp);

var authemp=firebase.auth();
 var database =firebase.database();
 export  {
   authemp,
   database
  }
