import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZBtmZcVf4_wClanGKpxJIrLV_HUfvbjg",
    authDomain: "timezone-d576a.firebaseapp.com",
    projectId: "timezone-d576a",
    storageBucket: "timezone-d576a.appspot.com",
    messagingSenderId: "522641366815",
    appId: "1:522641366815:web:c2c42ddab16a7cc65c9a2a"
  };

firebase.initializeApp(firebaseConfig)

export default firebase.database();