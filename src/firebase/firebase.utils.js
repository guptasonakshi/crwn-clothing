import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBs83Nv79pFzMmFUGX_BlKzeRMJe20qDRE",
    authDomain: "crwn-db-2e888.firebaseapp.com",
    databaseURL: "https://crwn-db-2e888.firebaseio.com",
    projectId: "crwn-db-2e888",
    storageBucket: "crwn-db-2e888.appspot.com",
    messagingSenderId: "753398285627",
    appId: "1:753398285627:web:80733b863fff5078c1e31e",
    measurementId: "G-7K59Z18Z75"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;