// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDW82-SZ8kubthvZ2JSg0MdlDvISK4NFho",
  authDomain: "ecommerce-913ce.firebaseapp.com",
  projectId: "ecommerce-913ce",
  storageBucket: "ecommerce-913ce.appspot.com",
  messagingSenderId: "778740172841",
  appId: "1:778740172841:web:f1004c1591fec9e18af438",
  measurementId: "G-PFYTQ44J88"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =  firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage();

const firestore = firebase.firestore()

export const createUserDocument = async (user) => {
  if (!user)  return;

  const userRef = firestore.doc(`users/${user.uid}`)

  const snapshot = await userRef.get()

  console.log(user.email)

  if (!snapshot.exists) {
    const email = user.email
    const name = user.displayName
    const photo = user.photoURL
    const uid = user.uid

    try {
      userRef.set({
        email,
        name,
        photo,
        uid,
        createdAt: new Date()
      })
    } catch(error) {
      console.log('Error while creating user', error);
    }
  }
}

export { auth, provider, storage };



export default db;