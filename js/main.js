(function($) {
  $(function() {

    $('.menu-btn').sideNav({
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks
      draggable: true // Choose whether you can drag to open on touch screens
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
