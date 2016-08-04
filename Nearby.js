// PLACE SEARCH
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=AIzaSyCn2FV22kKw7qT7V78tuaG9KiUVV9ilMD4

// PLACE PHOTO
// https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyCn2FV22kKw7qT7V78tuaG9KiUVV9ilMD4

// PLACE DETAILS
// https://maps.googleapis.com/maps/api/place/details/json?reference=CmRYAAAAciqGsTRX1mXRvuXSH2ErwW-jCINE1aLiwP64MCWDN5vkXvXoQGPKldMfmdGyqWSpm7BEYCgDm-iv7Kc2PF7QA7brMAwBbAcqMr5i1f4PwTpaovIZjysCEZTry8Ez30wpEhCNCXpynextCld2EBsDkRKsGhSLayuRyFsex6JA6NPh9dyupoTH3g&key=AIzaSyCn2FV22kKw7qT7V78tuaG9KiUVV9ilMD4

var latitude = -33.8670522;
var longitude = 151.1957362;
var type = restaurant;
var name = cruise;

$.ajax({
  dataType: 'json',
  url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=latitude,longitude&radius=500&type=type&name=name&key=AIzaSyCn2FV22kKw7qT7V78tuaG9KiUVV9ilMD4',
  success: function(data)
});

var photoreference = data.results.photos.photo_reference;

