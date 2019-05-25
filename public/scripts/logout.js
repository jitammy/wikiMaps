$(document).ready(function() {

  $("form.logout").on("submit", function(e) {
    e.preventDefault();
    $.ajax({
      url: "/api/users/logout",
      type: "POST",
    }).done(function(data) {
    })
  })
})


