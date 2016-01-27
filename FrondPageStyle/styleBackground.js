"use strict"


$(document).ready(function () {
    $('#easyLev').hide();
    $('#middleLev').hide();
    $('#hardLev').hide();
    $('.question').hide();
    $('.begin').hide();

    $('#lev1').click(function () {
        $('#easyLev').slideToggle(100);

    });
    $('#lev2').click(function () {
        $('#middleLev').slideToggle(100);

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
        'background-image':'url(images/images.jpg)',
        'font-family':'Arial, "Helvetica", sans-serif',
        'font-size':'2.0em'
    });


    $('#wrapper')
        .css({
            'margin':'0 auto',
            'width':'850px',
            'height':'600px',
            'background-color':'rgba(255, 255, 153, 0.9)',
            'text-align':'center',
            'position':'relative',
            'color':'#003366'
        });

    $('#lev1,#lev2,#lev3')
        .css({
            'font-size':'1.0em',
            'margin-top':'50px',
            'margin-left':'30px',
            display: 'flex',
            'border-radius':'20px',
            'border':'none',
            'padding':'5px 15px'
        });
    $('#lev1').css({
        'background-color':'#66ff66'
    });
    $('#lev2').css({
        'background-color':'#3399ff'
    });
    $('#lev3').css({
        'background-color':'#ff6600'
    });
    $('.questionButtYes,.questionButtNO')
        .css({
            'font-size':'1.0em',
            'margin-top':'20px',
            'margin-left':'30px',
            'padding':'4px 10px',
            'border-radius':'20px',
            'border':'none'
        });
    $('.questionButtYes').mouseover(function(){
        $('.questionButtYes').css({
           'background-color':'#ff0066'
        });
    });
    $('.questionButtYes').mouseleave(function(){
        $('.questionButtYes').css({
            'background-color':'#ffccff'
        });
    });
    $('.questionButtNO').mouseover(function(){
        $('.questionButtNO').css({
            'background-color':'#6600ff'
        });
    });
    $('.questionButtNO').mouseleave(function(){
        $('.questionButtNO').css({
            'background-color':'#99ff33'
        });
    });
});

