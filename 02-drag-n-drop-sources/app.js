const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', ({ target }) => {
	target.classList.add('hold');
	setTimeout(() => { target.classList.add('hide') }, 0);
});

item.addEventListener('dragend', ({ target }) => { target.className = 'item' });

placeholders.forEach((placeholder) => {
	placeholder.addEventListener('dragover', (e) => { e.preventDefault() });

	placeholder.addEventListener('dragenter', ({ target }) => { target.classList.add('hovered') });

	placeholder.addEventListener('dragleave', ({ target }) => { target.classList.remove('hovered') });

	placeholder.addEventListener('drop', ({ target }) => {
		target.classList.remove('hovered');
		target.append(item);
	});
});
