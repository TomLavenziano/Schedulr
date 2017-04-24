$(document).ready(function() {
  $('#calendar').fullCalendar({
    defaultView:'month',
<<<<<<< HEAD
    header: {
      left:'month,agendaWeek,agendaDay',
      center:'title',
      right:'today prev,next'
    },
    dayClick: function(date, jsEvent, view, allDay) {
      if(view.name != 'month')
      return;
      $('#calendar').fullCalendar('changeView', 'agendaDay', date);
    },
    eventClick: function(calEvent, jsEvent, view){
      alert('Event' + cal.Event.title);
      //TODO display all info for event

    },
=======
>>>>>>> bf6c6d253fb9faa7e7f8b0b4661c4f5cc3412487
    events:[

    ],
    resources:[
    //resources
    ]
  });
});
