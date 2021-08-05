import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAq5GA7J3p_5yDCiW-qhM89rrIyyrK4u28",
    authDomain: "basketball-app-f0532.firebaseapp.com",
    projectId: "basketball-app-f0532",
    storageBucket: "basketball-app-f0532.appspot.com",
    messagingSenderId: "671852598393",
    appId: "1:671852598393:web:66791c16a65a7b4f6f70a8",
    measurementId: "G-LYF21BP0L3"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;