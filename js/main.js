const body = document.querySelector('body');
const amountInput = document.querySelector('[data-input="amount"]');
const playerSlider = document.querySelector('[data-slider="players"]');
const amountPlayers = document.querySelector('[data-amount="players"]');
const revenueDiv = document.querySelector('[data-amount="revenue"]');
const menuElement = document.querySelector('[data-element="menu"]');

amountInput.addEventListener('input', () => {
	calculateRevenue();
});

playerSlider.addEventListener('click', () => {
	calculateRevenue();
});

function calculateRevenue() {
	if (amountInput) {

		let playersAmount = playerSlider.value;
		amountPlayers.innerHTML = `${playersAmount} players`;

		// Z = X * 100 / Y = NGR needed
		let calculatedRevenue = amountInput.value * 100 / playerSlider.value;

		// NGR + .00
		calculatedRevenue = calculatedRevenue.toFixed(2);
		// NGR + .00 + comma's on thousands
		calculatedRevenue = calculatedRevenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		// calculatedRevenue = calculatedRevenue.toLocaleString();

		revenueDiv.innerHTML = '';
		revenueDiv.insertAdjacentHTML('beforeend', `$ ${calculatedRevenue}`);
	}
}

// Start with a scroll position of 0
let lastKnownScrollPosition = 0;

document.addEventListener('scroll', () => {
	console.log(body.clientHeight);

	lastKnownScrollPosition = window.scrollY;
	console.log(lastKnownScrollPosition);

	if (lastKnownScrollPosition < 40) {
		body.classList.remove('yolo');
		menuElement.classList.remove('sticky');
	}
	if (lastKnownScrollPosition > 40) {
		body.classList.add('yolo');
		menuElement.classList.add('sticky');
	}
});




// let result = [];
//
// for (let i = 0; i < 3; i++) {
// 	const randomNumber = Math.floor(Math.random() * 8);
// 	if (!result.includes(randomNumber)) {
// 		result.push(randomNumber);
// 	} else {
// 		i -= 1;
// 	}
// }
//
// console.log(result);
// const resultString = result.join();
// console.log(resultString);
