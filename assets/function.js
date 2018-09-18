$(document).ready(function(){

    let $portfolioDiv = $(".project>div");
    let $portfolioP = $(".project").find("div>p");

    $portfolioP.hide();

    $portfolioDiv.on("click", function(){
        $(this).children().toggle();
    });

    sliding();
});

function sliding(){
    let sliderElements = [$("#1"),$("#2"),$("#3"),$("#4")];
    let n=0;
    $('#left').on('click',function(){
        sliderElements[n].hide();
        sliderElements[n].next().show();
        n++;
    });

    $('#right').on('click', function(){
       sliderElements[n].hide();
       sliderElements[n].prev().show();
        n--;
    });


}