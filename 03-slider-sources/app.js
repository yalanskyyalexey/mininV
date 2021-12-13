const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
let activeSlideIndex = 0;
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
	changeSlide('up');
});
downBtn.addEventListener('click', () => {
	changeSlide('down');
});

function changeSlide(dirction) {
	if (dirction === 'up') {
		activeSlideIndex += 1;
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0;
		}
	} else if (dirction === 'down') {
		activeSlideIndex -= 1;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1;
		}
	}

	const height = container.clientHeight;

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
