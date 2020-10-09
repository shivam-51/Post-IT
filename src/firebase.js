import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAEkOnFQQRAHv1WPCsl9Quw7rWIiGPVJA",
  authDomain: "postit-ceacb.firebaseapp.com",
  databaseURL: "https://postit-ceacb.firebaseio.com",
  projectId: "postit-ceacb",
  storageBucket: "postit-ceacb.appspot.com",
  messagingSenderId: "950425640639",
  appId: "1:950425640639:web:4a10c86480ee7441b7f00a"
};

firebase.initializeApp(firebaseConfig);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(
    function(user) {
      if (user) {
        // console.log("User log in success", user);
        func(true, user);
      } else {
        // console.log("User log in failed", user);
        func(false);
      }
    },
    function(error) {
      console.log(error);
    }
  );
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
