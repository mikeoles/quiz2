$(document).ready(function(){

  $('.links li a').on('click', function(e) {
		alert('you clicked a link, good for you');
	});

  $('#exit').on('click', function(e) {
    $('#exitMessage').show();
    $('section').hide();
    $('p').hide();
    $('button').hide();
    $('h1').hide();
  });

  $('li').each(function(){
    $(this).css("background-color","lightblue");
    $(this).css("border","3px black solid");
    $(this).css("width","400px");
    $(this).css("color","grey");
  });

  $('h1').on('click', function(e) {
    $(this).slideDown("slow");
  )};

	console.log("this is a message for you!!!");
});
