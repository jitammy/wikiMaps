$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;

});

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/maps"
  }).done((maps) => {
    for(map of maps) {
      let newMap = $("<a>", { text: (map.title)+'\n', href: '/maps/'+map.id, class: 'map'}).appendTo($(".maps"));
    }
  });;
});
