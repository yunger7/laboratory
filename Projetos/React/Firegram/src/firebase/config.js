import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyClFQ_DzYVuJGJXkOGRu9aRaX3f9_bxyJ0",
  authDomain: "firegram-2e164.firebaseapp.com",
  projectId: "firegram-2e164",
  storageBucket: "firegram-2e164.appspot.com",
  messagingSenderId: "856527427901",
  appId: "1:856527427901:web:5cb02bcbfb63386e208d54"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
