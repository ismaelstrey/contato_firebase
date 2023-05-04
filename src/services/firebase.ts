import firebase from "firebase/app";
import 'firebase/database'
const firebaseConfig = {
    apiKey: process.env.NEXT_APIKEY,
    authDomain: "speedsul-efb7f.firebaseapp.com",
    databaseURL: "https://speedsul-efb7f.firebaseio.com",
    projectId: process.env.NEXT_PROJECTID,
    storageBucket: process.env.NEXT_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_MESSAGINGSENDERID,
    appId: process.env.NEXT_APPID
  };
//   const firebaseConfig = {
//     apiKey: process.env.NEXT_APIKEY,
//     authDomain: process.env.NEXT_AUTHDOMAIN,
//     databaseURL: process.env.NEXT_DATABASEURL,
//     projectId: process.env.NEXT_PROJECTID,
//     storageBucket: process.env.NEXT_STORAGEBUCKET,
//     messagingSenderId: process.env.NEXT_MESSAGINGSENDERID,
//     appId: process.env.NEXT_APPID
//   };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}else{
    firebase.app()
}

// Initialize Firebase
const database = firebase.database()

export {database, firebase}