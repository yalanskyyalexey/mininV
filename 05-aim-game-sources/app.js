const startGameBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = [
	'#f53d3d',
	'#f26bdc',
	'#6b6ff2',
	'#42cceb',
	'#11f27a',
	'#03fc2c',
	'#8eed61',
	'#c9ff36',
	'#deda6d',
	'#f78f2d',
];
let time = 0;
let score = 0;

startGameBtn.addEventListener('click', event => {
	event.preventDefault();
	screens[0].classList.add('up');
});

timeList.addEventListener('click', event => {
	if (event.target.classList.contains('time-btn')) {
		time = parseInt(event.target.getAttribute('data-time'));
		screens[1].classList.add('up');
		startGame();
	}
});

board.addEventListener('click', event => {
	if (event.target.classList.contains('circle')) {
		score += 1;
		event.target.remove();
		createRandomCircle();
	}
});
function startGame() {
	setInterval(decriseTime, 1000);
	createRandomCircle();
	setTime(time);
}

function decriseTime() {
	if (time === 0) {
		finishGame();
	} else {
		let current = (time -= 1);
		if (current < 10) {
			current = `0${current}`;
		}
		setTime(current);
	}
}

function setTime(value) {
	timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
	timeEl.parentNode.classList.add('hide');
	board.innerHTML = `<h1>Score: <span class='primary'> ${score}</span></h1>`;
}

function createRandomCircle() {
	const circle = document.createElement('div');
	const size = getRandomNumber(10, 60);
	const { width, height } = board.getBoundingClientRect();
	const x = getRandomNumber(0, width - size);
	const y = getRandomNumber(0, height - size);
	const color = getRandomColor();

	circle.classList.add('circle');
	circle.style.width = `${size}px`;
	circle.style.height = `${size}px`;
	circle.style.top = `${y}px`;
	circle.style.left = `${x}px`;
	circle.style.background = color;
	board.append(circle);
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
