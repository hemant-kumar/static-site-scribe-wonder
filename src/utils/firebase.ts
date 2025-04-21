
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration - these are public keys, so it's safe to include them in client code
const firebaseConfig = {
  apiKey: "AIzaSyBULESdODM3YjXsvzLc9L-a4JKaQkM1Xdc",
  authDomain: "techchatterbox-demo.firebaseapp.com",
  projectId: "techchatterbox-demo",
  storageBucket: "techchatterbox-demo.appspot.com",
  messagingSenderId: "907168040916",
  appId: "1:907168040916:web:12a51814020388432fa108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);

// Export the app instance for other Firebase services
export default app;
