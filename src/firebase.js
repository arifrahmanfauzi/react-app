import {initializeApp} from "firebase/app";
import {getMessaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {

    apiKey: "AIzaSyAnUxChichvkUKKzLaCbZe2lmv77TJ041o",

    authDomain: "superkul-v2.firebaseapp.com",

    projectId: "superkul-v2",

    storageBucket: "superkul-v2.appspot.com",

    messagingSenderId: "408897613208",

    appId: "1:408897613208:web:a6701106c4d54af7130fed",

    measurementId: "G-VH3NB2531H"

};

initializeApp(firebaseConfig)

const messaging = getMessaging();


export const requestForToken = (token) => {
    return getToken(messaging, { vapidKey: process.env.REACT_APP_VAPID_KEY })
        .then((currentToken) => {
            if (currentToken) {
                console.log('current token for client: ', currentToken);
                token(currentToken)
                // Perform any other neccessary action with the token
            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log("payload", payload)
            resolve(payload);
        });
    });