import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
  apiKey: "AIzaSyDc4_pAPEUrvvKkel_cqL6-VibEcXUzR0k",
  authDomain: "running-buddies-jdbs.firebaseapp.com",
  databaseURL: "https://running-buddies-jdbs.firebaseio.com",
  projectId: "running-buddies-jdbs",
  storageBucket: "running-buddies-jdbs.appspot.com",
  messagingSenderId: "76264977302"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // AUTH API

  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // USER API

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

}


export default Firebase;