<<<<<<< HEAD
var user;

var config = {
	apiKey: "AIzaSyCn2FV22kKw7qT7V78tuaG9KiUVV9ilMD4",
	authDomain: "goventure-a3dc4.firebaseapp.com",
	databaseURL: "https://goventure-a3dc4.firebaseio.com",
	storageBucket: ""
};

var uiConfig = {
	'signInSuccessUrl': 'go.html',
	'signInOptions': [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

window.onload = function(){
    firebaseInit();
    // $('#logout').on('click', firebase.auth().signOut())
}


function firebaseInit() {
	firebase.initializeApp(config);

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
			// window.location = "Login_Page_GO.html";
			// redirect to login page;
		}
	}, function(error) {
	 	console.log(error);
	});
};

function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 44.540, lng: -78.546},
        zoom: 8
    });
}
=======
>>>>>>> 9e5c68ec7ba6ad976cbdbe0955652a1a674267eb
