// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {

    apiKey: "AIzaSyAnUxChichvkUKKzLaCbZe2lmv77TJ041o",

    authDomain: "superkul-v2.firebaseapp.com",

    projectId: "superkul-v2",

    storageBucket: "superkul-v2.appspot.com",

    messagingSenderId: "408897613208",

    appId: "1:408897613208:web:a6701106c4d54af7130fed",

    measurementId: "G-VH3NB2531H"

};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});


// export const requestForToken = (token) => {
//     return getToken(messaging, { vapidKey: process.env.REACT_APP_VAPID_KEY })
//         .then((currentToken) => {
//             if (currentToken) {
//                 console.log('current token for client: ', currentToken);
//                 token(currentToken)
//                 // Perform any other neccessary action with the token
//             } else {
//                 // Show permission request UI
//                 console.log('No registration token available. Request permission to generate one.');
//             }
//         })
//         .catch((err) => {
//             console.log('An error occurred while retrieving token. ', err);
//         });
// };