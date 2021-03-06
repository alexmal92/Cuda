$(document).ready(function() {
  $('.burger').click(function() {
    $(this).toggleClass('active')
    $('.menu-mobile').toggleClass('active')
  });
});

