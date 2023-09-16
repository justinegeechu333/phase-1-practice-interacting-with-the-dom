let timerId;
function startTimer() {
	const counter = document.getElementById('counter');
	timerId = setInterval(() => {
		counter.innerText++;
	}, 1000);
}

function stopTimer() {
	clearInterval(timerId);
}
const likeCount = {
	1: 2,
	2: 3,
};
const onload = () => {
	const counter = document.getElementById('counter');
	const downIncrement = document.getElementById('minus');
	const upIncrement = document.getElementById('plus');
	const heartButton = document.getElementById('heart');
	const pauseButton = document.getElementById('pause');
	const form = document.querySelector('#comment-form');
	const list = document.querySelector('#list');
	startTimer();
	downIncrement.addEventListener('click', e => {
		console.log(e.target);
		counter.innerText--;
	});

	upIncrement.addEventListener('click', e => {
		console.log(e.target);
		counter.innerText++;
	});

	heartButton.addEventListener('click', e => {
		console.log(e.target);
		const likes = document.querySelector('.likes');
		const currNum = counter.innerText;
		if (likeCount[currNum]) {
			likeCount[currNum]++;
			const li = likes.querySelector(`#like-${currNum}`);
			li.innerText = `${currNum} liked ${likeCount[currNum]} times`;
		} else {
			const newLi = document.createElement('li');
			newLi.setAttribute('id', `like-${currNum}`);
			likeCount[currNum] = 1;
			newLi.innerText = `${currNum} liked ${likeCount[currNum]} times`;
			likes.appendChild(newLi);
		}

		console.log(likesElements);
	});

	pauseButton.addEventListener('click', e => {
		if (pauseButton.innerText === 'pause') {
			stopTimer();
			pauseButton.innerText = 'resume';
		} else {
			startTimer();
			pauseButton.innerText = 'pause';
		}
	});

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		const commentInput = document.querySelector('#comment-input');
		const aComment = document.createElement('p');
		aComment.innerText = commentInput.value;
		list.appendChild(aComment);
	});
};

document.addEventListener('DOMContentLoaded', onload);
