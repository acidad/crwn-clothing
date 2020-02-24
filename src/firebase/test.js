import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

// NOTE: 2 ways of retrieving items from firebase/firestore
// NOTE: WAY ONE
firestore
	.collection("users")
	.doc("LuYWSgv62SjuaIeOfYka")
	.collection("cartItems")
	.doc("kTLWh1YpHLBzVKWnI9qT");

// NOTE: WAY TWO
firestore.doc("/users/LuYWSgv62SjuaIeOfYka/cartItems/kTLWh1YpHLBzVKWnI9qT");
