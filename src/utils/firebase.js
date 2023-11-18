// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'next-blog-8fc79.firebaseapp.com',
  projectId: 'next-blog-8fc79',
  storageBucket: 'next-blog-8fc79.appspot.com',
  messagingSenderId: '510800762568',
  appId: '1:510800762568:web:c892afd13432b9140537fd',
  measurementId: 'G-CGK59J396V',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
