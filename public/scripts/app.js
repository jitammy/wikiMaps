$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
  });;
});

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/maps"
  }).done((maps) => {
  });;
});

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/maps",
  }).done((returnData) => {
    for(let map of returnData.results) {
      let newMap = $("#mapslist").dropdown().append(`
        <li><a href="/maps/${map.id}" class='showmap'>${map.title}</a>
        <img class=fav-icon src="/images/heart.png" </li>
        `);
      map.fav_array.forEach(function(fav_id) {
        if (fav_id === returnData.id) {
            let favMap = $("#favMaps").dropdown().append(`<li><a href="/maps/${map.id}" class='my-map'>${map.title}</a></li>`);
        }
      })
    }
  }).done((returnData) => {
    console.log("hi")
    // for(let fav of returnData.results) {
    //   console.log("map id:", fav.user_id)
    //   if (fav.user_id === returnData.id) {
    //     console.log("fav.user_id:", fav.user_id, "returnData.id", returnData.id)
    //     let myMap = $("#myMaps").dropdown().append(`<li><a href="/maps/${fav.id}" class='fav-map'>${fav.title}</a></li>`);
    //     }
    //   }
    })
  }
);
