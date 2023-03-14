// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBgbblfOY0OHj2fQ10a2qSblY4YzysK700',
//   authDomain: 'fir-8-auth.firebaseapp.com',
//   projectId: 'fir-8-auth',
//   storageBucket: 'fir-8-auth.appspot.com',
//   messagingSenderId: '579456116798',
//   appId: '1:579456116798:web:c09989c347b1618f1f896f',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

//

// // Import the functions you need from the SDKs you need
// import * as firebase from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBgbblfOY0OHj2fQ10a2qSblY4YzysK700',
//   authDomain: 'fir-8-auth.firebaseapp.com',
//   projectId: 'fir-8-auth',
//   storageBucket: 'fir-8-auth.appspot.com',
//   messagingSenderId: '579456116798',
//   appId: '1:579456116798:web:c09989c347b1618f1f896f',
// };

// // Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app;
// }
// const auth = firebase.auth();

// export { auth };

//

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBgbblfOY0OHj2fQ10a2qSblY4YzysK700',
  authDomain: 'fir-8-auth.firebaseapp.com',
  projectId: 'fir-8-auth',
  storageBucket: 'fir-8-auth.appspot.com',
  messagingSenderId: '579456116798',
  appId: '1:579456116798:web:c09989c347b1618f1f896f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
