import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCmWQ_F6rxXU8BIVJciqrBRXgCQ0wdzdrI",
    authDomain: "storyhub-cc9f4.firebaseapp.com",
    databaseURL: "https://storyhub-cc9f4-default-rtdb.firebaseio.com",
    projectId: "storyhub-cc9f4",
    storageBucket: "storyhub-cc9f4.appspot.com",
    messagingSenderId: "248575038715",
    appId: "1:248575038715:web:201cd1bf11fa657ba74c5e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();