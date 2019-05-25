$(document).ready(function() {

  $("form.register").on("submit", function(e) {
    e.preventDefault();

    const $username = $('#nameInput').val();
    const $pswrd = $('#newPasswordInput').val();
    console.log("form data:", $(this).serialize())
    $.ajax({
      url: "/api/users/register",
      type: "POST",
      data: $(this).serialize()
    }).done(function(data) {
    })
  })
})
