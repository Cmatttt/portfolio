import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration
    apiKey: "AIzaSyD6D0u-sMc8OVY5Ftn9hFW6pEftN9FYgnY",
    authDomain: "portfolio-contact-1a593.firebaseapp.com",
    databaseURL: "https://portfolio-contact-1a593-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-1a593",
    storageBucket: "portfolio-contact-1a593.appspot.com",
    messagingSenderId: "87134107753",
    appId: "1:87134107753:web:31f1892744d1103d0e0af8"
});

var database = firebase.firestore();

export { database };