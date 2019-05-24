function mapInit() {
  var mapSettings = {
    center: new google.maps.LatLng(43.65432, -79.38347),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map"), mapSettings);
}

var map;

function makeMap(mapRes){

  var marker;
  for (var i = 0; i < mapRes.arrPois.length; i++){
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(mapRes.arrPois[i].lattitude, mapRes.arrPois[i].longitude),
      map: map
    });


    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        var infowindow = new google.maps.InfoWindow();
        infowindow.setContent(
          "<p>Title: " + mapRes.arrPois[i].title + "</p>"
          + "<p>Description: " + mapRes.arrPois[i].desc + "</p>")
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

$(() => {
  var url = window.location.pathname;
   var id = url.substring(url.lastIndexOf('/') + 1;

  $.ajax({
    method: "GET",
    url: "/data/" + id
  }).done((map) => {
    makeMap(map);
  });;


})