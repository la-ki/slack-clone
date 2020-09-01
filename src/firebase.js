import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB1ahyUcTrEKJLx57cq_4SISd1ExK8DDZM",
    authDomain: "slack-clone-3a1bd.firebaseapp.com",
    databaseURL: "https://slack-clone-3a1bd.firebaseio.com",
    projectId: "slack-clone-3a1bd",
    storageBucket: "slack-clone-3a1bd.appspot.com",
    messagingSenderId: "96605318011",
    appId: "1:96605318011:web:a6abc840713cfa24992bde"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};

  export default db;