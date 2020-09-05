import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD8zyyBKuSivJDXG639C2e7tueuyCKsRp4",
    authDomain: "slack-clone-75108.firebaseapp.com",
    databaseURL: "https://slack-clone-75108.firebaseio.com",
    projectId: "slack-clone-75108",
    storageBucket: "slack-clone-75108.appspot.com",
    messagingSenderId: "1056947513706",
    appId: "1:1056947513706:web:bf578fcca036a7febcdd13",
    measurementId: "G-Y2NV38D35B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db