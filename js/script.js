var locations = [
  {lat: 43.7433, lng: -101.9484},
  {lat: 43.7527996, lng: -101.9473715},
  {lat: 43.7263971, lng: -101.9933172},
  {lat: 42.9404219, lng: -103.592162},
  {lat: 42.8576672, lng: -103.5861046},
  {lat: 43.9927778, lng: -102.2438554},
  {lat: 43.8919857, lng: -103.5964501},
  {lat: 43.5683355, lng: -103.4976503},
  {lat: 43.8791025, lng: -103.4612554},
  {lat: 43.7586383, lng: -103.4401333},
  {lat: 43.9753738, lng: -103.2990829},
  {lat: 37.8089797, lng: -122.4124823},
  {lat: 37.8199286, lng: -122.4804438},
  {lat: 38.2228469, lng: -122.4622922},
  {lat: 38.2511732, lng: -122.3492724},
  {lat: 38.610975, lng: -122.8899415},
  {lat: 38.1740642, lng: -122.4527422},
  {lat: 38.488982, lng: -122.450328}
];

var longNames = [
  'Badlands Campground',
  'Notch Trail',
  'Interior, S.D.',
  'Ogala National Grassland',
  'Toadstool Geological Park',
  'Wall Drug, Wall, S.D.',
  'Rafter J Bar Ranch',
  'Wind Cave National Park',
  'Mount Rushmore National Memorial',
  'Custer State Park',
  'Bear Country, USA',
  'Fog Harbor Fish House',
  'Golden Gate Bridge',
  'Sonoma House',
  'Cuvaison',
  'The Flight Deck',
  'Rams Gate',
  'V. Sattui'
];

var redshirt = {lat: 41.2227041, lng: -112.0427138};
var map;
var camper = 'images/camper.png';
var house = 'images/house.png';
var wine = 'images/winebottle.png';
var markers = [];

function initMap() {
  map = new google.maps.Map(
    document.getElementById('map'), {
    center: redshirt,
    zoom: 6,
    scaleControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  });

  clearMarkers();
  for (var i = 0; i < locations.length; i++) {
    addMarkerWithTimeout(locations[i], longNames[i], i * 200);
  }

  function addMarkerWithTimeout(position, name, timeout) {
    window.setTimeout(function() {
      if (name === 'Badlands Campground' || name === 'Rafter J Bar Ranch') {
        markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon: camper,
        title: name
        }))}
      else if (name === 'Sonoma House') {
        markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon: house,
        title: name
      }))}
      else if (name === 'Cuvaison' || name === 'The Flight Deck' || name === 'Rams Gate' || name === 'V. Sattui') {
        markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: wine,
        title: name
      }))}  
      else {
        markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP,
        title: name
      }))}
    }, timeout);
  }

  function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }

}