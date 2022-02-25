var firebaseConfig = {
    apiKey: "AIzaSyBPSOM0E5nZWP8--IeSzAykHcqX1tfnPuM",
    authDomain: "to-do-app-205b6.firebaseapp.com",
    databaseURL: "https://to-do-app-205b6-default-rtdb.firebaseio.com",
    projectId: "to-do-app-205b6",
    storageBucket: "to-do-app-205b6.appspot.com",
    messagingSenderId: "685018042913",
    appId: "1:685018042913:web:f79be2385e9bcc28840960",
    measurementId: "G-ZXSRG85KWR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();