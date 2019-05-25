var map;
function mapInit() {
  var mapSettings = {
    center: new google.maps.LatLng(43.65432, -79.38347),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
 map = new google.maps.Map(document.getElementById("map"), mapSettings);
}
function makeMap(mapRes){
  var marker;
  for (var i = 0; i < mapRes.arrPois.length; i++){
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(mapRes.arrPois[i].lat, mapRes.arrPois[i].lng),
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
// $(() => {
//    var url = window.location.pathname;
//    var id = url.substring(url.lastIndexOf('/') + 1);
//   $.ajax({
//     method: "GET",
//     url: "/maps/" + id
//   }).done((map) => {
//     makeMap(map);
//   });;
// })
//  $(".gmaps").on('click', ".submit_new_map", function(event) {
//   event.preventDefault();
//   let title = $("input[name='map_title']").val()
//   let description = $("textarea[name='map_description']").val()
//   if(marker){
//     let lat =  Number(marker.getPosition().lat())
//     let long = Number(marker.getPosition().lng())
//   }
//   let data = {
//     title: title,
//     description: description
//     // img_url: img_url,
//     // lat: Number(lat),
//     // long: Number(long),
//   }
//   $.ajax({
//     url:`/maps/new`,
//     type:'POST',
//     data: data,
//     success: function(mapObject) {
//       loadMap(mapObject)
//     }
//   });
//   toggleDescriptions();
// });