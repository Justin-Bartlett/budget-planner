import { initializeApp} from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
// import 'firebase/auth'
// import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDRVoaHgaAe-7ig1M2YXMUk2htUyD_GrMs",
    authDomain: "budget-planner-4a58b.firebaseapp.com",
    projectId: "budget-planner-4a58b",
    storageBucket: "budget-planner-4a58b.appspot.com",
    messagingSenderId: "856990759019",
    appId: "1:856990759019:web:2de36344feef2cc366192e"
  }

  // init firebase
  const app = initializeApp(firebaseConfig)

  // init services
  const projectFirestore = getFirestore(app)

  export { projectFirestore }