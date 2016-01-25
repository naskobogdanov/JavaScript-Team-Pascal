"use strict"


$(document).ready(function () {
    $('#easyLev').hide();
    $('#hardLev').hide();
    $('.question').hide();
    $('.begin').hide();

    $('#lev1').click(function () {
        $('#easyLev').slideToggle(100);

    });
    $('#lev3').click(function () {
        $('#hardLev').slideToggle(100);

    });

});

$(document).ready(function(){
   $('#lev2').add()
});

//It's makes frond page style.
$(document).ready(function(){
    $('body').css({
        'background-image':'url(images/background.png)',
        'font-family':'Arial, "Helvetica", sans-serif',
        'font-size':'2.0em'
    });
    $('img').css({
        'width':'250px',
        'position':'absolute',
        'margin-left':'240px'
    });
    $('#wrapper')
        .css({
            'margin':'0 auto',
            'width':'850px',
            'height':'600px',
            'background-color':'rgba(112, 114, 117, 0.4)',
            'text-align':'center',
            'position':'relative'
        });

    $('#lev1,#lev2,#lev3')
        .css({
            'font-size':'1.0em',
            'margin-top':'50px',
            'margin-left':'30px',
            display: 'flex',
            'border-radius':'20px'
        });
    $('.questionButt')
        .css({
            'font-size':'1.0em',
            'margin-top':'20px',
            'margin-left':'30px',
            'border-radius':'20px'
        });
});

