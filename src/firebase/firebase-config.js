import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCez9N0izmT3yrFj42u0Ok8EcrHoNoYCLQ",
    authDomain: "react-app-cursos-7205a.firebaseapp.com",
    projectId: "react-app-cursos-7205a",
    storageBucket: "react-app-cursos-7205a.appspot.com",
    messagingSenderId: "75259872056",
    appId: "1:75259872056:web:ba53f673cefa7a787cb7cd"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{
      db,
      googleAuthProvider,
      firebase
  }


//-----------------------------


// import 'firebase/firestore';
// import 'firebase/auth';
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { GoogleAuthProvider } from 'firebase/auth';
 
 
// // Your web app's Firebase configuration
// const firebaseConfig = {
//  //tuinformación de tu app en firebase
//      apiKey: "AIzaSyCez9N0izmT3yrFj42u0Ok8EcrHoNoYCLQ",
//      authDomain: "react-app-cursos-7205a.firebaseapp.com",
//      projectId: "react-app-cursos-7205a",
//      storageBucket: "react-app-cursos-7205a.appspot.com",
//      messagingSenderId: "75259872056",
//      appId: "1:75259872056:web:ba53f673cefa7a787cb7cd"
   
   
// };
 
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
 
// const db = getFirestore();
 
// const googleAuthProvider = new GoogleAuthProvider();
 
// export{
//     db,
//     googleAuthProvider,
//     app
// }
