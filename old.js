//First template main dishes
const template = document.querySelector("template").content; // select the template


const main = document.querySelector("main"); //select a container element

for(let	i=0;	i<5;	i++){

let clone = template.cloneNode(true);
 // make clone of the temlate content
clone.querySelector("h3").textContent="Russian Ringbread";
clone.querySelector("h2").textContent="29,-";
clone.querySelector("p").textContent="Short Description";

	clone.querySelector("img").src="imgs/small/boef-sm.jpg";
	clone.querySelector(".alergy").src="imgs/small/alergy.png";
	clone.querySelector(".alcohol").src="imgs/small/alcohol.png";
	clone.querySelector(".soldout").src="imgs/small/soldout.png";
	clone.querySelector(".discount").src="imgs/small/discount.png";

main.appendChild(clone); // append the clone to the container element

}




// second template side dishes

const template2 = document.querySelector("template").content;
const side = document.getElementById("side"); //select a container element
for(let	i=0;	i<5;	i++){

let clone = template.cloneNode(true);
 // make clone of the temlate content
clone.querySelector("h3").textContent="Rice From Moscow";
clone.querySelector("h2").textContent="9,-";
clone.querySelector("p").textContent="Pure";

	clone.querySelector("img").src="imgs/small/caviarbruschetta-sm.jpg";
	clone.querySelector(".alergy").src="imgs/small/alergy.png";
	clone.querySelector(".discount").src="imgs/small/discount.png";

side.appendChild(clone); // append the clone to the container element

}


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
