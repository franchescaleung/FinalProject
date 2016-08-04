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



// ref = new Firebase('goventure-a3dc4.firebaseapp.com');
// email = ref.getAuth().password.email;
// console.log(email);