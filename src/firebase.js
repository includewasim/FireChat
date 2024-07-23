
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAi8DVfISsDDyH9WApAXzz7pdULMesGwNo",
    authDomain: "fir-chat-app-2ce15.firebaseapp.com",
    projectId: "fir-chat-app-2ce15",
    storageBucket: "fir-chat-app-2ce15.appspot.com",
    messagingSenderId: "293286894407",
    appId: "1:293286894407:web:858df6f3f8c670783fca62"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const storage = getStorage();
export const db= getFirestore();