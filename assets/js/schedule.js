$(document).ready(function() {
  $('#calendar').fullCalendar({
    // defaultView:'month',
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
    // eventClick: function(calEvent, jsEvent, view){
    //   alert('Event' + cal.Event.title);
    //   //TODO display all info for event
    //
    // },
    events:[

    ],
    resources:[
    //resources
    ]
  });
});
