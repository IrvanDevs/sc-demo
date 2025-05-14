  import { initializeApp } from "firebase/app";
  import { getFirestore, collection, addDoc } from "firebase/firestore";
  import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

  const firebaseConfig = {
    apiKey: "AIzaSyAsopVv4slydQGSN2ET3GlWhvxizflsdYY",
    authDomain: "sc-contact.firebaseapp.com",
    projectId: "sc-contact",
    storageBucket: "sc-contact.firebasestorage.app",
    messagingSenderId: "652879177906",
    appId: "1:652879177906:web:111aa1986a39e5fc3441ab",
    measurementId: "G-7FZLC6CZZZ"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider("6LfizQArAAAAAKN8h5UaUPTGuL53_7VEMONoUrim"),
    isTokenAutoRefreshEnabled: true,
  });

  export { db, collection, addDoc };