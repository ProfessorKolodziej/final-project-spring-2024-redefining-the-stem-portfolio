//Took out the DOMContentLoaded line

	// Travel carousel
		let travelCurrentIndex = 0;  // Separate currentIndex for travel carousel
        const picsWrapper = document.querySelector('.not-research-travel-pics');
        const pics = document.querySelectorAll('.travel-pic');
		  const prevTravelButton = document.getElementById('prev-travel-btn');
		  const nextTravelButton = document.getElementById('next-travel-btn');
        const totalPics = pics.length;

        // Function to go to a specific index
        function goToIndex(index) {
            if (index < 0) {
            travelCurrentIndex = totalPics - 1;
            } else if (index > totalPics - 1) {
                travelCurrentIndex = 0; //
            } else {
                travelCurrentIndex = index;
            }
            const offset = travelCurrentIndex * -100;
            picsWrapper.style.transform = `translateX(${offset}%)`;
        }

        prevTravelButton.addEventListener('click', function () {
            goToIndex(travelCurrentIndex - 1);
        });

        nextTravelButton.addEventListener('click', function () {
            goToIndex(travelCurrentIndex + 1);
        });


