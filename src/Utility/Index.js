// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC75FqmEO1TL20OZtxsXpi9oGkYFNdAgys",
  authDomain: "influencermarketingbuddy.firebaseapp.com",
  projectId: "influencermarketingbuddy",
  storageBucket: "influencermarketingbuddy.appspot.com",
  messagingSenderId: "748441118775",
  appId: "1:748441118775:web:7f770eabd724ec907277b2",
  measurementId: "G-RHBB2DGG08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





export {analytics}