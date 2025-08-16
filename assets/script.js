const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const dots = document.querySelector(".dots");
const dotsList = []

for (let i = 0; i < slides.length; i++){
	let dot = document.createElement("div")
	dot.classList.add("dot")
	if (i === 0) dot.classList.add("dot_selected");
	dots.appendChild(dot)
	dotsList.push(dot)
}

const arrow = document.querySelectorAll("#banner .arrow")
const arrow_left = document.querySelector("#banner .arrow_left")
const arrow_right = document.querySelector("#banner .arrow_right")

let current_index = 0

arrow_left.addEventListener("click", () =>{
	
	dotsList[current_index].classList.remove("dot_selected")

	if (current_index === 0){
		current_index = slides.length 
	}

	current_index--

	switchSlides(current_index)
})

arrow_right.addEventListener("click", () =>{
	
	dotsList[current_index].classList.remove("dot_selected")

	console.log("1:" + current_index)
	if (current_index === slides.length -1 ) {
		current_index = -1
	}

	current_index++

	switchSlides(current_index)
})


function switchSlides(current_index){

	let bannerImg = document.querySelector(".banner-img")
	let bannerText = document.querySelector("#banner p")
	const slidesPath = "./assets/images/slideshow/"

	dotsList[current_index].classList.add("dot_selected")

	bannerImg.src = slidesPath + slides[current_index].image
	bannerText.innerHTML = slides[current_index].tagLine
}