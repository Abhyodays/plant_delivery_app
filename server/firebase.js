const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyCM8cGDzC0X69zhz0AKAQAVfdCZftPS0U4",
    authDomain: "plant-delivery-edf82.firebaseapp.com",
    projectId: "plant-delivery-edf82",
    storageBucket: "plant-delivery-edf82.firebasestorage.app",
    messagingSenderId: "854456367",
    appId: "1:854456367:web:6950f8add92cda79072eda",
    measurementId: "G-D0BFKLFNRR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = { app, auth };
