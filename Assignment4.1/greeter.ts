class Greeter {
	
	message = "Welcome to Acadgild";

	constructor() {
		// code...
	}

	greet() {
		return this.message;
	}
}

let greet = new Greeter();

document.getElementById("greeter").innerHTML = greet.greet();