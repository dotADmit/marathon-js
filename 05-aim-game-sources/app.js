const startButton = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('.board');
const colors = ['red', 'blue', 'green', 'yellow', 'white', 'maroon', 'purple', 'fuchsia', 'lime', 'olive', 'teal', 'aqua'];
let time = 0;
let score = 0;

const setTime = (value) => timeEl.textContent = `00:${value}`;
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const createRandomCircle = () => {
	const circle = document.createElement('div');
	const size = getRandomNumber(10, 60);
	const { width, height } = board.getBoundingClientRect();
	const x = getRandomNumber(0, width - size);
	const y = getRandomNumber(0, height - size);

	circle.classList.add('circle');
	circle.style.width = `${size}px`;
	circle.style.height = `${size}px`;
	circle.style.top = `${y}px`;
	circle.style.left = `${x}px`;
	circle.style.background = colors[getRandomNumber(0, colors.length - 1)]

	board.append(circle);
};

const finishGame = () => {
	timeEl.parentNode.classList.add('hide');
	board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`;
};

const startGame = () => {
	setInterval(() => {
		if (time === 0) {
			finishGame();
			return;
		}
		setTime(time < 10 ? `0${time}` : time);
		time -= 1;
	}, 1000);

	createRandomCircle();
};

startButton.addEventListener('click', (e) => {
	e.preventDefault();
	screens[0].classList.add('up');
});

timeList.addEventListener('click', ({ target }) => {
	if (target.classList.contains('time-btn')) {
		time = parseInt(target.getAttribute('data-time'));
		screens[1].classList.add('up');
		startGame();
	}
});

board.addEventListener('click', ({ target }) => {
	if (target.classList.contains('circle')) {
		score += 1;
		target.remove()
		createRandomCircle();
	}
});
