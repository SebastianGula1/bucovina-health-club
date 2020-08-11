/*const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevButton');
const nextBtn = document.querySelector('#nextButton');

//Counter
let counter =1;
const size = carouselImages[0].naturalWidth;

carouselSlide.style.transform ='translateX(' + (-size * counter ) + 'px)';

//Button listeners

nextBtn.addEventListener('click',()=>{
    console.log(carouselImages)
    carouselSlide.style.transition = "transform 0.4 ease-in-out";
    counter++;
    carouselSlide.style.transform ='translateX(' + (-size * counter ) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = "transform 0.4 ease-in-out";
    counter--;
    carouselSlide.style.transform ='translateX(' + (-size * counter ) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id ==='lastClone')
    {
        carouselSlide.style.transition = "none";  
        counter = carouselImages.length -2;
        carouselSlide.style.transform ='translateX(' + (-size * counter ) + 'px)';

    }
    if(carouselImages[counter].id ==='firstClone')
    {
        carouselSlide.style.transition = "none";  
        counter = carouselImages.length - counter;
        carouselSlide.style.transform ='translateX(' + (-size * counter ) + 'px)';

    }
});
*/
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "./images/Bucovina-Health-Club-1.jpeg";
images[1] = "./images/Bucovina-Health-Club-2.jpeg";
images[2] = "./images/Bucovina-Health-Club-4.jpeg";
images[3] = "./images/Bucovina-Health-Club-6.jpeg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

