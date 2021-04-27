import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBIANgwrbtYFkpJ7RSBd1kx-L48BD52Sco',
  authDomain: 'foodgram-view.firebaseapp.com',
  projectId: 'foodgram-view',
  storageBucket: 'foodgram-view.appspot.com',
  messagingSenderId: '704766163353',
  appId: '1:704766163353:web:dcd39b2e894f82e74a3b08',
};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {
  projectFirestore,
  projectStorage,
  projectAuth,
  googleProvider,
  timestamp,
};
