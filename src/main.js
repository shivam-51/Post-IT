import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import "firebase/auth";

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

const firebaseApp = firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

let apps;

firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  if (!apps) {
    apps = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
