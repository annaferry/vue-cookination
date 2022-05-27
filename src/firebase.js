import { initializeApp } from "firebase/app";

// use your config info here:
const firebaseConfig = {
	apiKey: "AIzaSyADF88kjpQ6nSKPueN9LfnWNoBJJt1OPXU",
	authDomain: "cookination-105bd.firebaseapp.com",
	projectId: "cookination-105bd",
	storageBucket: "cookination-105bd.appspot.com",
	messagingSenderId: "608832040335",
	appId: "1:608832040335:web:fb14393c0117d2071eeffa"
};

export const app = initializeApp(firebaseConfig);

