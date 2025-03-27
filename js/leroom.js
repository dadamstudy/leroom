$(document).ready(function(){

    $( window ).scroll(function(){
        const scrollTop = $(window).scrollTop();
        //console.log(scrollTop);
        if( scrollTop >= 100 ) {
            $('main h1').css('top', '-100px');
        } else {
            $('main h1').css('top',0);
        }
    });
});