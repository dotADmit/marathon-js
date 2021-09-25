const board = document.querySelector('#board');
const colors = ['red', 'blue', 'green', 'yellow', 'white', 'maroon', 'purple', 'fuchsia', 'lime', 'olive', 'teal', 'aqua'];
const SQUARES_NUMBER = 420;

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => {
		const color = getRandomColor();
		square.style.backgroundColor = color;
		square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
	});

	square.addEventListener('mouseleave', () => {
		square.style.backgroundColor = '#1d1d1d';
		square.style.boxShadow = `0 0 2px #000`;
	});

	board.append(square);
}