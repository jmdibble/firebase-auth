import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAiANI0Y-EzvguAb0taCGFU30c6jNa2J4k",
    authDomain: "fire-auth-react-jdtest.firebaseapp.com",
    databaseURL: "https://fire-auth-react-jdtest.firebaseio.com",
    projectId: "fire-auth-react-jdtest",
    storageBucket: "fire-auth-react-jdtest.appspot.com",
    messagingSenderId: "83055801654"
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
