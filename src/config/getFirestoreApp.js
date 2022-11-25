import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC1DQsfMF374TwfoMBNVwQ_mOxELqwUlMw",
    authDomain: "laguna-lexica.firebaseapp.com",
    projectId: "laguna-lexica",
    storageBucket: "laguna-lexica.appspot.com",
    messagingSenderId: "653422549478",
    appId: "1:653422549478:web:2727dc9662c37fdcf35e27"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}