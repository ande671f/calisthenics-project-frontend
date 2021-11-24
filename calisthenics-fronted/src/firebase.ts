import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB46gBisxgEnD9m6Wzz3jCYVLLTfeOfbMM",
    authDomain: "calisthenics-odense.firebaseapp.com",
    projectId: "calisthenics-odense",
    storageBucket: "calisthenics-odense.appspot.com",
    messagingSenderId: "511523762313",
    appId: "1:511523762313:web:97163d5bdffcd355b8d658"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialite authenticaion med firebase applikatioen for oven
const auth = getAuth(app);

// exportere til hele programmet
export {auth};
