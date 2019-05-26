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
    url: "/api/maps"
  }).done((maps) => {
    for(let map of maps) {
      let newMap = $("#mapslist").dropdown().append(`
        <li><a href="/maps/${map.id}" class='showmap'>${map.title}</a>
        <img class=fav-icon src="/images/heart.png" </li>
        `);
      // if(map.user_id === req.session.user_id) {
      let myMap = $("#myMaps").dropdown().append(`<li><a href="/maps/${map.id}" class='showmap'>${map.title}</a></li>`);
      // }
    }
  });;
});