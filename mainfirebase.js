var user;

var config = {
    apiKey: "AIzaSyA7lvHXWbDmIaPN1GEzaFH1e_qpQzMvRug",
    authDomain: "goventure-a3dc4.firebaseapp.com",
    databaseURL: "https://goventure-a3dc4.firebaseio.com",
    storageBucket: "goventure-a3dc4.appspot.com"
};
var uiConfig = {
    'signInSuccessUrl': 'GO.html',
    'signInOptions': [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

firebase.initializeApp(config);


window.onload = function(){
    firebaseInit();
}


function firebaseInit() {
    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) { // User is signed in.
            user = user;
            console.log(user);
            user.getToken().then(function(accessToken) {
                console.log('signed in');
            });
        } else { // User is signed out.
            user = null;
            console.log('signed out');
        }
    }, function(error) {
        console.log(error);
    });
};

function googleSignout() {
    // sign out 
   firebase.auth().signOut()
   // redirect to login page

   //  tell me in console if it worked
   .then(function() {
        window.location = "login.html";
        console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}