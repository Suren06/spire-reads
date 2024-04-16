import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "spire-reads.firebaseapp.com",
  projectId: "spire-reads",
  storageBucket: "spire-reads.appspot.com",
  messagingSenderId: "426791499455",
  appId: "1:426791499455:web:db3c916ad03949e5a5780a",
};

export const app = initializeApp(firebaseConfig);
