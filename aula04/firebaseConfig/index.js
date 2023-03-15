
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

export default app