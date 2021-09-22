const slides = document.querySelectorAll('.slide');
let activeSlide = document.querySelector('.active');

slides.forEach((slide) => {
	slide.addEventListener('click', () => {
		activeSlide.classList.remove('active');
		slide.classList.add('active');
		activeSlide = slide;
	});
});
