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
              '<button type="submit">Create</button>' +
              '</form>'
          });

        newInfo.open(map, marker);

        google.maps.event.addListener(newInfo, 'domready', function() {

          $(".form-container").on("submit", function(e) {
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



$(() => {
  $("#mapInfo").on("submit", function(e)  {
    e.preventDefault();
    var newMapInfo = $(this).serializeArray();
    var lattitude = map.getCenter().lat();
    var longitude = map.getCenter().lng();
    console.log(newMapInfo);
    var newMapData = {
      title: newMapInfo[0].value,
      lattitude: lattitude,
      longitude: longitude
    };
    console.log(newMapData);

    $.ajax({
      url: "/api/maps/new",
      method: "POST",
      data: newMapData
    }).then((res) => {
      arrPois.forEach((poi)=>{
        var mapid = res.id;
        postingPois(poi, mapid);
      })
    });
  });

})

function postingPois(poi, mapid) {
  $.ajax({
    url:"/api/pois/new",
    method: "POST",
    data:{
      lat: poi.lat,
      lng: poi.lng,
      title: poi.title,
      desc: poi.desc,
      map_id: mapid
    }
  }).then(()=> {
    console.log("success")
  })
}
