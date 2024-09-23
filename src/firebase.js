import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCU_F8vkcnk0UX28Tjv5udC-6DEWGdng1Y",
    authDomain: "react-notes-16cb0.firebaseapp.com",
    projectId: "react-notes-16cb0",
    storageBucket: "react-notes-16cb0.appspot.com",
    messagingSenderId: "876881534437",
    appId: "1:876881534437:web:641f6095a6d72361eba30c"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
