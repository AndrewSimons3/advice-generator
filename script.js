'use strict';
const adviceBtn = document.getElementById('advice-btn');
const adviceText = document.getElementById('advice-text');
const adviceId = document.getElementById('advice-id');

const fetchAdvice = async () => {
	const response = await fetch('https://api.adviceslip.com/advice');
	const data = await response.json();
	return data;
};

fetchAdvice();

const generateAdvice = async () => {
	const advice = await fetchAdvice();
	console.log(advice);

	adviceText.innerHTML = `${advice.slip.advice}`;
	adviceId.innerHTML = `${advice.slip.id}`;
};

adviceBtn.addEventListener('click', generateAdvice);
