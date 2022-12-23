// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Uq-sCHvkfVPWiMDBNgHddtCUb7VLCs4",
  authDomain: "complaintsw2p.firebaseapp.com",
  databaseURL: "https://complaintsw2p-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "complaintsw2p",
  storageBucket: "complaintsw2p.appspot.com",
  messagingSenderId: "287022381092",
  appId: "1:287022381092:web:f7c34b8b9283512e5c00b1",
  measurementId: "G-6ZGHG2SB3Y"
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

