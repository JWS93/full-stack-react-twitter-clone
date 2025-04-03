import $ from 'jquery';

var newUser = function (username, email, password) {
  var request = {
    type: 'POST',
    url: 'api/users',
    data: {
      user: {
        username: username,
        email: email,
        password: password
      }
    },
    success: function (response) {
      showTweets();
    },
    error: function (request, errorMsg) {
      console.log(request, errorMsg);
    }
  }

  $.ajax(request);
}