// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, getDocs, addDoc} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

// Initialize Firebase


export async function getComplaints()
{
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const complaintsCol = collection(db,'complaints');
  const complaintsSnapshot = await getDocs(complaintsCol);
  const complaintsList = complaintsSnapshot.docs.map(doc => doc.data());
  return complaintsList;
}

export async function addComplaint({toilet,complaint,email}){
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const collectionRef = collection(db,"complaints")
  const payload = {
    complaint,
    email,
    toilet
  };
  await addDoc(collectionRef, payload);
}

