import shape = require("./Shape");

export class Triangle implements shape.Shape {
	draw() {
		console.log("Drawing a triangle!!");
	}
}