// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: NEXT_PUBLIC_API_KEY,
    authDomain: NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: NEXT_PUBLIC_PROJECT_ID,
    storageBucket: NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: NEXT_PUBLIC_MESSAGE_SENDER_ID,
    appId: NEXT_PUBLIC_APP_ID,
    measurementId: NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);