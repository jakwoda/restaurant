const template = document.querySelector("template").content;

// select the template


const main = document.querySelector("main");

//select a container element


const starter = document.querySelector("#starters-section")
const mainSection = document.querySelector("#main-section")
const drinks = document.querySelector("#drinks-section")
const dessert = document.querySelector("#dessert-section")
const side = document.querySelector("#side-section")
//links to api

const productlistLink = "https://kea-alt-del.dk/t5/api/productlist"
const image_path = "https://kea-alt-del.dk/t5/site/imgs/"
const long_desc = "https://kea-alt-del.dk/t5/api/product?id="

//make categories

	fetch(productlistLink).then(e => e.json()).then(data => data.forEach(showData));






// function showing dishes(oneObjects)
function showData(oneObject) {






	let clone = template.cloneNode(true);
	console.log(oneObject.name);

	clone.querySelector("img").src = image_path + "small/" + oneObject.image + "-sm.jpg";


	clone.querySelector("img").alt= oneObject.name;
	clone.querySelector("h3").textContent = oneObject.name;
	clone.querySelector("p").textContent = oneObject.shortdescription;
	clone.querySelector("h4").textContent= oneObject.price + ", -dkk"

	if(oneObject.discount){
	clone.querySelector("#discount").textContent="discount";
		clone.querySelector("#discount").textContent=oneObject.discount + "% discount"

		let disc= Math.round((oneObject.price - (oneObject.price * oneObject.discount * 0.01)))

		clone.querySelector("#disc").textContent=disc +",-dkk";



		clone.querySelector("h4").classList.add("soldout")
	};

	if(oneObject.vegetarian){
	clone.querySelector("#vege").textContent="vegetarian";
	};

	if(oneObject.soldout){
	clone.querySelector("#soldout").textContent="sold out";
};

	if(oneObject.alcohol>0){
	clone.querySelector("#alcohol").textContent=oneObject.alcohol +"%%%%";
	};




	if (oneObject.category == "starter") {
		starter.appendChild(clone);
	};

	if (oneObject.category == "main") {
		mainSection.appendChild(clone);
	};

	if (oneObject.category == "drinks") {
		drinks.appendChild(clone);
	};

	if (oneObject.category == "dessert") {
		dessert.appendChild(clone);
	};

	if (oneObject.category == "sideorders") {
		side.appendChild(clone);
	};







};





