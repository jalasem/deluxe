$(document).ready(function () {
  $('.button-collapse').sideNav({
    menuWidth: 250, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });
  var windowHeight = $(window).height();
  $('.slider').slider({
    indicators: true,
    height: (windowHeight - 150 - 73)
  });
  $('.slider.main').slider({
    indicators: true,
    height: (windowHeight - 150 - 100)
  });
  $('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    merge: true,
    responsive: {
      678: {
        mergeFit: true
      },
      1000: {
        mergeFit: false
      }
    }
  });
});