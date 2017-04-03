startPromise = () => {
	let statusContainer = document.getElementById('status');

	//Sync Started
	statusContainer.innerHTML = 'Started <br/>';
	let myPromise = new Promise((resolve, reject) => {
		statusContainer.innerHTML += 'Promise started <br/>';
		resolve('Promise Made');
	});

	myPromise.then((res) => {
		statusContainer.innerHTML += res + '<br/>';
		statusContainer.innerHTML += 'Promise Fulfilled';
	});
}