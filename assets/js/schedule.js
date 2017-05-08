/*--- Globals ---*/
var eventUrl = '/events/';
var calendar = $('#calendar');

$(document).ready(function() {
  initCalendar();
  initNewEventModal();
  initDateAndTime();
});


function initDateAndTime() {
  $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year
      autoclose: true
      // ,format: 'yyyy/mm/dd'
    });

  $('.timepicker').pickatime({
    default: 'now',
    autoclose: true,
    twelvehour: true,
    ampmclickable: true,
    vibrate: true
  });
}

function initNewEventModal() {
  $('.modal').modal();
  $('#allDayEvent').off('click').on('click', function(){
      var checked = $(this).is(':checked');
      $('#startTime, #endTime').prop('disabled', checked);
  });

}

function openNewEventModal(date) {
  $('#newEventModal').modal('open');

}

function initCalendar() {
  calendar.fullCalendar({
    events: eventUrl,
    defaultView:'month',
    header: {
      left:  'month,agendaWeek,agendaDay',
      center: 'title',
      right: 'today prev,next'
    },

    dayClick: function(date, jsEvent, view, allDay) {
      if(view.name == 'month') {
        $('#calendar').fullCalendar('changeView', 'agendaDay', date);
      } else {
        openNewEventModal();
      }
    },

    eventClick: function(calcEvent, jsEvent, view) {
       alert('Event: ' + calcEvent.title);
    }
  });

}
