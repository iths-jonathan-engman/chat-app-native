import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAHUsmQB2-E0aw1pefdulWYI1lmZ-nWbJM",
  authDomain: "native-chatt-app.firebaseapp.com",
  projectId: "native-chatt-app",
  storageBucket: "native-chatt-app.appspot.com",
  messagingSenderId: "873141013746",
  appId: "1:873141013746:web:e5b1f2c4fd1c70cd92146b"
};


firebase.initializeApp(firebaseConfig);

export default firebase;