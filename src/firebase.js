import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCUo1ekC7go6lADfHzpUcTLqr1HGBx8wK0",
    authDomain: "fir-4ddd0.firebaseapp.com",
    projectId: "fir-4ddd0",
    storageBucket: "fir-4ddd0.appspot.com",
    messagingSenderId: "133990517125",
    appId: "1:133990517125:web:9054510c5c2a90f5fd1cec"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
