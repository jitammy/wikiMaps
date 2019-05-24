$(userExists = (username) => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      if $(users.name === username) {
        return true;
      }
    }
  } return false;
});;

$(getUserId = (username) => {
  $$.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      if $(users.name === username) {
        return users.id;
      }
    }
  };
});


$("form.register").on("submit", function(e) {
  e.preventDefault();
  const $username = $('#nameInput').val().length;
  const $pswrd = $('#passwordInput').val().length;
  const hashedPassword = bcrypt.hashSync($pswrd, 10);
  if ($username === 0) {//if the input is empty, display an error
    $("div.userError").slideToggle("fast");
  } else if (userExists($username)) {//if the input is empty, display an error
    $("div.userExistsError").slideToggle("fast");
  } else if ($pswrd === 0) {//if the input is empty, display an error
    $("div.pswrdError").slideToggle("fast");
  } else {
    //register the new user and display a successul registration message. Also use ajax to
    // refresh the nav bar displaying user functions
    $("div.successMessage").slideToggle("fast");
    $.ajax({
      url: $(this).attr("action"),
      type: $(this).attr("method"),
      data: $(this).serialize()
      }).done(function() {//on successful post, add the user to database
        knex('users').insert([{name: $username, password: hashedPassword}]);
        req.session.user_id = getUserId($username)
    });
  }
}
