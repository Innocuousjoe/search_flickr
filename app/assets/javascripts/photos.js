$(document).ready(function() {  
	$(function(){

	    $(".hero-unit").jPages({
	        containerID : "pics"
	    });

	});
	
	var req = new XMLHttpRequest();
$("#search-btn").click(function(){
	req.open(
	    "GET",
	    "http://api.flickr.com/services/rest/?" +
	        "method=flickr.photos.search&" +
	        "api_key=90485e931f687a9b9c2a66bf58a3861a&" +
	        "text=hello%20world&" +
	        "safe_search=1&" +  // 1 is "safe"
	        "content_type=1&" +  // 1 is "photos only"
	        "sort=relevance&" +  // another good one is "interestingness-desc"
	        "per_page=100",
	    true);
	req.onload = showPhotos;
	req.send(null);});
		
	function showPhotos() {
	  var photos = req.responseXML.getElementsByTagName("photo");

	  for (var i = 0, photo; photo = photos[i]; i++) {
	    var img = document.createElement("image");
	    img.src = constructImageURL(photo);
	    $(".hero-unit #pics").append(img);
	  }
	}
});




// See: http://www.flickr.com/services/api/misc.urls.html
function constructImageURL(photo) {
  return "http://farm" + photo.getAttribute("farm") +
      ".static.flickr.com/" + photo.getAttribute("server") +
      "/" + photo.getAttribute("id") +
      "_" + photo.getAttribute("secret") +
      "_s.jpg";
}