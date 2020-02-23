import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyD0y62iHduNcNVHmu2b00AJmYiADmx8C6E",
	authDomain: "crwn-clothing-db-7199a.firebaseapp.com",
	databaseURL: "https://crwn-clothing-db-7199a.firebaseio.com",
	projectId: "crwn-clothing-db-7199a",
	storageBucket: "crwn-clothing-db-7199a.appspot.com",
	messagingSenderId: "797947817017",
	appId: "1:797947817017:web:4a995c1fd34162ff6af1e8",
	measurementId: "G-JHJ3LVDWB3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
