$( 'header .bj-search__icon' ).click( function(e) {
  e.preventDefault();
  $( this ).closest( 'header' ).find( '.bj-top-search' ).slideToggle().find( 'input[type=search]' ).focus();
});