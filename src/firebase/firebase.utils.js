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

// NOTE: ALL CRUD on DocumentREF
// NOTE: allows us to take user Auth and store in database
export const createUserProfileDocument = async (userAuth, additionalData) => {
	// Only save to database if user is not Null
	// If null, just return.
	if (!userAuth) return;

	// else
	// QueryReference - Current place in database
	// - returns reference object
	// NOTE: use reference object to save / get data in this location
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	// We get the snapshot Object using .get() on reference object
	// has bool property of exisits
	const snapShot = await userRef.get();

	// if snapshot doesnt exist:
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		// Use documentRef to set // Not Snapshot
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	// we want to return userRef to check if database has been updated
	// in App.js
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
