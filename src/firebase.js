import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwL2jyqkRYiA6TkxAWlL2QtpsyBrfoBAM",
  authDomain: "test-noname-digital-crm.firebaseapp.com",
  projectId: "test-noname-digital-crm",
  storageBucket: "test-noname-digital-crm.appspot.com",
  messagingSenderId: "584676291900",
  appId: "1:584676291900:web:ef9651f4bcd6b356571a39"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;