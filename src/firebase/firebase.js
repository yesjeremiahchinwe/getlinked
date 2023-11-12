import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDlZIW58YxMmoGJj__dwtIJY40e_pnFxCk",
  authDomain: "getlinked-c8766.firebaseapp.com",
  projectId: "getlinked-c8766",
  storageBucket: "getlinked-c8766.appspot.com",
  messagingSenderId: "235565605987",
  appId: "1:235565605987:web:06b6a03fc6f1d7dd6b0456"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// const auth = getAuth(app);
const store = getFirestore(app);
export { store, app };