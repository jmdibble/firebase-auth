import app from 'firebase/app';

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
    }
    randomFunction = () => console.log("works");
    
  }
  
  export default Firebase;