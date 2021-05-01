// Add console.log to check to see if our code is working.
console.log("working");


// Add a Map Object

// Change the center of the map to SFO and change the zoom to 5 so that we can see the line.
// let map = L.map('mapid').setView([30, 30], 2);

// Map a Single Line

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     // Add two more airport stops: Salt Lake City International Airport(SLC) and Seattle-Tacoma International Airport(SEA).
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ];


// Map a GeoJSON Point

// Add single point on our map using GeoJSON data. The following is a FeatureCollection object that has properties & geometry for the San Francisco Airport.

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
//             // The coordinates appear in reverse order in the setView() method because the GeoJSON data coordinates are set with the first parameter as X (longitude) and the second parameter as Y (latitude), as documented in the GeoJSON Standard. The L.geoJSON() layer reverses the coordinates to plot them on the map.
// ]};


// GeoJSON Layer

// GeoJSON objects are added to the map through a GeoJSON layer, L.geoJSON. In "The GeoJSON Layer" section, it says to create the GeoJSON layer and add it to our map. 

//Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);


// Bind a Popup to the Marker

// Options to add data to a marker are to use the 'pointToLayer' or 'onEachFeature' callback functions. With either of these functions, we can add data to a map from each GeoJSON object. The major difference between the 2 functions is that the 'pointToLayer' callback function adds markers to a map, whereas the 'onEachFeature' callback function allows you to add styling and bind data to a popup marker. 

// The pointToLayer Function

// EX: 
// L.geoJson(data, {
//     pointToLayer: function(feature, latlng) {
//       return L.marker(latlng);
//      }
// });

// Create a circle marker instead of a marker on the map?
    //Use 'circleMarker()'

// Add a marker using the 'pointToLayer' function and add data to a popup marker.

// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng);
//     }

//   }).addTo(map);


// Popup Marker

// Add the data in the JS objects to a popup marker. 
    // 'bindPopUp()'

// To add a popup marker, we need to use the 'bindPopup() method to the 'pointToLayer' callback function. This will add a popup marker for each object in our GeoJSON data even though we only have one object in our data, SFO.

// Let's add the city popup marker (line 100)  
    //(edit lines 74-80)

// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.city + "</h2>");

//     }

//   }).addTo(map);


// The onEachFeature Function

// When using the 'onEachFeature' callback function we can add a popup marker for each feature and add from the properties of the JS object.

//Ex:
// L.geoJson(data, {
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup();
//      }
// });

// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup();

//     }

//   }).addTo(map);




// Create a line on a map using the polyline() function.In the polyline() function, pass the line coordinates and the key-value pair color:"red" to make the line red. 

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     //color: "red"
//     // make the line yellow by editing the value for the "color" key.
//     color: "yellow"
//   }).addTo(map);


// City Variable referencing the 5 most populous cities array 

// An array containing each city's location, state, and population.
// let cities = [{,,,,}];

// Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//    });

// Title Layer

// Change the map style to "satellite-streets-v11."

// Create the tile layer that will be the background of the map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// let street = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
  };

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/torontoRoutes.json";

// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data).addTo(map);
// });

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
      style: myStyle,
      onEachFeature: function(feature, layer) {
          layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination:"
          + feature.properties.dst + "</h3>");
      }
  }).addTo(map);
});
