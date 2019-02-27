$("#home").show();
$("#info").hide();
$("#contact").hide();

$("#menu-home").on('click', function() {
  $("#home").show();
  $("#info").hide();
  $("#contact").hide();
});

$("#menu-info").on('click', function() {
  $("#home").hide();
  $("#info").show();
  $("#contact").hide();
});

$("#menu-contact").on('click', function() {
  $("#home").hide();
  $("#info").hide();
  $("#contact").show();
});
