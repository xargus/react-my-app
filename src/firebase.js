import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

initializeApp({
    apiKey: "AIzaSyCeN6h4DmJDrKaqH-2UfPo-6SpHqy_hpg8",
    authDomain: "dev-my-app.firebaseapp.com",
    projectId: "dev-my-app",
    storageBucket: "dev-my-app.appspot.com",
    messagingSenderId: "861271492725",
    appId: "1:861271492725:web:7c97cc3ca785b651cc903c",
    measurementId: "G-430B1V6PF2"
});

const firestore = getFirestore();
export { firestore };