import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCAWf3zu9_U9wQMXf4zhe8uNPhEiZCMNwQ",
    authDomain: "react-crwn-db-93a4c.firebaseapp.com",
    projectId: "react-crwn-db-93a4c",
    storageBucket: "react-crwn-db-93a4c.appspot.com",
    messagingSenderId: "451583401638",
    appId: "1:451583401638:web:38bb6731546bddc92e1e67",
    measurementId: "G-VVSXDTX4CP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;