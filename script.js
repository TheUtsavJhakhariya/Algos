
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  var scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
  document.getElementById("myBar").style.width = scrolled + "%"; 
}
 


document.addEventListener('mousemove', function(e) { 
  var cursor = document.getElementById('cursor');
  cursor.style.left = e.clientX + 'px'; 
  cursor.style.top = e.clientY + 'px';
});


        $('.buy').click(function()
{
    $('.bottom').addClass("clicked");
});
$('.remove').click(function()
{
    $('.bottom').removeClass("clicked");
}); 
jQuery( document ).ready(function( $ ) 
{ 
    if ( jQuery( '.accordion' )[0] )
    {
        jQuery( '.accordion' ).find( '.item' ).click( function( e )
        { 
            e.preventDefault();		
            jQuery( this ).next().slideToggle( 'fast' ).css( 'zoom', '1' );
            jQuery(".accordion > li > div").not($(this).next()).slideUp( 'fast' ).css( 'zoom', '1' );
            jQuery( this ).parent( 'li' ).toggleClass( 'collapse' );
        });
        jQuery( '.accordion > li' ).each( function( $ )
        {
            if ( !jQuery( this ).hasClass( 'extended' ) )
            {
                jQuery( this ).find( 'div' ).slideUp( 'fast' ).css( 'zoom', '1' ); 
            }
        });
    }
});

