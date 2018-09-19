$(document).ready(function() {

//    Scripts for index
    $('.info').find('button').on('click', function(){
       $('.info').hide();
    });
    $('.cookieInfo').find('button').on('click', function(){
       $('.cookieInfo').hide();
    });

//  Scripts for portfolio-subpage
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();

    let $portfolioDiv = $(".project>div");
    let $portfolioP = $(".project").find("div>p");

    $portfolioP.hide();

    $portfolioDiv.on("click", function () {
        $(this).children().toggle();
    });

    sliding();

//   Scripts for contact-subpage

    $('.phoneNumber').hide();

    $('span.contactIcon').on('click', function () {
        $(this).fadeOut(function(){
            $(this).next().fadeIn(function(){
                $(this).on('click', function () {
                    $(this).fadeOut('fast');
                    $(this).prev().fadeIn('slow');
                });
            });
        });
    });

    $('.content-box').children('a').on('mouseenter', function(){
        $(this).css("color", "white");
        $(this).on('mouseleave', function () {
            $(this).css('color', 'black');
        })

    });

});

// External functions

function sliding() {
    let sliderElements = [$("#1"), $("#2"), $("#3"), $("#4")];
    let n = 0;
    let size = sliderElements.length - 1;
    $('#left').on('click', function () {
        sliderElements[n].hide();
        if (n === 0) {
            n = 3;
            sliderElements[n].show();
        } else {
            sliderElements[n].prev().show();
            n--;
        }
    });

    $('#right').on('click', function () {

        sliderElements[n].hide();
        if (n < size) {
            sliderElements[n].next().show();
            n++;
        }
        else {
            n = 0;
            sliderElements[n].show();
        }
    });
}


