'use strict';
const adviceBtn = document.getElementById('advice-btn');
const adviceText = document.getElementById('advice-text');
const adviceId = document.getElementById('advice-id');

const fetchAdvice = async () => {
	const response = await fetch('https://api.adviceslip.com/advice');
	const data = await response.json();
	return data;
};

const generateAdvice = async () => {
	const advice = await fetchAdvice();
	console.log(advice);

	adviceText.innerText = advice.slip.advice;
	adviceId.innerText = advice.slip.id;
};

adviceBtn.addEventListener('click', generateAdvice);
