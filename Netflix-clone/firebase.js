// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBF1ox4G6DRLpWrq-YCGNEYWN7LgAG9Q0U",
  authDomain: "netflix-clone-336ea.firebaseapp.com",
  projectId: "netflix-clone-336ea",
  storageBucket: "netflix-clone-336ea.firebasestorage.app",
  messagingSenderId: "755480863529",
  appId: "1:755480863529:web:e840633b35631d29dbcd38",
  measurementId: "G-Y4GMDL5H2X"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name, email, password)=> {
   try{
   const res = await createUserWithEmailAndPassword(auth, email, password);
   const user = res.user; 
   await addDoc(collection(db, "user"),{
    uid: user.uid,
    name,
    authProvider:"local",
    email,
   });
  } catch (error){
     console.log(error);
   }
}

const login = async (email, password)=> {
  try{
    await signInWithEmailAndPassword(auth, email, password);
  }
   catch(error){
    console.log(error);
    alert(error);
   }
}

const logout = ()=> {
  signOut(auth);
}

export {auth, db, login, signup, logout};