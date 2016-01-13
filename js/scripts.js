$(document).ready(function(){
  $("form#dating").submit(function(event) {
    var music = $("input#music").val();
    var gender = $("input#gender").val();

    if (music === 'rock' && gender === 'male') {
      $("#malerock").show();
    } else if (music === 'rock' && gender === 'female') {
      $('#femalerock').show();
    } else if (music === 'rock' && gender === 'enby') {
      $('#enbyrock').show();
    } else if (music === 'rap' && gender === 'male') {
      $('#malerap').show();
    } else if (music === 'rap' && gender === 'female') {
      $('#femalerap').show();
    } else if (music === 'rap' && gender === 'enby') {
      $('#enbyrap').show();
  };
    event.preventDefault();
  });

});
