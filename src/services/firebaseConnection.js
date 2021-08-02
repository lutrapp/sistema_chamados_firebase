import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyCW_dROHF1Fw9V6ArkrJvMUTiZRJr9vtik",
    authDomain: "sistema-7988e.firebaseapp.com",
    projectId: "sistema-7988e",
    storageBucket: "sistema-7988e.appspot.com",
    messagingSenderId: "241333749772",
    appId: "1:241333749772:web:1171c985a0e120317c4629",
    measurementId: "G-CPWFC7HTVF"
  };
  
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

export default firebase;