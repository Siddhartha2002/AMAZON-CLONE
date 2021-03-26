import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-2gRawbsdSZu3MWbLUp3CUNMpXLyvM5M",
  authDomain: "clone-e4344.firebaseapp.com",
  projectId: "clone-e4344",
  storageBucket: "clone-e4344.appspot.com",
  messagingSenderId: "972366364306",
  appId: "1:972366364306:web:d221cbe2241a941352304b",
  measurementId: "G-R086XGKV97",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
