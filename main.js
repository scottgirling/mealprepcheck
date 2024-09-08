let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
	event.addEventListener("click", () => {
		if (event.classList.contains("active")) {
			event.classList.remove("active");
		} else {
			event.classList.add("active");
		}
	});
});

// Get the modal
var modal1 = document.getElementById("modal1");

// Get the button that opens the modal
var btn1 = document.getElementById("btn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal1")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal1) {
		modal1.style.display = "none";
  	}
}




// Get the modal
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var btn2 = document.getElementById("btn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  	if (event.target == modal2) {
		modal2.style.display = "none";
  	}
}




// Get the modal
var modal3 = document.getElementById("modal3");

// Get the button that opens the modal
var btn3 = document.getElementById("btn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal3")[0];

// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  	if (event.target == modal3) {
		modal3.style.display = "none";
  	}
}