window.onload = function(){
	firebase.initializeApp(config);
    window.setTimeout(setProfileInfo, 500);
}

// console.log(firebase.auth().currentUser.displayName);

function setProfileInfo(){
	document.getElementById("nameui").innerHTML = firebase.auth().currentUser.displayName;
    document.getElementById("email").innerHTML = firebase.auth().currentUser.email;
    // document.getElementById("profilepic").innerHTML = firebase.auth().currentUser.photoURL; 
}