/*-- Globals --*/
//TODO: Convert Form submission from POST to AJAX in JS
$("._form-button").click(function(event){
  event.preventDefault();
  // var emailDOM = $("#emailInput");
  // var passDOM = $("#passInput");
  parentForm = $(this).parent('form');
  var serialData = parentForm.serialize();
  var formUrl = parentForm.attr('action');
  submitLogin(formUrl, serialData, function(success) {
    if(success) {
      $('form').fadeOut(500);
      $('h1.welcomeMsg').text('Welcome');
      $('.loginInnerWrapper').addClass('form-success');
      setTimeout(function () {
        window.navigate('/profile');
      }, 2000);
    } else {
      alert("Login Failure: Invalid Credentials");
    }
  });
});

$("body").on('click', '.loginWrapper a', function() {
  swapForms();
});

function submitLogin(formUrl, serialData, callback) {
  var success; //For visual testing
  // var loginURL = '/login';
  // console.log($('form').serialize());
  console.log(formUrl);
  $.post(formUrl, serialData, function(data) {
    console.log(data);
    success = data.user;
    if(!success) {
      alert(data.message);
    } else {
      callback(success);
    }
  }).fail(function(err) {
    console.log(data);
    success = false;
    callback(success);
  });

  // callback(success);
}

function swapForms() {
  $('form').fadeToggle('slow', function() {
    $(this).parent().toggleClass('hidden');
    $(this).fadeToggle('slow');
  });
}


function navigate(loc) {
  window.navigate(loc);
}
