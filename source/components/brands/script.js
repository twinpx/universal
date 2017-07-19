( function($) {

  'use strict';
  
  $( function() {
  
    $( '.bj-brands' ).each( function() {
    
      var $brands = $( this );
      
      //check the device
      function checkTheDevice() {
      
        function device() {
          var a = "ontouchstart" in document.documentElement;
          return a && $(document).width() <= 600 ? "mobile" : "desktop";
        }
        
        var e = device();
        
        $.ajax({
          url: $brands.data( 'url' ),
          type: 'GET',
          dataType: "json",
          data: "device=" + device(),
          success: function( data ) {
            if ( typeof data === 'object' && data.STATUS === 'Y' && data.HTML ) {
              $brands.html( data.HTML );
              $brands.find( '.fotorama' ).fotorama();
            } else if ( typeof data === 'object' && data.STATUS === 'N' ) {
              setTimeout( function() {
                checkTheDevice();
              }, 1000 );
            }
          },
          error: function( a,b,c ) {
            //console.log(a);
          }
        });
      }
      checkTheDevice();
    });
  
    
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));