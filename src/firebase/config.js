import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAdHLJRC1xf5Hkb0SU2DgNEqRXp70ynPTI",
  authDomain: "bossmedia-images.firebaseapp.com",
  projectId: "bossmedia-images",
  storageBucket: "bossmedia-images.firebasestorage.app",
  messagingSenderId: "582494084998",
  appId: "1:582494084998:web:8c3824d204972413a3d607"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { db, collection, addDoc, getDocs, doc, deleteDoc }