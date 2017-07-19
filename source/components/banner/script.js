( function($) {

  'use strict';
  
  $( function() {
  
    $( '.bj-banner' ).each( function() {
    
      var $banner = $( this );
      
      //fotorama
      $banner.find( '.fotorama' ).on( 'fotorama:ready', function (e, fotorama) {
        var $fotorama = $( this );
        $fotorama
        .delegate( '.fotorama__stage', 'mouseenter', function(e) {
          fotorama.stopAutoplay();
        }).delegate( '.fotorama__stage', 'mouseleave', function(e) {
          fotorama.startAutoplay( 20000 );
        });
      });
      
      //check the device
      function checkTheDevice() {
      
        function device() {
          var a = "ontouchstart" in document.documentElement;
          return a && $(document).width() <= 600 ? "mobile" : "desktop";
        }
        
        var e = device();
        
        $.ajax({
          url: $banner.data( 'url' ),
          type: 'GET',
          dataType: "json",
          data: "device=" + device(),
          success: function( data ) {
            if ( typeof data === 'object' && data.STATUS === 'Y' && data.HTML ) {
              $banner.html( data.HTML );
              $banner.find( '.fotorama' ).fotorama();
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