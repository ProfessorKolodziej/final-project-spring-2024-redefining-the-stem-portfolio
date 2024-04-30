//Took out the DOMContentLoaded line

// Research Accordion

const headers = document.getElementsByClassName("accordion-header");
const contents = document.getElementsByClassName("accordion-content");
let arrow = document.querySelectorAll('.arrow-up');

for (let i = 0; i < headers.length; i++) {
	headers[i].addEventListener("click", () => {
		// Toggle the 'expanded' class on the accordion item
		headers[i].parentNode.classList.toggle('expanded');

		// Toggle the display of the accordion content
		if (contents[i].style.display === "block") {
			contents[i].style.display = "none";
			arrow[i].classList.remove('rotated');
			arrow[i].alt = "Expand";
		} else {
			contents[i].style.display = "block";
			arrow[i].classList.add('rotated');
			arrow[i].alt = "Collapse";
		}
	});
}

// Areas of interest research carousel
const researchSlides = document.querySelectorAll('.research-slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 1;

function updateCarousel() {
	researchSlides.forEach((slide, index) => {
		slide.classList.remove('active');
		if (index === currentIndex) {
			slide.classList.add('active');
		}
	});
	document.querySelector('#research-slide-container').style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', function () {
	currentIndex = (currentIndex - 1 + researchSlides.length) % researchSlides.length;
	updateCarousel();
});

nextButton.addEventListener('click', function () {
	currentIndex = (currentIndex + 1) % researchSlides.length;
	updateCarousel();
});

updateCarousel();

