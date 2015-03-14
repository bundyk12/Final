$('#moreInfo').submit(function(){
	event.preventDefault();
	var name = $('#name').val();
	var day = $('#day').val();
	var date = $('#date').val();
	var email = $('#email').val();
	var gender = $('#moreInfo input[name=gender]:checked').val();
	var type = $('#moreInfo input[name=type]:checked').val();
	var message = $('#message').val();
	var formData = {
		name:name,
		day: day,
		date: date,
		email: email,
		gender: gender,
		type: type,
		message: message
	};
	$.ajax({
		type: 'POST',
		url: 'https://httpbin.org/post',
		data: formData,
	}).done(function(response){
		alert('Thank you, ' + response.form.name + ", for requesting more information. We have you down as a " + response.form.gender + " that is interested in playing in a league that takes place on a " + response.form.day + " starting on " + response.form.date + ". And it looks like you are interested in learning more about " + response.form.type + ". We also received your message - " + response.form.message + " - and we will contact you back at " + response.form.email + ". Thanks again for your inquiry!" ) ;
		console.log(response.form);
	});
});
