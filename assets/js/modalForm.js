$(document).ready(function(){
  // initialize input widgets first
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
      $('#endDateSelect').prop('disabled', true);
    } else {
      $('#startTimeScroll').prop('disabled', false);
      $('#endTimeScroll').prop('disabled', false);
      $('#endDateSelect').prop('disabled', false);
    }
  });

});
