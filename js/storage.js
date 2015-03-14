function storeLocal() {
	localStorage.setItem("name", "Katie Bundy");
	localStorage.setItem("course", "Advanced Web Design");
};

function display() {
	var name = localStorage.getItem('name');
	var course = localStorage.getItem('course');
	$('#studentName').empty();
	$('#courseName').empty();
	$('#studentName').append("<p>Student Name: " + name + "</p>");
	$('#courseName').append("<p>Course Title: " + course + "</p>");
};

$("#getName").click(display);
storeLocal();