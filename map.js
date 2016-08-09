// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var config = {
    apiKey: "AIzaSyCn2FV22kKw7qT7V78tuaG9KiUVV9ilMD4",
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
  var config = {
      location: currentLocation,
      radius: 1000,
      type: type
  }
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(config, onPlacesSuccess);
  service.nearbySearch(config, PlaceNames);
  // var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=currentLocation&radius=500&type=type&key=AIzaSyCn2FV22kKw7qT7V78tuaG9KiUVV9ilMD4';
  // $.ajax({
  //   url: url,
  //   headers: { 'Access-Control-Allow-Origin': '*' },
  //   crossDomain: true,
  //   method: 'GET',
  //   success: function(){
  //     debugger;
  //     var photoreference = data.results.photos.photo_reference;
  //   }
  // });

  // $.getJSON('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=latitude,longitude&radius=500&type=type&name=name&key=AIzaSyCn2FV22kKw7qT7V78tuaG9KiUVV9ilMD4', function(data) {
  //   //data is the JSON string
  //   debugger;
  // var photoreference = data.results.photos.photo_reference;
// });
  // var service = new google.maps.places.PlacesService(map);
  // service.nearbySearch(config, onPlacesSuccess);
}

function onPlacesSuccess(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    console.log(results);
    for (var i = 0; i < 6; i++) {
      // console.log('ref: ', results[i].photos.photo_reference);
      // console.log('html: ', results[i].photos.html_attributions);

      console.log(results[i].name);

      createMarker(results[i]);

    

    }
  }
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


//Places nearby

// PLACE SEARCH
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=AIzaSyCn2FV22kKw7qT7V78tuaG9KiUVV9ilMD4

// PLACE PHOTO
// https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRfAAAAOm3L00Tsa2WQt_arfTf8BC_SP0F3h2mYdN4X4UtcpyHeENX5t3ewImnBkXZyVZUPZvNYgivOm_YFMqZdqM9qSHnnzztnKM8XexvenDmgr9-D40ZhtoEF76M3Nw2r4-oQEhDq6wTasev_M-Ne3KiJCPzZGhTNuvc45zE_bfm5fKGcnBLqtvcXsg&key=AIzaSyCn2FV22kKw7qT7V78tuaG9KiUVV9ilMD4

// PLACE DETAILS
// https://maps.googleapis.com/maps/api/place/details/json?reference=CmRYAAAAciqGsTRX1mXRvuXSH2ErwW-jCINE1aLiwP64MCWDN5vkXvXoQGPKldMfmdGyqWSpm7BEYCgDm-iv7Kc2PF7QA7brMAwBbAcqMr5i1f4PwTpaovIZjysCEZTry8Ez30wpEhCNCXpynextCld2EBsDkRKsGhSLayuRyFsex6JA6NPh9dyupoTH3g&key=AIzaSyCn2FV22kKw7qT7V78tuaG9KiUVV9ilMD4


function PlaceNames(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    console.log(results);
    for (var i = 0; i < 6; i++) {
          document.getElementById("first").innerHTML = results[0].name
          document.getElementById("second").innerHTML = results[1].name
          document.getElementById("third").innerHTML = results[2].name
          document.getElementById("fourth").innerHTML = results[3].name
          document.getElementById("fifth").innerHTML = results[4].name
          document.getElementById("sixth").innerHTML = results[5].name
    }
  }
}



