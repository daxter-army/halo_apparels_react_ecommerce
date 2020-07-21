import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCEh1Om-PKtRKBRqQClsa8gpOIQNoivSKw",
    authDomain: "halo-clothing-db.firebaseapp.com",
    databaseURL: "https://halo-clothing-db.firebaseio.com",
    projectId: "halo-clothing-db",
    storageBucket: "halo-clothing-db.appspot.com",
    messagingSenderId: "146844991800",
    appId: "1:146844991800:web:a55e2b348f39d398af41cd",
    measurementId: "G-KSLK0T9Y84"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
