$(document).ready(function() {
    var button2 = $('#button2');
    var button3 = $('#button3');

    $('.button1').click(function() {
        if ($(button2).attr('disabled')) $(button2).removeAttr('disabled');
        $('.button1').addClass('gone');
        $('.button2').html("Now Me!");
    });
    $('.button2').click(function() {
        if ($(button3).attr('disabled')) $(button3).removeAttr('disabled');
        $('.button2').addClass('gone');
        $('.button3').html("Now Me!");

    });
    $('.button3').click(function() {
        $('.button3').addClass('gone');
        $('.secondary-content').addClass('appear');
    });
    $('.theone').click(function() {
        $('.secondary-content').addClass('gone');
        $('.video').addClass('appear');
    });
    $('.false').click(function() {
        $(this).addClass('gone');
    });

});
