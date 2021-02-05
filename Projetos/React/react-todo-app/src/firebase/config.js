import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkNxwwAY-UN7Ea7Jt87CBLPcSvL2fO4ow",
  authDomain: "todo-app-7e0e3.firebaseapp.com",
  projectId: "todo-app-7e0e3",
  storageBucket: "todo-app-7e0e3.appspot.com",
  messagingSenderId: "627995571979",
  appId: "1:627995571979:web:cdd3c6fa2d09e669fa940e"
};

firebase.initializeApp(firebaseConfig);

const Firestore = firebase.firestore();
export { Firestore }