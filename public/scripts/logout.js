$(document).ready(function() {

  $(".logout").on("submit", function(e) {
    e.preventDefault();
    $.ajax({
      url: "/api/users/logout",
      type: "POST",
    }).done(function(data) {
    })
  })
})


