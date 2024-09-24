// A $( document ).ready() block.
$( document ).ready(function() {
    $('#headerul a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800);  // Adjust the speed (in milliseconds) as needed
        }
      });
      
});