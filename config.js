import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBAuZi__tl4Y7ni_S3aUIVwFfi43aufFT0",
	authDomain: "c-71-e-library-----extra.firebaseapp.com",
	projectId: "c-71-e-library-----extra",
	storageBucket: "c-71-e-library-----extra.appspot.com",
	messagingSenderId: "814102538951",
	appId: "1:814102538951:web:169e1b6b43b94e8735ece2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
