var map;
var arrPois = [];

function mapInit() {
  var mapSettings = {
    center: new google.maps.LatLng(43.65432, -79.38347),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

 map = new google.maps.Map(document.getElementById("map"), mapSettings);

 google.maps.event.addListener(map, "click", (poi) => {
        var location = poi.latLng;

        var marker = new google.maps.Marker({
          position: location,
          map: map
        });

        google.maps.event.addListener(marker, "click", (event) => {
          var newInfo = new google.maps.InfoWindow({
            content:
              '<form class="form-container">' +
              '<p>Title</p>' +
              '<input type="text" name="title" placeholder="Name your hotspot">' +
              '<p>Description</p>' +
              '<input type="text" name="desc" placeholder="Enter a Description">' +
              '<input name="lat" type="hidden" value="'+ location.lat() + '"/>' +
              '<input name="lng" type="hidden" value="'+ location.lng() + '"/>' +
              '<p><button type="submit">Create</button></p>' +
              '</form>'
          });

        newInfo.open(map, marker);

        google.maps.event.addListener(newInfo, () =>{

          $(".form-container").on("submit", (e) => {
            e.preventDefault();
            var poiData = $(this).serializeArray();
            var newPoi = {
              lat: poiData[2].value,
              lng: poiData[3].value,
              title: poiData[0].value,
              desc: poiData[1].value
            };
            arrPois.push(newPoi);
            console.log(arrPois);
            newInfo.close();
          });
        });
        });
      });

}

$(()=> {

})
