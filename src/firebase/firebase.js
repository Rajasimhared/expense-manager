import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrv_wwerH1OWkjfIejIjddvQkf52WB3sc",
  authDomain: "expense-manager-b9b5d.firebaseapp.com",
  databaseURL: "https://expense-manager-b9b5d.firebaseio.com",
  projectId: "expense-manager-b9b5d",
  storageBucket: "expense-manager-b9b5d.appspot.com",
  messagingSenderId: "989537212881",
  appId: "1:989537212881:web:769b7a7728b3750277e8f0",
  measurementId: "G-7N2J2Q1997",
};
firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
  name: "testing",
});
