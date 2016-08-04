var name;

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : ()
  });
}
window.onload = function(){
	writeUserData();
}