import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAOcp4Th_vAKtHMJenzV-x9FHxHIMu8OdA",
  authDomain: "teamcquiz.firebaseio.com",
  databaseURL: "https://teamcquiz.firebaseio.com/",
  projectId: "teamcquiz",
  storageBucket: "",
  messagingSenderId: "440477521828"
};
firebase.initializeApp(config);
export default firebase;