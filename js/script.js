function init(){
	var el = document.getElementById('map');
	var myLocation = new google.maps.LatLng(41.880858, -87.674069);
	var mapOptions = {
		center: myLocation,
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		icon: 'images/chicago-teams.jpg'
	});

	var contentString = '<h1>The United Center</h1><p>is home to the 6-time champions, the Chicago Bulls and the Chicago Blackhawks .</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});
}

google.maps.event.addDomListener(window, 'load', init);