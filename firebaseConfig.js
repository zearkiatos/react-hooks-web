import { initializeApp } from "firebase/app";
import config from "./src/config";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: config.FIREBASE.API_KEY,
  authDomain: config.FIREBASE.AUTH_DOMAIN,
  projectId: config.FIREBASE.PROJECT_ID,
  storageBucket: config.FIREBASE.STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE.MESSAGING_SENDER_ID,
  appId: config.FIREBASE.APP_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);
