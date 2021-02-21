import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCp3AnDGi9GuWh-VgnjKcf8oSXVTFI1h-g",
    authDomain: "clone-7d686.firebaseapp.com",
    projectId: "clone-7d686",
    storageBucket: "clone-7d686.appspot.com",
    messagingSenderId: "986194756599",
    appId: "1:986194756599:web:7293c7139fbb44e70524f2"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}