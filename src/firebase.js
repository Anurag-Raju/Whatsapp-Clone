import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBvl8ycci4VHXRcqYiwenGP4Aj39ZPnneg",
  authDomain: "whatsapp-clone-2b32d.firebaseapp.com",
  projectId: "whatsapp-clone-2b32d",
  storageBucket: "whatsapp-clone-2b32d.appspot.com",
  messagingSenderId: "941493311094",
  appId: "1:941493311094:web:4ae3da1ad3563c050df157",
  measurementId: "G-VJH3C6D9FC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
