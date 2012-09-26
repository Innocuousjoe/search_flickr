var req = new XMLHttpRequest();
var listener;

$(document).ready(function() {  	
	
	$(".btn#pics").click(function(){
		var text;
		if($("#input").val() == ""){
			text = "&text=Gogobot";
		}
		else{
			text = "&text=" + $("#input").val();
		}
	req.open(
	    "GET",
	    "http://api.flickr.com/services/rest/?" +
	        "method=flickr.photos.search&" +
	        "api_key=183d07d8ed01de504b1bf7f2ab0cc4f5&"+
	        "safe_search=1&" +  
	     	"content_type=1&" +  
	        "sort=relevance" +
			text,
	    true);
	req.onload = showPhotos;
	req.send(null);});

});



function showPhotos() {
	var photos = req.responseXML.getElementsByTagName("photo");
	$("#page_container .content").empty()
  	for (var i = 0, photo; photo = photos[i]; i++) {
    	var img = document.createElement("image");
    	img.src = constructImageURL(photo, "s");
    	$("#page_container .content").append(img);
  	}		
	
	$('#page_container').pajinate();
	
	
	listener = $(".content img").click(function(){
		popModal($(this)[0].src.replace("s.jpg", "n.jpg"));
	});
}
// See: http://www.flickr.com/services/api/misc.urls.html
function constructImageURL(photo, size) {
  return "http://farm" + photo.getAttribute("farm") +
      ".static.flickr.com/" + photo.getAttribute("server") +
      "/" + photo.getAttribute("id") +
      "_" + photo.getAttribute("secret") +
      "_" + size + ".jpg";
}