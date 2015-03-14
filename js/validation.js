function tenDigits() {
	var phone = $("#phone").val().replace('(','').replace(')','').replace('-','').replace(' ','');

	if (phone.length < 10 || isNaN(phone)){
		document.getElementById("phone").style.borderColor = "red";
		document.getElementById("phone").style.backgroundColor = "#f37b7b";
	} else {
		document.getElementById("phone").style.borderColor = "green";
		document.getElementById("phone").style.backgroundColor = "#a0dd98";
		document.getElementById("phone").value = "(" + phone[0] + phone[1] + phone[2] + ") " + phone[3] + phone[4] + phone[5] + "-" + phone[6] + phone[7] + phone[8] + phone[9];
		}
};

function validateForm() {
	var name = $("#name").val();
	var address = $("#address").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	if (name.length === 0) {
		document.getElementById("name").style.backgroundColor = "#f37b7b";
	} else if (address.length === 0) {
		document.getElementById("name").style.backgroundColor = "#a0dd98";
		document.getElementById("address").style.backgroundColor = "#f37b7b";
	} else if (phone.length !== 14) {
		document.getElementById("name").style.backgroundColor = "#a0dd98";
		document.getElementById("address").style.backgroundColor = "#a0dd98";
		document.getElementById("phone").style.backgroundColor = "#f37b7b";
		alert('Please enter only numbers in the phone number field. Do not use () or -.');
	} else if (email.indexOf('@') < 1) {
		document.getElementById("name").style.backgroundColor = "#a0dd98";
		document.getElementById("address").style.backgroundColor = "#a0dd98";
		document.getElementById("phone").style.backgroundColor = "#a0dd98";
		document.getElementById("email").style.backgroundColor = "#f37b7b";
	} else {
		document.getElementById("name").style.backgroundColor = "#a0dd98";
		document.getElementById("address").style.backgroundColor = "#a0dd98";
		document.getElementById("phone").style.backgroundColor = "#a0dd98";
		document.getElementById("email").style.backgroundColor = "#a0dd98";
		alert("Thank you for submitting your information.");
		console.log('Name = ' + name + '\n' + 'Address = ' + address + '\n' + 'Phone Number = ' + phone + '\n' + 'E-mail = ' + email);
	}
};

var phoneInput = document.getElementById("phone");
phoneInput.addEventListener("keyup", tenDigits);
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", validateForm);