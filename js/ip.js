//AJAX

function getIP() {
	$.ajax({
		url: "http://httpbin.org/get",
	}).done(function(response){
		var ip = response.origin;
		var ipSpace = $('#ip');
		ipSpace.append(ip);
	});
};

getIP();





