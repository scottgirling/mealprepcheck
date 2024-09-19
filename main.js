// MODALS ON VIEW ALL DISCOUNTS PAGE

// MODAL FOR EMAIL

// Get the modal
var modalEmail = document.getElementById("modalEmail");

// Get the button that opens the modal
var btnEmail = document.getElementById("btnEmail");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModalEmail")[0];

// When the user clicks on the button, open the modal
btnEmail.onclick = function() {
  modalEmail.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalEmail.style.display = "none";
}

// MODAL 1

// Get the modal
var modal1 = document.getElementById("modal1");

// Get the button that opens the modal
var btn1 = document.getElementById("btn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("closeModal1")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// MODAL 2

// Get the modal
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var btn2 = document.getElementById("btn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("closeModal2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// MODAL 3

// Get the modal
var modal3 = document.getElementById("modal3");

// Get the button that opens the modal
var btn3 = document.getElementById("btn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("closeModal3")[0];

// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// MODAL 4

// Get the modal
var modal4 = document.getElementById("modal4");

// Get the button that opens the modal
var btn4 = document.getElementById("btn4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("closeModal4")[0];

// When the user clicks on the button, open the modal
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
}

// MODAL 5

// Get the modal
var modal5 = document.getElementById("modal5");

// Get the button that opens the modal
var btn5 = document.getElementById("btn5");

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("closeModal5")[0];

// When the user clicks on the button, open the modal
btn5.onclick = function() {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
  modal5.style.display = "none";
}

// MODAL 6

// Get the modal
var modal6 = document.getElementById("modal6");

// Get the button that opens the modal
var btn6 = document.getElementById("btn6");

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("closeModal6")[0];

// When the user clicks on the button, open the modal
btn6.onclick = function() {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span6.onclick = function() {
  modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it -> FOR ALL MODALS
window.onclick = function(event) {
	if (event.target.classList.contains('modal')) {
		modal1.style.display = "none";
		modal2.style.display = "none";
		modal3.style.display = "none";
		modal4.style.display = "none";
		modal5.style.display = "none";
		modal6.style.display = "none";
	}
	if (event.target.classList.contains('modalEmail')) {
		modalEmail.style.display = "none";
	}
}

function myFunction1() {
	// Get the text field
	var copyText = document.getElementById("code1");
  
	// Select the text field
	code1.select();
	code1.setSelectionRange(0, 99999); // For mobile devices
  
	 // Copy the text inside the text field
	navigator.clipboard.writeText(code1.value);
  
	// Alert that the code copied
	var btn1 = document.getElementById("button1");
	btn1.innerHTML = 'Copied!';
}

function myFunction2() {
	// Get the text field
	var copyText = document.getElementById("code2");
  
	// Select the text field
	code2.select();
	code2.setSelectionRange(0, 99999); // For mobile devices
  
	 // Copy the text inside the text field
	navigator.clipboard.writeText(code2.value);
  
	// Alert that the code copied
	var btn2 = document.getElementById("button2");
	btn2.innerHTML = 'Copied!';
}