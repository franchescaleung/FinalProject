  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtZ8bhfjefEi-k8SvEKqtfb1oqlqx3TZ8",
    authDomain: "final-project-fl-mm-lo.firebaseapp.com",
    databaseURL: "https://final-project-fl-mm-lo.firebaseio.com",
    storageBucket: "final-project-fl-mm-lo.appspot.com",
  };
  firebase.initializeApp(config);

    // FirebaseUI config.
  var uiConfig = {
    'signInSuccessUrl': 'Go.html',
    'signInOptions': [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    'tosUrl': 'terms.html',
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);