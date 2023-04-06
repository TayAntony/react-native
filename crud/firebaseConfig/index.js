
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signInWithEmailAndPassword, signOut, getAuth} from "firebase/auth";
import {getFirestore, query, getDocs, collection, where, addDocs} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKrDXLPePogkr-f5zl4S80SKRy426i-rE",
  authDomain: "todo-bank-a9022.firebaseapp.com",
  projectId: "todo-bank-a9022",
  storageBucket: "todo-bank-a9022.appspot.com",
  messagingSenderId: "474114493133",
  appId: "1:474114493133:web:e55431588303d741db3784",
  measurementId: "G-7ZZFRDF252"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app)
const logout = () => {signOut(auth)}


export {
  app, auth, db, storage, logout
} 