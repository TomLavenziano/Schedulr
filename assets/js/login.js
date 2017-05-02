/*-- Globals --*/
//TODO: Convert Form submission from POST to AJAX in JS
$("#login-button").click(function(event){
  var emailDOM = $("#emailInput");
  var passDOM = $("#passInput");
  event.preventDefault();
  submitLogin(emailDOM, passDOM, function(success) {
    if(success) {
      $('form').fadeOut(500);
      $('h1.welcomeMsg').text('Welcome');
      $('.loginInnerWrapper').addClass('form-success');
      // redirectToHome();
    } else {
      alert("Login Failure: Invalid Credentials");
    }
  });
});

function submitLogin(emailDOM, passDOM, callback) {
  var success = true; //For visual testing
  var loginURL = 'user/';
  console.log($('form').serialize());
  // $.post(loginURL, function(data) {
  //   console.log(data);
  //   alert(data);
  // }).fail(function(err) {
  //   console.log(data);
  //   alert(data);
  // });

  callback(success);
}



function redirectToHome() {

}
