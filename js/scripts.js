$(document).ready(function(){
  $("#dating").submit(function(event) {
    $("#malerock, #femalerock, #enbyrock, #malerap, #femalerap, #enbyrap").hide();

    var music = $("select#music").val();
    var gender = $("select#gender").val();

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
