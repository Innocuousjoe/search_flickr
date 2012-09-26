var popModal;

$(document).ready(function() {  
 
    popModal = function(url){
      
      var id = $('#dialog');
   
      //Get the screen height and width
      var maskHeight = $(document).height();
      var maskWidth = $(window).width();
   
      //Set height and width to mask to fill up the whole screen
      $('#mask').css({'width':maskWidth,'height':maskHeight});
       
      //transition effect     
      $('#mask').fadeIn(0);    
      $('#mask').fadeTo("fast", 0.5);  
   
      //Get the window height and width
      var winH = $(window).height();
      var winW = $(window).width();
             
      //Set the popup window to center
      $(id).css('top',  winH/2-$(id).height()/2);
      $(id).css('left', winW/2-$(id).width()/2);
	  var img = document.createElement("image");
  	  img.src = url;
	  $('#dialog').empty();
	  $('#dialog').append(img);
      //transition effect
      $(id).fadeIn(0);
    }
 
    //select all the a tag with name equal to modal
   	
    $("#content.overlay").click(function(e){e.preventDefault(); popModal();})

    //if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('#mask, .window').hide();
    });     
     
    //if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });         
     
});
