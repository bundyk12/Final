//AJAX
var searchUrl = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=beach%20volleyball&format=json&jsoncallback=?';

function getFlickrImages() {
	$.ajax({
		url: searchUrl,
		dataType: 'jsonp',
	}).done(function(response){
		// console.log(response.items);
		showResults(response.items);
	});
};

function showResults(images) {
	var flickrPics = $('#flickrPics');
	flickrPics.empty();
	$(images).each(function(i){
		showPic(images[i]);
	});
};

function showPic(imageArray) {
	$(imageArray.media).each(function(i){
		showImage(this.m);
	});
};

function showImage(image) {
	var flickrPics = $('#flickrPics');
	var imageString = '<div class=".flex-item">' +
						'<img src=' + image + '/>' +
					  '</div>';

	var eachPic = $(imageString);
	flickrPics.append(eachPic);
}

getFlickrImages();






