// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: 'AIzaSyCWIVAJpJBB-FI-FmTFmuSyUtBCmBFNQyE',
//     authDomain: 'otp-test-77523.firebaseapp.com',
//     projectId: 'otp-test-77523',
//     storageBucket: 'otp-test-77523.appspot.com',
//     messagingSenderId: '294866841676',
//     appId: '1:294866841676:web:0105b3db806e4cec6844e9',
// };

const firebaseConfig = {
    apiKey: 'AIzaSyCUE2muTrmDnFuAbqWK_fqX26D80nqPtkE',
    authDomain: 'otp-test2.firebaseapp.com',
    projectId: 'otp-test2',
    storageBucket: 'otp-test2.appspot.com',
    messagingSenderId: '382101218860',
    appId: '1:382101218860:web:0ed99040e58e9618cd5389',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
