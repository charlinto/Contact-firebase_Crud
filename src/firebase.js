import  firebase from "./firebase";



const firebaseConfig = {
  apiKey: "AIzaSyC3UdkvNhm_XAdaiEfqpPRJaE_zTEPGzSw",
  authDomain: "react-crud-b5b26.firebaseapp.com",
  databaseURL: "https://react-crud-b5b26-default-rtdb.firebaseio.com",
  projectId: "react-crud-b5b26",
  storageBucket: "react-crud-b5b26.appspot.com",
  messagingSenderId: "1030054826058",
  appId: "1:1030054826058:web:0d403804144fcb2a0316b3",
  measurementId: "G-RBPLXS7ZCW"
};

  
  // Initialize Firebase

  const fireDb = firebase.initializeApp(firebaseConfig);
 

   export default fireDb.datebase().ref();