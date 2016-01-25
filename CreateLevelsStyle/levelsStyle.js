"use strict"

$(document).ready(function () {
    $('p').hide();
    $('#lev1').click(function () {
        $('button').hide();
        $('p').show()
            .css('text-align','center')
            .css('font-size','2.1em')
            .css('margin-top','100px')
            .css('color','blue');
    })

});