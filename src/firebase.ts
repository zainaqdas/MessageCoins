import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDhOTRUgW3v011NaoX_fyGaJ8hMFo7p4P4",
  authDomain: "telegramminiapp-541d7.firebaseapp.com",
  projectId: "telegramminiapp-541d7",
  storageBucket: "telegramminiapp-541d7.firebasestorage.app",
  messagingSenderId: "761811391019",
  appId: "1:761811391019:web:2e6e73277d6729951f106e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);