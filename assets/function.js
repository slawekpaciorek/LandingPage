$(document).ready(function(){

//  Scripts for portfolio-subpage   
  
    let $portfolioDiv = $(".project>div");
    let $portfolioP = $(".project").find("div>p");

    $portfolioP.hide();

    $portfolioDiv.on("click", function(){
        $(this).children().toggle();
    });

    sliding();
  
//   Scripts for contact-subpage
  
    $('.phoneNumber').hide();
    
    $('#phoneContact').on('click', function(){
       $('span.contactIcon').hide();
        $('span.phoneNumber').show();
    });
});

// External functions

function sliding(){
    let sliderElements = [$("#1"), $("#2"), $("#3"), $("#4")];
    let n=0;
    let size = sliderElements.length -1;
    $('#left').on('click',function(){
        sliderElements[n].hide();
        if(n===0) {
            n = 3;
            sliderElements[n].show();
        }else{
            sliderElements[n].prev().show();
            n--;
        }
    });

    $('#right').on('click', function(){

        sliderElements[n].hide();
        if(n<size){
            sliderElements[n].next().show();
            n++;
        }
        else{
            n=0;
            sliderElements[n].show();
        }
    });

}
