// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var config = {
    apiKey: "AIzaSyDTm_j8dbGiGrxfyXsFoxSqLmnn23_udOM",
    authDomain: "goventure-a3dc4.firebaseapp.com",
    databaseURL: "https://goventure-a3dc4.firebaseio.com",
    storageBucket: "goventure-a3dc4.appspot.com"
};
// goventure-a3dc4.appspot.com
var map;
var infoWindow;
var type = 'food';
var currentLocation;

window.onload = function(){
  window.setTimeout(initMap, 500);
  // initMap();

var url = "https://goventure-a3dc4.firebaseio.com/places";
var firebaseRef = new Firebase(url);



function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: currentLocation,
    zoom: 15
  });
  infoWindow = new google.maps.InfoWindow();
  getCurrentLocation();
}

function getPlacesNearby(){
  // var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + currentLocation.lat + ',' + currentLocation.lng + '&radius=500&type='+type+'&key=AIzaSyDTm_j8dbGiGrxfyXsFoxSqLmnn23_udOM';
  var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&key=AIzaSyDTm_j8dbGiGrxfyXsFoxSqLmnn23_udOM'

  var server = 'http://localhost:3001/?url='+ encodeURIComponent(url);

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      onPlacesSuccess(JSON.parse(request.response).results);
    }
  }
  request.open('GET', server);
  request.send();
}

function onPlacesSuccess(results) {
    console.log(results);
    for (var i = 0; i < results.length; i++) {
      var ref = results[i].photos[0].photo_reference;
      getPhoto(ref);
      

      console.log(results[i].name);


      createMarker(results[i]);

      document.getElementsByClassName("image").src = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + ref+ '&key=AIzaSyDTm_j8dbGiGrxfyXsFoxSqLmnn23_udOM'
      
      document.getElementById("first").innerHTML = results[0].name
      document.getElementById("second").innerHTML = results[1].name
      document.getElementById("third").innerHTML = results[2].name
      document.getElementById("fourth").innerHTML = results[3].name
      document.getElementById("fifth").innerHTML = results[4].name
      document.getElementById("sixth").innerHTML = results[5].name
      var submit = document.getElementsByTagName('button')[0];
      submit.onclick = writeUserData;

      // var icon = results[0].photos.getUrl({maxWidth: 35, maxHeight: 35});
      // console.log(icon);

    }
}

function getPhoto(ref) {
  var url = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + ref+ '&key=AIzaSyDTm_j8dbGiGrxfyXsFoxSqLmnn23_udOM'

  var server = 'http://localhost:3001/?url='+ encodeURIComponent(url);

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      debugger;
    }
  }
  request.open('GET', server);
  request.send();
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.setContent(place.name);
    infoWindow.open(map, this);
  });
}
   
function getCurrentLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onPositionSuccess, function(error) {
      console.log(error.message);
      handleLocationError(true);
    });
  } else {
    handleLocationError();
  }
}
function handleLocationError(browserHasGeolocation) {
    if (browserHasGeolocation){
      console.log('Error: The Geolocation service failed.');
    } else {
      console.log('Browser doesnt support Geolocation');
    }
}
function onPositionSuccess(position) {
  currentLocation = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
  console.log(currentLocation)
  var infoWindow = new google.maps.InfoWindow({map: map});
  infoWindow.setPosition(currentLocation);
  infoWindow.setContent('Location found.');
  map.setCenter(currentLocation);
  getPlacesNearby();
  
}
}

// $('#nature').click(function() {
//   type = 'park';
// });
// $('#shopping').click(function() {
//   type = 'shopping_mall';
// });
// $('#food').click(function() {
//   type = 'food';
// });
// $('#popularattractions').click(function() {
//   type = 'food';
// $('#museums').click(function() {
//   type = 'museum';
// });
// $('#all').click(function() {
//   type = 'point_of_interest';
// });

function writeUserData(evt){
  var place = results[0].name

  firebaseRef.set({places: place});
  evt.preventDefault();
}

