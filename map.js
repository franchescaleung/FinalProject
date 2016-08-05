// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var map;
var infoWindow;
var type = 'food';
var currentLocation;

window.onload = function(){
  initMap();

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
    for (var i = 0; i < results.length; i++) {
      // console.log('ref: ', results[i].photos.photo_reference);
      // console.log('html: ', results[i].photos.html_attributions);
      console.log(results[i].photos[0]);
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