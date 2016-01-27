"use strict"


$(document).ready(function () {
    $('#easyLev').hide();
    $('#middleLev').hide();
    $('#hardLev').hide();
    $('.begin').hide();
    $('.rules').hide();

    $('li').click(function(){
        $('#wrapButtons').toggle(1000);
        $('.rules').toggle(1000);

    })

    $('#lev1').click(function () {
        $('#easyLev').slideToggle(100);
        $('.questionButtNO').on('click',function(){
            $('#easyLev').hide();
        });

    });
    $('#lev2').click(function () {
        $('#middleLev').slideToggle(100);
        $('.questionButtNO').on('click',function(){
            $('#middleLev').hide();
        });
    });
    $('#lev3').click(function () {
        $('#hardLev').slideToggle(100);
        $('.questionButtNO').on('click',function(){
            $('#hardLev').hide();
        });
    });


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
            'border-radius':'50px',
            'margin':'0 auto',
            'width':'850px',
            'height':'600px',
            'background-color':'rgba(255, 255, 153, 0.9)',
            'text-align':'center',
            'position':'relative',
            'color':'#003366'
        });
    $('#wrapButtons').css({
        'margin-top':'-20px'
    });

    $('#nav').css({
        'list-style':'none',
        'margin-left':'200px'
    });
    $('li').css({
        display:'inline',
        'padding':'0px 20px 0px 0px',
        color:'#602020',
        'font-weight':'900'
    });

    $('#lev1,#lev2,#lev3')
        .css({
            'font-size':'1.0em',
            'margin-top':'30px',
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



//new functionality only with JavaScript
/*
    $('.questionButtYes').click(function(){
        $('main').hide();
    });
*/
});

