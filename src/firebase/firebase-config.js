import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuFXYH2XzVuwpP-uNYZWeJZgzjb-b9XeE",
  authDomain: "latibule-4c9ab.firebaseapp.com",
  projectId: "latibule-4c9ab",
  storageBucket: "latibule-4c9ab.appspot.com",
  messagingSenderId: "114811706389",
  appId: "1:114811706389:web:979ad65ad6cb10dd66821c",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export { db, githubAuthProvider, firebase };
