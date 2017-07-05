import shape = require("./Shape");

export class Circle implements shape.Shape {
	draw() {
		console.log("Drawing a circle!!");
	}
}