/*--- Globals ---*/
var eventDetailsContainer;


$(document).ready(function() {
  bindClickEvents();
});

function bindClickEvents() {
  $('.profile-container').off('click').on('click', '.eventsContainer li', function() {
    var eventID = $(this).attr('data-event-id');
    populateEventDetails(eventID);
  });
}

function populateEventDetails(eventID) {
  eventDetailsContainer = $('.eventDetailsContainer');
  eventDetailsContainer.html("");
  getEventDetails(eventID, function(details) {
    $.each(details, function(key, val) {
      eventDetailsContainer.append("<li><span class='eventDetailsParam'>" + key + ":</span> " + val + " </li>");
    });
  });

}


function getEventDetails(eventID, callback) {
  console.log("Fetching details for event " + eventID + "...");
  var eventDetailsURL = '/events/details/' + eventID;
  $.get(eventDetailsURL, function(data) {
    callback(data.eventDetails);
  });
}
