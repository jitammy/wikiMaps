$(document).ready(function() {

  $("form.login").on("submit", function(e) {
    e.preventDefault();

    const $user = $('#usernameInput').val();
    const $password = $('#passwordInput').val();
    console.log("form data:", $(this).serialize())
    $.ajax({
      url: "/api/users/login",
      type: "POST",
      data: $(this).serialize()
    }).done(function(data) {
    })
  })
})


