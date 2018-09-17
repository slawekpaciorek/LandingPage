$(document).ready(function(){

    let $portfolioDiv = $(".project>div");
    let $portfolioP = $(".project").find("div").children();

    $portfolioP.hide();

    $portfolioDiv.on("click", function(){
        $(this).children().toggle();
    });


});