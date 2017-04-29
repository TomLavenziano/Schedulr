$(document).ready(function() {
  //should open modal on ready
  $('.modal').modal();
  //should initialize the button I added since I couldn't get it to work programmatically
  $('modalButton').modal();
  $('#calendar').fullCalendar({
    defaultView:'month',
    header: {
      left:'month,agendaWeek,agendaDay',
      center:'title',
      right:'today prev,next'
    },
    dayClick: function(date, jsEvent, view, allDay) {
      if(view.name == 'month'){
        $('#calendar').fullCalendar('changeView', 'agendaDay', date);
        return;
      }
      //should open the modal when a day is clicked in day or week view
      $('#modalForm').modal('open');
      // var newEvent = {
      //   title: abc,
      //   start: date.format()
      // }
      // $('#calendar').fullCalendar('renderEvent', newEvent);
    },
     eventClick: function(calEvent, jsEvent, view){
       alert('Event: ' + calEvent.title);
    //   //TODO display all info for event
    //
     },
    events:[

    ],
    resources:[
    //resources
    ]
  });
  $('#timeAndDate .time').timepicker({
    'showDuration': true,
    'timeFormat': 'g:ia'
  });

  $('#timeAndDate .date').pickadate({
    selectMonths: true,
    selectYears: 100,
    format: 'mm/dd/yyyy'
  });

  $('#startTimeScroll').timepicker({ 'scrollDefault' : 'now'});
  $('#endTimeScroll').timepicker();

  $('#allDaySwitch').prop('checked', false);
  $('#allDaySwitch').on("click", function(){
    if($('#allDaySwitch').is(':checked')){
      $('#startTimeScroll').prop('disabled', true);
      $('#endTimeScroll').prop('disabled', true);
      $('#startDateSelect').prop('disabled', true);
      $('#endDateSelect').prop('disabled', true);
    } else {
      $('#startTimeScroll').prop('disabled', false);
      $('#endTimeScroll').prop('disabled', false);
      $('#startDateSelect').prop('disabled', false);
      $('#endDateSelect').prop('disabled', false);
    }
  });
});
