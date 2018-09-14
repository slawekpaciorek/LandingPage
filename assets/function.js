$(document).ready(function(){
    
    $('.phoneNumber').hide();
    
    $('#phoneContact').on('click', function(){
       $('span.contactIcon').hide();
        $('span.phoneNumber').show();
    });
});