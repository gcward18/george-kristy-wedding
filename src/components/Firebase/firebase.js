import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };
class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  addAttendant = (name, num_party, attending, notes) => this.db.collection("attendants").set({
    name: name,
    num_party: num_party,
    attending: attending,
    notes: notes,
  }).then(() => {
    window.alert(name, " Successfuly written!");
  }).catch(error => {
    setTimeout(() => {window.alert("Error writing doc: ", error)}, 30000);
  });
  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
}
export default Firebase;