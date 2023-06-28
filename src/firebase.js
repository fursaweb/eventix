import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0PSx__khHGtfw8LR2zGaFLBRAtlCanKU",
  authDomain: "eventix-53526.firebaseapp.com",
  projectId: "eventix-53526",
  storageBucket: "eventix-53526.appspot.com",
  messagingSenderId: "680768902507",
  appId: "1:680768902507:web:429045b3b2e0671e41682e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
