$(document).ready(function() {
  $('#calendar').fullCalendar({
    defaultView:'month',
    header: {
      left:'month,agendaWeek,agendaDay',
      center:'title',
      right:'today prev,next'
    },
    dayClick: function(date, jsEvent, view, allDay) {
      var abc = prompt("Event title: ");
      var newEvent = {
        title: abc,
        start: date.format()
      }
      $('#calendar').fullCalendar('renderEvent', newEvent);
      // if(view.name != 'month')
      // return;
      // $('#calendar').fullCalendar('changeView', 'agendaDay', date);
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
});
