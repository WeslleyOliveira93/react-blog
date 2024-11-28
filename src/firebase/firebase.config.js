import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAlZFKM3yNDAo9d90UGTp5sd3XL-_LMUKo",
  authDomain: "react-blog-de69b.firebaseapp.com",
  projectId: "react-blog-de69b",
  storageBucket: "react-blog-de69b.firebasestorage.app",
  messagingSenderId: "914118673912",
  appId: "1:914118673912:web:82943845bb1f8ece90c20d"
};

const app = initializeApp(firebaseConfig);

export default app;