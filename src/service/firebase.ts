import Firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyBWmaW3ViEnberUEeg-84SVnz1Egy1yw8c",

  authDomain: "underdark-72fce.firebaseapp.com",

  projectId: "underdark-72fce",

  storageBucket: "underdark-72fce.appspot.com",

  messagingSenderId: "243774857334",

  appId: "1:243774857334:web:c910000f4754202c4abf57",

  measurementId: "G-LPNNBVGZS1"

};

const firebase = Firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore();


