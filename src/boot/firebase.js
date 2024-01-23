// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAx3GDnrRkx0M9YNOFu3W_-YzoA3Jk2Pzk',
  authDomain: 'e-commerce-web-project-e4d4f.firebaseapp.com',
  projectId: 'e-commerce-web-project-e4d4f',
  storageBucket: 'e-commerce-web-project-e4d4f.appspot.com',
  messagingSenderId: '969980106030',
  appId: '1:969980106030:web:d0d5e9941bfaf7c2ddd6bf',
  measurementId: 'G-70FRQYH6CQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
