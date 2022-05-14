// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgD0mNAMYV9JK4eyBvIIxj_D0hD9rruYk',
  authDomain: 'netflix-clone-yt-aaaa1.firebaseapp.com',
  projectId: 'netflix-clone-yt-aaaa1',
  storageBucket: 'netflix-clone-yt-aaaa1.appspot.com',
  messagingSenderId: '995351039525',
  appId: '1:995351039525:web:c9afdc048299f6b9e179cc',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
